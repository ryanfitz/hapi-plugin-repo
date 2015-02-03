'use strict';

var Hapi   = require('hapi'),
    plugin = require('../index'),
    server = new Hapi.Server(),
    bunyan = require('bunyan');

var log = bunyan.createLogger({
  name: 'example-server',
  serializers: bunyan.stdSerializers
});

server.connection({ port: 8080 });

server.register(plugin, function (err) {
  if(err) {
    log.error({err : err}, 'Failed to load plugins');
  }
});

server.start(function (err) {
  if(err) {
    log.error({err : err}, 'Failed to start server');
  } else {
    log.info('Server start at: ' + server.info.uri);
  }
});
