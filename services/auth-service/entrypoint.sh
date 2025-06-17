#!/bin/sh

echo "🔄 Migration für core_auth starten..."
npx prisma migrate dev --name init

echo "🔄 Seed-Daten für core_auth erstellen..."
pnpm seed

echo "🚀 Starte auth-service..."
pnpm dev
