import { PrismaClient, Role, PlanType } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // 1. Benutzer anlegen
  const password = await bcrypt.hash('test123', 10); // Login-Passwort

  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      passwordHash: password,
    },
  });

  // 2. Organisation anlegen
  const org = await prisma.organization.upsert({
    where: { slug: 'zurich-open' },
    update: {},
    create: {
      name: 'Zürich Open',
      slug: 'zurich-open',
      ownerId: user.id,
    },
  });

  // 3. Mitgliedschaft verknüpfen
  await prisma.organizationMembership.upsert({
    where: {
      userId_organizationId: {
        userId: user.id,
        organizationId: org.id,
      },
    },
    update: {},
    create: {
      userId: user.id,
      organizationId: org.id,
      role: Role.ADMIN,
    },
  });

  // 4. Settings (optional)
  await prisma.organizationSetting.createMany({
    data: [
      {
        organizationId: org.id,
        key: 'theme',
        value: 'dark',
      },
      {
        organizationId: org.id,
        key: 'welcomeText',
        value: 'Willkommen beim Zürich Open!',
      },
    ],
    skipDuplicates: true,
  });

  // 5. Orga-Plan (optional)
  await prisma.organizerPlan.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      planType: PlanType.PRO,
      maxTournaments: 10,
    },
  });

  console.log('✅ Seed erfolgreich durchgeführt!');
}

main()
  .catch((e) => {
    console.error('❌ Fehler beim Seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
