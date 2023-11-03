FROM node:lts-bullseye-slim AS build

WORKDIR /app    

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build
COPY .env ./build/.env

FROM node:lts-bullseye-slim

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/yarn.lock ./yarn.lock

EXPOSE 8000

CMD ["node","build/index.js"]