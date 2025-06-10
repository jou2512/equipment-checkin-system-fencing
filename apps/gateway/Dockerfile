# 1. Base image
FROM node:18-alpine

# 2. Set working dir
WORKDIR /app

# 3. Copy files
COPY . .

# 4. Install deps & build
RUN npm install -g pnpm \
    && pnpm install \
    && pnpm run build

# 5. Expose + start
EXPOSE 8080
CMD ["node", "dist/index.js"]
