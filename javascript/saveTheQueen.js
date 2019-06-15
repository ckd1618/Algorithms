function solve(n, a) {
  function hasZero(frontLine) {
    for (let i = 0; i < frontLine.length; i++) {
      if (frontLine[i] <= 0) return true;
    }
    return false;
  }

  if (n[1]) n = n[0];
  var arr = a.sort(function (a, b) { return b - a });
  var frontLine = [];
  var reserves = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < n) frontLine.push(arr[i]);
    if (i >= n) reserves.push(arr[i]);
  }
  var count = 0;
  do {
    for (let i = 0; i < frontLine.length; i++) {
      frontLine[i] = frontLine[i] - .5;
    }
    count = count + .5;
    //swap frontLine with reserves if reserves are greater
    for (let i = 0; i < reserves.length; i++) {
      for (let j = 0; j < frontLine.length; j++) {
        if (reserves[i] > frontLine[j]) {
          var temp = reserves[i];
          reserves[i] = frontLine[j];
          frontLine[j] = temp;
        }
      }
    }
    var status = hasZero(frontLine);
  } while (status == false);
  console.log(count);
}

var n = [3, 6];
var a = [1000, 100, 1, 2000, 79, 125];
console.log(solve(n, a));
305
var n1 = [3, 4];
var a1 = [1000, 100, 100, 100];
console.log(solve(n1, a1));
//150
var n2 = [2, 4];
var a2 = [1, 2, 4, 5];
console.log(solve(n2, a2));
//6
// https://www.hackerrank.com/contests/hourrank-31/challenges/save-the-queen