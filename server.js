'use strict';
/*
 * REST API server to check deployment process
 *
 * Copyright Nobuyuki Matsui<nobuyuki.matsui>.
 *
 * SPDX-License-Identifier: MIT
 */

const MESSAGE = process.env.MESSAGE || "hello world!";
const PORT = process.env.PORT || "3000"
const http = require('http');

http.createServer((request, response) => {
  console.log(`Received request for URL: ${request.url}`);
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(JSON.stringify({'message': MESSAGE}));
}).listen(PORT);
console.log(`Start server at port ${PORT}`);
