'use strict';
var test = require('ava');
var ensureKeys = require('./');

test(function (t) {
  var json = {
    name: 'bigruan',
    age: 12,
    child: {
      name: 'yulong',
      age: 1
    }
  }
  ensureKeys(json, ['name', 'job', 'child.name'], function(val) {
    t.assert(val === 'job');
  });
});
