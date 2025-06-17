import { Router } from 'express';
import { PrismaClient, Role } from '@prisma/client';
import { verifyToken } from '../lib/jwt';
// TODO - Entweder Logging/Notification zentralisieren
// NOTE - Hier wird der CLI-Befehl zum Deployment des Turniers getriggert
import { exec } from 'child_process';
// TODO - Später als Queue-Event oder Deployment-Worker outsourcen
import fetch from 'node-fetch';

const prisma = new PrismaClient();
const router = Router();

router.post('/', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'No token provided' });
    return
  }

  const token = authHeader.split(' ')[1];
  let userId: string;

  try {
    const decoded = verifyToken(token) as any;
    userId = decoded.sub;
  } catch {
    res.status(401).json({ error: 'Invalid token' });
    return
  }

  const { name, slug } = req.body;
  if (!name || !slug) {
    res.status(400).json({ error: 'Missing name or slug' });
    return
  }

  // 1. Plan check
  const plan = await prisma.organizerPlan.findUnique({ where: { userId } });
  const limit = plan?.maxTournaments ?? 1;

  const currentCount = await prisma.organization.count({
    where: { ownerId: userId },
  });

  if (currentCount >= limit) {
      res.status(403).json({ error: 'Organization limit reached' });
    return
  }

  // 2. Turnier erstellen
  const org = await prisma.organization.create({
    data: {
      name,
      slug,
      ownerId: userId,
    },
  });

  // 3. Mitgliedschaft eintragen
  await prisma.organizationMembership.create({
    data: {
      userId,
      organizationId: org.id,
      role: Role.ADMIN,
    },
  });

  // nach erfolgreichem Prisma-Eintrag:
  fetch(`http://tournament-core:4200/tenants/${slug}/migrate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((data) => console.log('✅ Tenant-Migration:', data))
    .catch((err) => {
      console.error('❌ Fehler bei Tenant-Migration:', err.message);
      // FIXME - später: Retry oder Alert
    });

  res.status(201).json({
    message: 'Organization created',
    organization: {
      id: org.id,
      name: org.name,
      slug: org.slug,
    },
  });
});

export default router;
