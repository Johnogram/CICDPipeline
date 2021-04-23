# First stage, install dependencies.
FROM node:12-stretch as installer

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Second stage, build and run project.
FROM node:12-stretch

WORKDIR /app

COPY --from=installer /app/node_modules node_modules
COPY . .

RUN yarn run build

EXPOSE 80
CMD ["yarn", "start"]
