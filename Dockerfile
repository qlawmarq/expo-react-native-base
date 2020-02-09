FROM node:alpine
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006

RUN apk update && apk add bash

RUN \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*

RUN apk add git

RUN yarn global add expo-cli

WORKDIR /usr/src
CMD ["/bin/sh"]