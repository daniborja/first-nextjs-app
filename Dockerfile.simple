FROM node:18-alpine3.17

RUN mkdir -p /app

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

# USER nextjs

CMD [ "yarn", "start" ]
