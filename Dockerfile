FROM node:lts-alpine AS builder
ARG APP_VERSION=dev
ENV NEXT_PUBLIC_APP_VERSION=$APP_VERSION

WORKDIR /app

RUN corepack enable && corepack prepare yarn@4.9.1 --activate

COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install

COPY . .
RUN yarn build

FROM node:lts-alpine AS runner
ARG APP_VERSION=dev
ENV NEXT_PUBLIC_APP_VERSION=$APP_VERSION \
    APP_VERSION=$APP_VERSION \
    NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1
LABEL org.opencontainers.image.version=$APP_VERSION

WORKDIR /app

RUN corepack enable && corepack prepare yarn@4.9.1 --activate \
 && addgroup -S nodejs -g 1001 \
 && adduser  -S nextjs -u 1001

COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

RUN mkdir -p /app/.yarn && chown -R nextjs:nodejs /app/.yarn

USER nextjs
EXPOSE 3000

CMD ["yarn", "start"]
