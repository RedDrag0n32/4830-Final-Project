# Reference: This file and the Procfile in this directory were taken from Chris Scully's code for the guest Docker lecture.

FROM node:19

# RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

# RUN npm cache clean
RUN npm install

COPY . /usr/src/app
EXPOSE 3000

CMD ["node","server.js"]
