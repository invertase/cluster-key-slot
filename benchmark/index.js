var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();
var oldGenerate = require('./old');
var newGenerate = require('../lib');
var elems = ['123465', 'foobar', 'abcdefghijklmnopqrstuvwxyz', 'gsdfhan$%^&*(sdgsdnhshcs', 'foobar{foobar'];
/* eslint func-names: 0 */

// add listeners
suite.add('NEW tags', function () {
  var i = 0;
  for (; i < elems.length; i++) {
    newGenerate('abc{' + elems[i] + '}}{yeahh}');
  }
});

suite.add('OLD tags', function () {
  var i = 0;
  for (; i < elems.length; i++) {
    oldGenerate('abc{' + elems[i] + '}}{yeahh}');
  }
});

suite.add('NEW without tags', function () {
  var i = 0;
  for (; i < elems.length; i++) {
    newGenerate(elems[i]);
  }
});

suite.add('OLD without tags', function () {
  var i = 0;
  for (; i < elems.length; i++) {
    oldGenerate(elems[i]);
  }
});

suite.add('NEW without tags singular', function () {
  newGenerate(elems[2]);
});

suite.add('OLD without tags singular', function () {
  oldGenerate(elems[2]);
});

suite.on('cycle', function (event) {
  console.log(String(event.target));
});

suite.on('complete', function () {
  console.log('\n\nFastest is ' + this.filter('fastest').map('name'));
});

suite.run({ delay: 1, minSamples: 150 });
