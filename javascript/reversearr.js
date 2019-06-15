//reversearr

var arr = [10,20,30,40,50,60,70];

console.log(reverseArr(arr));

function reverseArr(arr) {
	var halfL = Math.ceil(arr.length/2);
	var length = arr.length;
	for (var i=0; i<halfL; i++) {
		var temp = arr[i];
		arr[i] = arr[length-1-i];
		arr[length-1-i] = temp;
	}
	return arr;
}


//reversearr (luis)
var arr = [10,20,30,40,50,60,70];
reverse(arr);
function reverse(arr) {
	for (var i=0; i*2 < arr.length; i++) {
		var temp = arr[i];
		arr[i] = arr[arr.length-i-1];
		arr[arr.length-i-1]=temp;
	}
	console.log(arr);
}
