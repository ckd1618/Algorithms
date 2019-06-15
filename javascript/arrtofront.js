//ArraytoFront39
var arr = [4,2,1,3,5];
var min = arr[0];
var minpos;
for (var i=0; i<arr.length; i++) {
	if (arr[i]<min) {
		min = arr[i];
		minpos = i;
	}
}

var temp;
for (; minpos>0; minpos--) {
	temp = arr[minpos];
	arr[minpos] = arr[minpos-1];
	arr[minpos-1] = temp;
}
console.log(arr);

