FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --output-path=dist/app

FROM nginx:alpine
COPY --from=build /app/dist/app/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
