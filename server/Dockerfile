FROM node:12.18-alpine

WORKDIR /server

COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

CMD [ "node", "build/index.js" ]