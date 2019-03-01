function fibIter(num) {
	if (num < 2) return num;
	var [first,sec,sum] = [0,1,0];
	for (var i=1; i<num; i++) {
		var sum = first + sec;
		first = sec;
		sec = sum;
	}
	return sum;
}
console.log(fibIter(0));
