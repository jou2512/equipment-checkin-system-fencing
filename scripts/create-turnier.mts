import fs from 'fs-extra';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'child_process';

// ESM-kompatibles __dirname erzeugen
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const slug = process.argv[2];

if (!slug) {
  console.error('❌ Bitte einen Turnier-Slug angeben.');
  process.exit(1);
}

const base = path.resolve(__dirname, '..');
const template = path.join(base, 'tournament-template');
const target = path.join(base, 'tenants', slug);
const composeTarget = path.join(base, 'infra', 'tenants', `docker-compose.${slug}.yml`);

if (fs.existsSync(target)) {
  console.error('❌ Dieses Turnier existiert bereits.');
  process.exit(1);
}

console.log(`📁 Erstelle Turnier-Instanz: ${slug}`);
fs.copySync(template, target);

// .env vorbereiten
const envContent = `DATABASE_URL=postgresql://postgres:postgres@${slug}_db:5432/${slug}
PORT=4100
`;
fs.writeFileSync(path.join(target, '.env'), envContent);

// Docker Compose für Turnier schreiben
const compose = `
version: '3.9'
services:
  ${slug}_db:
    image: postgres:16
    container_name: ${slug}_db
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: ${slug}
    ports:
      - "54${Math.floor(Math.random() * 90 + 10)}:5432"
    volumes:
      - ${slug}_db_data:/var/lib/postgresql/data

  ${slug}_service:
    build:
      context: ../../tenants/${slug}
    container_name: ${slug}_service
    restart: always
    ports:
      - "41${Math.floor(Math.random() * 90 + 10)}:4100"
    env_file:
      - ../../tenants/${slug}/.env

volumes:
  ${slug}_db_data:
`;

fs.writeFileSync(composeTarget, compose.trim());

console.log(`✅ Turnier ${slug} vorbereitet.`);
