FROM node:22.17.0-slim@sha256:b2fa526a10dad3c5ab4b3779eca81607ed05a96160ef5497c36cd4ebed68803d AS build

WORKDIR /app
COPY nestjs-sample-app/package*.json ./
RUN npm install
COPY nestjs-sample-app/* .
RUN npm run build
RUN ls dist
EXPOSE 3000
CMD ["node", "dist/main"]