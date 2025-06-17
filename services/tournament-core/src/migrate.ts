// --- src/util/migrate.ts ---

import { execSync } from 'child_process';
import { PrismaClient } from '@prisma/client';

export async function ensureTenantSchemaAndMigrate(slug: string) {
  const client = new PrismaClient();
  // NOTE - Erstellt das Schema falls es nicht existiert
  await client.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "${slug}"`);

  const baseUrl = process.env.DATABASE_URL!;
  const schemaUrl = baseUrl.replace('schema=public', `schema=${slug}`);

  // TODO - Später durch internen SQL-Migrator ersetzen
  try {
    execSync(`npx prisma migrate deploy`, {
      stdio: 'inherit',
      env: {
        ...process.env,
        DATABASE_URL: schemaUrl,
      },
    });
  } catch (e) {
    console.error('❌ Migration für Tenant fehlgeschlagen:', slug);
    throw e;
    }
    await client.$disconnect();
}