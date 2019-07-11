const { performance } = require('perf_hooks');
function fun1(arr1, arr2) {
    var x = arr1.length != arr2.length
    x ?
        obj = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!obj[arr1[i]]) {
            obj[arr1[i]] = 1;
        } else if (obj[arr1[i]]) {
            obj[arr1[i]] += 1;
        }
    }
    console.log(obj);
    for (let i = 0; i < arr2.length; i++) {
        if (!obj[arr2[i]]) {
            return false;
        } else if (obj[arr2[i]]) {
            if (obj[arr2[i]] === 1) {
                delete obj[arr2[i]];
            } else {
                obj[arr2[i]] -= 1;
            }
        }
    }
    console.log(obj);
    return (Object.keys(obj).length == 0);
}
var t1 = performance.now();
fun1("icemani", "cinemai");
var t2 = performance.now();
// console.log(x);
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)