// --- src/getPrismaForTenant.ts ---
import { PrismaClient } from '@prisma/client';

const clients: Record<string, PrismaClient> = {};

export function getPrismaForTenant(schema: string): PrismaClient {
  if (!clients[schema]) {
    clients[schema] = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL!.replace('public', schema),
        },
      },
    });
  }
  return clients[schema];
}