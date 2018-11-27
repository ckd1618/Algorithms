var arr = [7,6,8,4,10,11,9,9,9,9]
console.log(sortMe(arr));

function sortMe(arr) {
	var count = 0;
	for (var i = 0; i< arr.length; i++){
		var remainLen = arr.length-i;
		for (var j=1; j<=remainLen; j++){
			count++;
			if (arr[i] > arr[i+j]){
				var temp = arr[i];
				arr[i] = arr[i+j];
				arr[i+j] = temp;
			}
		}
	console.log(count);
	}
	return arr;
	
}	

