var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();
var oldGenerate = require('./old');
var newGenerate = require('../lib');

// noinspection SpellCheckingInspection
var tests = {
  123465: 1492,
  foobar: 12325,
  abcdefghijklmnopqrstuvwxyz: 9132,
  'gsdfhan$%^&*(sdgsdnhshcs': 15532
};
/* eslint func-names: 0 */

// add listeners


suite.add('NEW', function () {
  newGenerate('abcdefghijklmnopqrstuvwxyz');
});

suite.add('OLD', function () {
  oldGenerate('abcdefghijklmnopqrstuvwxyz');
});

suite.on('cycle', function (event) {
  console.log(String(event.target));
});

suite.on('complete', function () {
  console.log('\n\nFastest is ' + this.filter('fastest').map('name'));
});

suite.run({ delay: 1, minSamples: 150 });
