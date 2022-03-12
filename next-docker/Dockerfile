FROM node:16.14.0-alpine as dependencies
WORKDIR /app
COPY package.json ./
RUN yarn install 
# --frozen-lockfile

FROM node:16.14.0-alpine as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn build

FROM node:16.14.0-alpine as runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]