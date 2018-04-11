FROM node:8.11-alpine
MAINTAINER Nobuyuki Matsui <nobuyuki.matsui@gmail.com>

RUN apk --no-cache add tini
ENTRYPOINT ["/sbin/tini", "--"]

COPY server.js /opt/server.js
EXPOSE 3000
CMD ["node", "/opt/server.js"]

## server.js like below:
#
# 'use strict';
#
# const MESSAGE = process.env.MESSAGE || "hello world!";
# const PORT = process.env.PORT || "3000"
# const http = require('http');
#
# http.createServer((request, response) => {
#   console.log(`Received request for URL: ${request.url}`);
#   response.writeHead(200, {'Content-Type': 'application/json'});
#   response.end(JSON.stringify({'message': MESSAGE}));
# }).listen(PORT);
# console.log(`Start server at port ${PORT}`);
