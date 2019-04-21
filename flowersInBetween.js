function verifyK(arr, k) {
  function noBloomInBet(i, flowersInBetween, arr) {
    console.log(i, flowersInBetween, arr);
    for (var z = i - 1; z > -1; z--) {
      console.log("z " + arr[z]);
      for (var z2 = 0; z2 < flowersInBetween.length; z2++) {
        console.log("z2 " + flowersInBetween[z2]);
        console.log(arr[z] + " === " + flowersInBetween[z2] + " ?")
        if (arr[z] === flowersInBetween[z2]) {
          return false; //there is blooming in between
        }
      }
    }
    return true; //there are no flowers blooming in between
  }
  for (var i = 1; i < arr.length; i++) {
    console.log("i " + i);
    var locBehind = arr.lastIndexOf(arr[i] - 1 - k, i - 1); //gives you the index when a match is found where a number exists with k spaces in between itself and arr[i]
    var locAhead = arr.lastIndexOf(arr[i] + 1 + k, i - 1);
    console.log("locBehind " + locBehind);
    console.log("locAhead " + locAhead);
    //this first if statement tests the left side
    if (locBehind != -1 && arr[i] - k - 1 > 0) {
      console.log("entered if statement left");

      //search all the previously iterated values of arr for arr[i]-k+j where j is incremented from 0 up to k-1
      var flowersInBetween = [];
      //push into an empty array the numbers between arr[i] and arr[locBehind]
      //first find the larger and smaller
      if (arr[i] > arr[locBehind]) {
        var larger = arr[i];
        var smaller = arr[locBehind];
      } else {
        var smaller = arr[i];
        var larger = arr[locBehind];
      }
      for (var y = smaller + 1; y < larger; y++) {
        flowersInBetween.push(y);
      }

      console.log("about to ender second function");
      var noBloom = noBloomInBet(i, flowersInBetween, arr);
      console.log("noBloomTF " + noBloom);
      if (noBloom == true) return "Answer: " + (i + 1);
      console.log("exited if statement left(false)");
    }
    //this second if statement tests the right side
    if (locAhead != -1 && arr[i] + k + 1 < arr.length) {
      console.log("entered if statement right");
      var flowersInBetween = [];
      if (arr[i] > arr[locBehind]) {
        var larger = arr[i];
        var smaller = arr[locBehind];
      } else {
        var smaller = arr[i];
        var larger = arr[locBehind];
      }
      for (var y = smaller + 1; y < larger; y++) {
        flowersInBetween.push(arr[y]);
      }

      if (noBloomInBet(i, flowersInBetween, arr) == true) return "Answer: " + (i + 1);
      console.log("exited if statement right(false)");
    }
  }
  return "Answer: -1";
}
var arr = [6, 5, 8, 9, 7, 1, 10, 2, 3, 4]
var k = 2;
console.log(verifyK(arr, k)); // output: 8

// There is a garden with N slots. In each slot, there is a flower. The N flowers will bloom one by one in N days. In each day, there will be exactly one flower blooming and it will be in the status of blooming since then.

// Given an array flowers consists of number from 1 to N. Each number in the array represents the place where the flower will open in that day.

// For example, flowers[i] = x means that the unique flower that blooms at day i will be at position x, where i and x will be in the range from 1 to N.

// Also given an integer k, you need to output in which day there exists two flowers in the status of blooming, and also the number of flowers between them is k and these flowers are not blooming.

// If there isn't such day, output -1.



