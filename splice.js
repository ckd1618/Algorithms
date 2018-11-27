var arr = [2,3,5,6,8,9,10];
var size = 2;

function challenge(arr, size){
	var sets = Math.ceil(arr.length/size);
	var returnMe = [];
	for(var i=0; i<sets;i++){
		returnMe.push(arr.splice(0,size))
	}
	return returnMe;
}

console.log(challenge(arr,size));
