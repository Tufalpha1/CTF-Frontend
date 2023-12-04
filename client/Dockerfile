FROM node:20.10-alpine3.17

WORKDIR /app
# Copy everything except the node_modules folder
COPY . .

RUN npm install

CMD ["npm" "run" "dev"]