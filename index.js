'use strict';
var get = require('get-value');

function ensureKeys(json, keys, callback) {
  var emptyKeys = [];
  keys.forEach(function(k) {
    var v = get(json, k);
    if(v === undefined || v === null || v === '') {
      emptyKeys.push(k);
    }
  });

  if(emptyKeys && typeof callback === 'function') {
    emptyKeys.forEach(function(val) {
      callback(val);
    });
  }

  return emptyKeys;
}

module.exports = ensureKeys;
