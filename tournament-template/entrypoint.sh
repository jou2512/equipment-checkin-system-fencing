#!/bin/sh

echo "🔄 Migration starten..."
npx prisma migrate dev --name init

echo "🚀 Starte Turnier-Service..."
pnpm dev
