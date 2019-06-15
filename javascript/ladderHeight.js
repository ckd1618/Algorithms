function solve(h, wallPoints, lengths) {
  var ladderMax = 0;
  for (let i = 0; i < wallPoints.length; i++) {
    if (h[1]) h = h[1];
    var heightAtI = Math.ceil(wallPoints[i] - (lengths[i] / 4)) - h;
    console.log("heightAtI at " + i + " :" + heightAtI);
    if (heightAtI > ladderMax) ladderMax = heightAtI;
    console.log("new ladderMax: " + ladderMax);
  }
  return ladderMax;
}
h = [10, 27];
wallPoints = [157, 140, 44, 83, 108, 63, 137, 40, 121, 106];
lengths = [24, 30, 17, 37, 12, 34, 25, 22, 35, 30]

console.log(solve(h, wallPoints, lengths));

// question can be viewed at:
// https://www.hackerrank.com/contests/hourrank-31/challenges/hanging-posters/problem