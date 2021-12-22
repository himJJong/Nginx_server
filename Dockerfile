FROM node:6


COPY package.json /src/package.json

RUN cd /src; npm install
COPY . /src
EXPOSE 9700
WORKDIR /src

CMD node server.js
