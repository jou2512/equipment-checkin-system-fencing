// --- prisma/seed.ts ---
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.fencer.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      weapon: 'Foil',
    },
  });
}

main().catch(console.error).finally(() => prisma.$disconnect());