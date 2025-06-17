# --------------------------
# 1. Base image mit pnpm
# --------------------------
FROM node:20-alpine AS base

WORKDIR /app

# Kopiere alles Nötige rein
COPY . .

# pnpm aktivieren
RUN corepack enable && corepack prepare pnpm@latest --activate

# Installiere nur relevante Workspaces (Landing + UI + Tailwind Config)
RUN pnpm install --filter @fecs/ui... --filter @fecs/tailwind-config... --filter landing...

# Baue @fecs/ui zuerst (damit keine .ts-Dateien mehr im Build sind)
RUN pnpm --filter @fecs/ui... build

# Baue Landing-App (jetzt kennt sie die gebaute UI)
RUN pnpm --filter landing... build

# --------------------------
# 2. Production Runtime Layer
# --------------------------
FROM node:20-alpine AS runner

WORKDIR /app

# Kopiere gebautes Landing-Output
COPY --from=base /app/apps/landing/.next .next
COPY --from=base /app/apps/landing/public ./public
COPY --from=base /app/apps/landing/package.json ./
COPY --from=base /app/apps/landing/next.config.mjs ./
COPY --from=base /app/apps/landing/.env.production .env.production

# Kopiere nur gebaute node_modules + dist
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/packages/ui/dist ./node_modules/@fecs/ui
COPY --from=base /app/packages/tailwind-config ./node_modules/@fecs/tailwind-config

# Umgebungsvariablen
ENV PORT=3000
EXPOSE 3000

CMD ["pnpm", "start"]
