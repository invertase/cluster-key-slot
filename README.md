[![Coverage Status](https://coveralls.io/repos/github/Salakar/cluster-key-slot/badge.svg?branch=master)](https://coveralls.io/github/Salakar/cluster-key-slot?branch=master)
![Downloads](https://img.shields.io/npm/dt/cluster-key-slot.svg)
[![npm version](https://img.shields.io/npm/v/cluster-key-slot.svg)](https://www.npmjs.com/package/cluster-key-slot)
[![node](https://img.shields.io/node/v/gh-badges.svg?maxAge=2592000)](https://github.com/Salakar/cluster-key-slot)
[![dependencies](https://img.shields.io/david/Salakar/cluster-key-slot.svg)](https://david-dm.org/Salakar/cluster-key-slot)
[![build](https://travis-ci.org/Salakar/cluster-key-slot.svg)](https://travis-ci.org/Salakar/cluster-key-slot)
[![License](https://img.shields.io/npm/l/cluster-key-slot.svg)](/LICENSE)

# cluster-key-slot

A high performance cluster key slot calculator for node redis clients e.g. [node_redis](https://github.com/NodeRedis/node_redis) and [ioredis](https://github.com/luin/ioredis).

This also handles key tags such as `somekey{actualTag}`.

## Install

Install with [NPM](https://npmjs.org/):

```
npm install cluster-key-slot
```

## Usage

```js
const calculateSlot = require('cluster-key-slot');
const calculateMultipleSlots = require('cluster-key-slot').generateMulti;

// ...

// a single slot number
const slot = calculateSlot('test:key:{butOnlyThis}redis');

// multiple keys - multi returns a single key slot number, returns -1 if any
// of the keys does not match the base slot number (base is defaulted to first keys slot)
// This is useful to quickly determine a singe slot for multi keys operations.
const slotForRedisMulti = calculateSlot([
  'test:key:{butOnlyThis}redis',
  'something:key45:{butOnlyThis}hello',
  'example:key46:{butOnlyThis}foobar',
]);
```

## Benchmarks

`OLD` in these benchmarks refers to the `ioredis` crc calc and many of the other calculators that use `Buffer`.

![](https://files.gitter.im/gosquared/redis-clustr/x8m8/blob)
