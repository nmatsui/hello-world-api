'use strict';
/*
 * REST API server to check deployment process
 *
 * Copyright Nobuyuki Matsui<nobuyuki.matsui>.
 *
 * SPDX-License-Identifier: MIT
 */

const http = require('http');
const logger = require('log4js').getLogger();
logger.level = 'debug';

const DEFAULT_MESSAGE = 'hello world!';
const DEFAULT_PORT = '3000';
const MESSAGE = process.env.MESSAGE || DEFAULT_MESSAGE;
var PORT = process.env.PORT || DEFAULT_PORT;

let iPort = Number.parseInt(PORT);
if (!Number.isInteger(iPort) || iPort < 0 || iPort > 65535) {
    PORT = DEFAULT_PORT;
}

const server = http.createServer((request, response) => {
    logger.info(`Received request for URL: ${request.url}`);
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify({'message': MESSAGE}));
});
server.listen(PORT);
exports.started = server;
exports.listenPort = PORT;
logger.info(`Start server at port ${PORT}`);
