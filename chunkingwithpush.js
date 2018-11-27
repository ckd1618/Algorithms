var array = [3,4,5,6,7,8,9];
var size = 2;

function chunk(array, size){
	var chunked = [];

	for (let element of array){
		var last = chunked[chunked.length-1];

		if(!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}
	return chunked;
}

console.log(chunk(array,size));
