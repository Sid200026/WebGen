FROM node:16.2.0-alpine
WORKDIR /app
ADD package*.json ./
RUN yarn config set network-timeout 600000 -g
RUN yarn install
ADD . .
RUN scripts/asset_copy.sh.sh
ARG PORT
EXPOSE $PORT
CMD yarn run conc