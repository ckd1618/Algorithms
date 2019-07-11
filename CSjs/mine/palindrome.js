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

function dictPalindrome(str) {
    var strHalfLen = Math.floor(str.length / 2);
    var dict1 = {};
    for (let i = 0; i <= strHalfLen; i++) {
        if (dict1[str[i]]) {
            dict1[str[i]]++;
        } else {
            dict1[str[i]] = 1;
        }
    }



    for (let i = 0; i <= strHalfLen; i++) {
        let j = str.length - 1 - i
        if (dict1[str[j]] && dict1[str[j]] > 1) {
            dict1[str[i]]--;
        } else if (dict1[str[j]] && dict1[str[j]] === 1) {
            delete dict1[str[i]];
        } else {
            return "false " + JSON.stringify(dict1);
        }
    }
    var dictLength = Object.keys(dict1).length;
    if (dictLength === 0) {
        return true;
    } else {
        return "false, " + dictLength;
    }
}

var arr = [];
for (let i = 0; i < 1000000; i++) {
    arr.push("a");
}
arr.join("");



var str = "racecar"

const { performance } = require('perf_hooks');

var t1 = performance.now();
var f = isPalindrome(arr);
var t2 = performance.now();
console.log(f);
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)



var t1 = performance.now();
var f = dictPalindrome(str);
var t2 = performance.now();
console.log(f);
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)