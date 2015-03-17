'use strict';
var test = require('ava');
var ensureKey = require('./');

test(function (t) {
  var json = {
    name: 'bigruan',
    age: 12,
    child: {
      name: 'yulong',
      age: 1
    }
  }
  t.assert(ensureKey(json, ['name', 'job', 'child.name']).join('') == ['job'].join(''));
});
