var arr = [10,20,30,40,50];
var rotateNum = 2;
console.log(rotate(arr, rotateNum));
function rotate(arr, rotateNum) {
	for (var i=0; i<rotateNum; i++) {
		var temp = arr[arr.length-1];
		for (var j=arr.length-1; j>0; j--) {
			arr[j] = arr[j-1]; 
		}
		arr[0] = temp;
	}
	return arr;
}
















