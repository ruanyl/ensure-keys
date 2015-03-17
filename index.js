'use strict';
var get = require('get-value');

function ensureKeys(json, keys) {
  var emptyKeys = [];
  keys.forEach(function(k) {
    var v = get(json, k);
    if(undefined === v) {
      emptyKeys.push(k);
    }
  });

  return emptyKeys;
}

module.exports = ensureKeys;
