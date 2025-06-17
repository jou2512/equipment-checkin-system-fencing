FROM node:20

WORKDIR /app

COPY . .

RUN corepack enable && pnpm install
RUN npx prisma generate

CMD ["pnpm", "dev"]
