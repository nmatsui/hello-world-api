'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

var env;
chai.use(chaiHttp);
chai.should();

describe('listening port', () => {
    beforeEach(done => {
        env = process.env;
        done();
    });
    afterEach(done => {
        delete require.cache[require.resolve('server')];
        process.env = env;
        done();
    });
    it('should be the default port when no environment variable', () => {
        const server = require('server');
        server.listenPort.should.be.eq('3000');
    });
    it('should be the PORT environment variable', () => {
        process.env.PORT = '9999';
        const server = require('server');
        server.listenPort.should.be.eq('9999');
    });
});
