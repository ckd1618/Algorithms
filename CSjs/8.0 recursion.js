// SOLUTIONS FOR THIS SECTION
// POWER SOLUTION
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}
// FACTORIAL SOLUTION
function factorial(x) {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION
function recursiveRange(x) {
    if (x === 0) return 0;
    return x + recursiveRange(x - 1);
}
// FIBONACCI SOLUTION
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
//better FIBONACCI 1,1,2
var fib = function (N, first = 1, sec = 1) {
    if (N === 0) return 0;
    if (N <= 2) return 1;
    if (N == 3) return first + sec;
    return fib(N - 1, sec, first + sec);
};
//better fibonacci 0,1,1
function fibRec(num, first = 0, sec = 1) {
    if (num === 1) return 0;
    if (num <= 3) return first + sec;
    return fibRec(num - 1, sec, first + sec);
}
console.log(fibRec(10));

//secret discord fib 1,1,2
var fib = function (N, memo = null) {
    if (memo === null || memo === undefined) {
        memo = new Array(N).fill(null);
    }
    else if (memo[N] != null) {
        return memo[N];
    }
    if (N == 0) return 0;
    if (N == 1) return 1;
    memo[N] = fib(N - 1, memo) + fib(N - 2, memo);
    return memo[N];
}; 