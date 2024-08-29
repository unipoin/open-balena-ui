FROM node:22-alpine as builder

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY ./server ./server
COPY ./src ./src
COPY ./webpack.*.js ./
COPY ./package.json ./

RUN npm install --no-fund --no-update-notifier --no-audit \
    && NODE_ENV=production BABEL_ENV=node npm run build

FROM node:22-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/server/ /usr/src/app/server/
COPY --from=builder /usr/src/app/dist/ /usr/src/app/dist/
COPY --from=builder /usr/src/app/package.json /usr/src/app/package.json

RUN npm install --no-fund --no-update-notifier --no-audit

CMD ["npm", "run", "serve"]