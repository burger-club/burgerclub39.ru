FROM node:16-alpine3.14

WORKDIR /app

COPY ["./package.json", "./package-lock.json", "./"]

RUN npm ci --ignore-scripts &&\
  npm cache clean --force

COPY . .

ENV NODE_ENV=production

RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]
