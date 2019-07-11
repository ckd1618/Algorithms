const { performance } = require('perf_hooks');

var t1 = performance.now();
var f = ;
var t2 = performance.now();
console.log(f);
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)