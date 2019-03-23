// O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n), O(n!)

//FACTORIAL RECURSIVE
function factRec(num) {
	if (num === 2) return 2;
	return num*factRec(num-1);
}
console.log(factRec(5));

//FACTORIAL ITERATIVE
function factIter(num) {
	total = 1;
	for (var i=num; i>1; i--) {
		total = total * i;
	}
	return total;
}
console.log(factIter(5));

//FIBONACCI RECURSIVE - MINE = 0(n)
function fibRec(num, first=0, sec=1) {
	if (num <= 1) return 0;
	if (num <= 3) return first+sec;
	return fibRec(num-1, sec, first+sec);
}
console.log(fibRec(10));

//FIBONACCI RECURSIVE 1ARG = O(2^n)
function fibRec2(num) {
	if (num <= 1) return 0;
	if (num <= 3) return 1;
	return fibRec2(num-1) + fibRec2(num-2);
}
console.log(fibRec2(4));

//FIBONACCI ITERATIVE = O(n)
function fibIter(num) {
	if (num <= 1) return 0;
	if (num <= 3) return 1;
	var [first,sec,sum] = [0,1,0];
	for (var i=1; i<num; i++) {
		sum = first + sec;
		first = sec;
		sec = sum;
	}
	return sum;
}
console.log(fibIter(0));

//REVERSE STRING ITERATIVE
function reverseString(str) {
  var newStr = '';
  for (var i = str.length-1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}
console.log(reverseString('yoyo mastery'));

//REVERSE STRING RECURSIVE
function reverseString(str, i=str.length-1) {
  if (i <= 0) return str[i] || '';
  return str[i] + reverseString(str, i-1);
}
console.log(reverseString('yoyo mastery'));

//REVERSE STRING RECURSIVE 1ARG
function reverseStringRecursive (str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str[0];
  }
}
reverseStringRecursive('yoyo master');