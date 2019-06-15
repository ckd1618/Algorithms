//mintofront
var arr = [55,44,33,77,88,99];
console.log(minToFront(arr));

function minToFront(arr) {
	var min = arr[0];

	for (var i=1; i<arr.length; i++) {
		if (arr[i]<min) {
			min=arr[i];
			var location = i;
		}
	}	
	for (var j=location; j>0; j--) {
		var temp = arr[j];
		arr[j] = arr[j-1];
		arr[j-1] = temp;
	}
	return arr;
}
//luis' solution
var arr = [ 70,60,50,40,30,20,10 ];
function minfront(arr) {
	var index = 0;
	var min = arr[0];
	for(var i=0;i< arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
			index = i;
		}
	}
	for (i = index; i>0; i--) {
		arr[i] = arr[i-1];
	}
	arr[0]=min;
	console.log(arr);
}
minfront(arr);

