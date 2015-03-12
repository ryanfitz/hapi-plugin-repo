'use strict';

// Load modules

var Code = require('code');
var Hapi = require('hapi');
var Lab = require('lab');
var bunyan = require('bunyan');


// Declare internals

//var internals = {};

// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var expect = Code.expect;

var plugin = require('../');

describe('hapi-plugin', function () {
  var server;

  beforeEach(function (done) {
    server = new Hapi.Server();
    server.connection();
    return done();
  });

  it('should not return error', function (done) {
    server.register(plugin, function (err) {

      expect(err).to.not.exist();

      return done();
    });
  });

  it('should create child logger', function (done) {
    var options = {
      log : bunyan.createLogger({name: 'plugin-test', level : 'fatal'})
    };

    server.register( {
      register : plugin,
      options : options
    }, function (err) {

      expect(err).to.not.exist();

      return done();
    });
  });


});
