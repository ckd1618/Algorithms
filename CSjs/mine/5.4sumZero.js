const { performance } = require('perf_hooks');
function fun1(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right -= 1;
        } else {
            left += 1;
        }
    }
}
var longArr = [];
for (let i = -1000000; i < 1000001; i++) {
    longArr.push(i);
}
// console.log("done making longArr");

var t1 = performance.now();
x = fun1(longArr);
var t2 = performance.now();
console.log(x);
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)