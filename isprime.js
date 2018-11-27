//isPrime

var highnum = 11;
var lownum=0;
//enter numbers above
const und = undefined;
if (lownum === und) {
	lownum = highnum;
}
for (; lownum<highnum+1;lownum++) {
	console.log(lownum + ": " + isPrime(lownum));
}
function isPrime(num) {
	var n1379 = num.toString();
	var last = n1379[n1379.length-1];
	if ((last==="1" || last==="3" || last==="7" || last==="9") || (num===2 || num===5)) {
		for (var i=2; i<num; i++) {
			if (num%i===0) {
				return false+" "+i+" * "+num/i;
			}
		}
		return num>1;
	}
	else {
		return false+" '024568'";
	}
}
	



