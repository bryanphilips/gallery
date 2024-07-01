FROM node:19


WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

RUN npm fund

RUN npm audit

COPY . .



EXPOSE 5000

CMD [ "node", "server.js" ]