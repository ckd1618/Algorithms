//ReverseArray40
var arr = [10,20,30,40,50,60,70];

console.log(fun1(arr));

function fun1(arr) {
	var halflen = arr.length/2;
	if (halflen%2===1) halflen-=.5;

	var temp;
	for (var i=0; i<halflen; i++) {
		temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
	return arr;
}

