FROM node:14.17-alpine3.14 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY yarn.lock ./

COPY . ./

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]

