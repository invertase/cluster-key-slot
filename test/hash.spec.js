/* eslint-env mocha */
/* eslint func-names: 0 */

var assert = require('assert');
var generate = require('../lib');
var generateMulti = require('../lib').generateMulti;

// noinspection SpellCheckingInspection
var tests = {
  123465: 1492,
  foobar: 12325,
  abcdefghijklmnopqrstuvwxyz: 9132,
  'gsdfhan$%^&*(sdgsdnhshcs': 15532
};

var testsMulti = [
  'abcdefghijklmnopqrstuvwxyz',
  'abcdefghijklmnopqrstuvwxyz',
  'abcdefghijklmnopqrstuvwxyz',
  'abcdefghijklmnopqrstuvwxyz',
  'abcdefghijklmnopqrstuvwxyz',
  'abcdefghijklmnopqrstuvwxyz',
  'abcdefghijklmnopqrstuvwxyz',
  'abcdefghijklmnopqrstuvwxyz',
];

var testsMultiResult = 9132;

function assertHash(string) {
  assert(generate(string) === tests[string], string + ' - generated invalid hash.');
}

describe('single hash: generate()', function () {
  it('generate a correct hash from string', function () {
    Object.keys(tests).forEach(assertHash);
  });
});

describe('multiple hashes: generateMulti()', function () {
  it('generate a correct hash from multiple strings', function () {
    assert(generateMulti(testsMulti) === testsMultiResult);
  });

  it('returns -1 if any of the keys generates a different hash slot than the rest', function () {
    assert(generateMulti(Object.keys(tests)) === -1);
  });
});
