ensure-keys
========
[![build status](https://secure.travis-ci.org/ruanyl/ensure-keys.svg)](http://travis-ci.org/ruanyl/ensure-keys)
[![NPM version](https://badge.fury.io/js/ensure-keys.svg)](http://badge.fury.io/js/ensure-keys)

ensure a json has specific keys

## Installation

This module is installed via npm:

``` bash
$ npm install ensure-keys --save
```

## Example Usage

``` js
var ensureKeys = require('ensure-keys');

var json = {
  name: 'bigruan',
  age: 12,
  child: {
    name: 'yulong',
    age: 1
  }
}
// return the keys that not exists or has value: undefined, null and ''
ensureKeys(json, ['name', 'job', 'child.name']); // -> ['job']
```
