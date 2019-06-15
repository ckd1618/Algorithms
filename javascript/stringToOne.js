//stringtoOne
//turn the number 5678, add the individual numbers, if the total is longer than 1 digit, add the two individual digits together again, until you get 1 digit.
var number = 5678;
var digit = 1;
console.log(fun1(number, digit));
function fun1(num,dig) {
	var string = num.toString();
	while (string.length > dig){
		num = 0;
		for (var i=0; i<string.length; i++) {
			num+=parseInt(string[i]);
		}
		string=num.toString();
	}
	return string;
}

