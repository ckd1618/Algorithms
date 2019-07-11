

function concaten(len) {
    var str = "a";
    for (var i = len; i > 0; i--) {
        str += "a";
    }

}

function join(len) {
    var str = "a", sArr = [];
    for (var i = len; i > 0; i--) {
        // sArr[i] = "a";
        sArr.push("a");
    }
    str = sArr.join("");
}


const { performance } = require('perf_hooks');
var len = 1000000;
var t1 = performance.now();
// var f = join(len);
var f = concaten(len);
var t2 = performance.now();
console.log(f);
console.log(`concat Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now();
var f = join(len);
// var f = concaten(len);
var t2 = performance.now();
console.log(f);
console.log(`join Time Elapsed: ${(t2 - t1) / 1000} seconds.`)