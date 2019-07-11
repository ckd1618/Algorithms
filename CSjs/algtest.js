const { performance } = require('perf_hooks');
function fun1(arr) {
    var p1 = 0;
    var p2 = 1;
    while (p2 + 1 <= arr.length) {
        if (arr[p2] != arr[p1]) {
            p1++;
            p2++;
        } else {
            while (p2 < arr.length - 1) {
                if (arr[p1] == arr[p2]) {
                    p2++;
                } else {
                    p1++;
                    arr[p1] = arr[p2];
                    p2++;
                }
            }
            return p1;
        }
    }
    return p1 + 1;
}
// var longArr = [];
// for (let i = -1000000; i < 1000001; i++) {
//     longArr.push(i);
// }
// console.log("done making longArr");
var xarr = [1, 1, 1, 1, 1, 2, 3, 4, 4];
var t1 = performance.now();
x = fun1(xarr);
var t2 = performance.now();
console.log(x);
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)


//this assumes that the initial array is sorted low to high
