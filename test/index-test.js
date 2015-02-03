'use strict';

// Load modules

var Code = require('code');
var Hapi = require('hapi');
var Lab = require('lab');


// Declare internals

//var internals = {};

// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('hapi-plugin', function () {

  it('should not return error', function (done) {

    var server = new Hapi.Server();
    server.register(require('../'), function (err) {

      expect(err).to.not.exist();

      return done();
    });
  });

});
