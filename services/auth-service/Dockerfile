FROM node:20

WORKDIR /app

COPY . .

RUN corepack enable && pnpm install
RUN npx prisma generate
RUN chmod +x entrypoint.sh

CMD ["./entrypoint.sh"]
