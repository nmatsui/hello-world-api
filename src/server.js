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
const Config = require('src/config');

const config = new Config();
logger.level = config.logLevel;

module.exports = http.createServer((request, response) => {
    logger.info(`Received ${request.method} request to: ${request.url}`);
    let result = JSON.stringify({'message': config.message});
    response.writeHead(200, {'Content-Type': 'application/json'});
    logger.info(`Respond JSON: ${result}`);
    response.end(result);
}).listen(config.port);
logger.info(`Start server at port ${config.port}`);
