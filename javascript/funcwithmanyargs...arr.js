console.log(fun1(3,4,5,6,7));
function fun1(...arr) {
	var total = 0;
	for (var i = 0; i<arr.length; i++) {
		total+=arr[i];
	}
	return total;
}

