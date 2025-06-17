import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '../lib/jwt';

const prisma = new PrismaClient();
const router = Router();

router.get('/', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ error: 'No token provided' });
      return
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token) as any;

    const memberships = await prisma.organizationMembership.findMany({
      where: { userId: decoded.sub },
      include: {
        organization: true,
      },
    });

    const results = memberships.map((m) => ({
      role: m.role,
      joinedAt: m.joinedAt,
      organization: {
        id: m.organization.id,
        name: m.organization.name,
        slug: m.organization.slug,
      },
    }));

      res.json(results);
      return
  } catch (err) {
    console.error(err);
      res.status(401).json({ error: 'Invalid token' });
      return
  }
});

export default router;
