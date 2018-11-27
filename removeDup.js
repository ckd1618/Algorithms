var arr = [10,30,30,20,20,40];
removeDup(arr);
function removeDup(arr) {
	var newarr = [];
	var ndn; //variable whose value is undefined
	for (var idx=0; idx<arr.length; idx++) {
		for (var i = idx+1; i<arr.length; i++) {
			if (arr[idx]===arr[i]) arr[i] = ndn;	
		}
	}
	for (var j=0; j<arr.length; j++) {
		if (arr[j]) newarr.push(arr[j]);
	}
	console.log(newarr);
	console.log(ndn);
	console.log(arr)
}
	

/*
var arr = [10,30,30,20,20,40];
removeDup(arr);
function removeDup(arr) {
	var newarr = [];
	var ndn;
	for (var idx=0; idx<arr.length; idx++) {
		for (var i = idx+1; i<arr.length; i++) {
			if (arr[idx]===arr[i]) arr[i] = ndn;	
		}
	}
	for (var j=0; j<arr.length; j++) {
		if (arr[j]) newarr.push(arr[j]);
	}
	console.log(newarr);
}
*/
