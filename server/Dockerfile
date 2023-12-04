FROM node:20.10-alpine3.17

WORKDIR /app
COPY ./index.js .
COPY ./package.json .
COPY ./vercel.json .

RUN npm install

CMD ["node", "index.js"]