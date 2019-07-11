//return true or false for whether it is a palindrome

function isPalindrome(str) {
    // console.log(str);
    var strHalfLen = Math.floor(str.length / 2);
    // console.log(strHalfLen);
    for (let i = 0; i < strHalfLen; i++) {
        if (str[i] != str[str.length - i - 1]) {
            console.log(str[i] + " , " + str[str.length - i - 1])
            return false;
        }
    }
    return true;
}
var arr = [];
for (let i = 0; i < 100000; i++) {
    arr.push("a");
}



var str = "racecar"

const { performance } = require('perf_hooks');

var t1 = performance.now();
var f = isPalindrome(str);
var t2 = performance.now();
console.log(f);
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)