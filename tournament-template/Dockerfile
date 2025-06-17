FROM node:20

WORKDIR /app

# 📦 Projekt kopieren
COPY . .

# 📦 Abhängigkeiten installieren
RUN corepack enable && pnpm install

# 🔧 Prisma Client bauen
RUN npx prisma generate

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

CMD ["./entrypoint.sh"]
