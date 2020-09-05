FROM node:12.18-alpine as build

WORKDIR /client
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

FROM nginx:1.19-alpine as runtime

WORKDIR /client
COPY --from=build /client/dist/ /usr/share/nginx/html