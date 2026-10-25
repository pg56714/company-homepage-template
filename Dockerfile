FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn

RUN corepack enable
RUN yarn install --immutable

COPY . .

RUN yarn build

ENV NODE_ENV=production
ENV HOST=0.0.0.0

CMD ["yarn", "start"]
