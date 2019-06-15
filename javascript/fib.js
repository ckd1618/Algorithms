var n = 10;
console.log(fib(n-1));
function fib(n) {
	
	if (n<2) return n;
	return fib(n-1) + fib(n-2)
}




/*
var request = 50;

var arr = [0,1];
for (var i = 0; i<request-2; i++) {
	arr[i+2] = arr[i]+arr[i+1];
}
console.log(arr[request-1]);
*/

/*
var request = 10;

var arr = [0,1];
for (var i = 2; i<request; i++) {
	var a = arr[i-2];
	var b = arr[i-1];
	arr.push(a+b);
}
console.log(arr);
*/
