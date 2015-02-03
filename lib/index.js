'use strict';

var bunyan = require('bunyan');
var log    = bunyan.createLogger({name: 'hapi-plugin'});

//var internals = {};

exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/',
    config: {
      handler: function (request, reply) {
        return reply('OK');
      },
      id: 'root'
    }
  });

  log.info('hapi-plugin registered');

  next();
};

exports.register.attributes = {
  pkg: require('../package.json')
};
