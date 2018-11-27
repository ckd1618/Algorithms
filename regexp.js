

var x = "2k3k4";
x.split('');
var newArr = [];
for (var i=0; i<x.length; i++) {
	if (parseInt(x[i]) != NaN) {
		console.log(parseInt(x[i]) != NaN);
		newArr.push(x[i]);
	}
}
console.log(newArr.join(''));





//console.log(true || false && false)

/*
var string = "there's no free lunch - gotta pay yer way!";
var stringarr = string.split(' ');
var ack = [];
for (var i=0; i<stringarr.length; i++) {
	ack.push(stringarr[i][0]);
}
console.log(ack.join(''));
*/
/*
var ack = [];
for (var i=0; i<stringarr.length; i++) {
	ack = stringarr[i].split(/[a-z]/);
}

*/

/*
var string = "0s1a3y5w7h9at4?g!8?0";
string.split(/[^0-9]/g).join('');
/[?!a-z]/g

remove blanks 
var string = " kek kek kek     keke    kekek   ek ";
console.log(string.split(' ').join(''));

'$' to '/', ':' to '?', and '{' to '~'.
*/



