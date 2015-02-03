'use strict';

var bunyan = require('bunyan');

var internals = {};

internals.createLogger = function (settings) {
  if(settings.log) {
    return  settings.log.child({
      component: 'HapiPlugin',
      serializers: bunyan.serializers
    });
  } else {
    return bunyan.createLogger({
      name: 'HapiPlugin',
      stream: process.stderr,
      level: process.env.PLUGIN_LOG_LEVEL || 'fatal',
      serializers: bunyan.serializers
    });
  }
};

exports.register = function (server, options, next) {
  var log = internals.createLogger(options);

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
