# syntax = docker/dockerfile:1.0-experimental

# Development stage
# ---------------------------------------
FROM node:12.17-alpine3.11 AS base

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV SERVER_PORT=3000
ENV PATH /app/node_modules/.bin:$PATH

RUN \
  mkdir /app && \
  chown node:node /app

WORKDIR /app

USER node

COPY --chown=node:node package*.json yarn.lock netlify.toml ./

RUN yarn --pure-lockfile --ignore-optional

EXPOSE $SERVER_PORT 9229

CMD [ "yarn", "start" ]
