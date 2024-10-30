FROM node:22-alpine as base

ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY ./package.json ./

RUN npm install --no-fund --no-update-notifier --no-audit \
    && npm cache clean --force

FROM base as builder

COPY ./server ./server
COPY ./src ./src
COPY ./webpack.*.js ./

RUN NODE_ENV=development npm install --no-fund --no-update-notifier --no-audit \
    && npm cache clean --force \
    && BABEL_ENV=node npm run build

FROM base as productionImage

COPY --from=builder /usr/src/app/server/ /usr/src/app/server/
COPY --from=builder /usr/src/app/dist/ /usr/src/app/dist/

CMD ["npm", "run", "serve"]