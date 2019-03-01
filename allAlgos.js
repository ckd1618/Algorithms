//FACTORIAL RECURSIVE
function factRec(num) {
	if (num === 2) return 2;
	return num*factRec(num-1);
}
console.log(factRec(5));

//FACTORIAL ITERATIVE
function factIter(num) {
	total = 1;
	for (var i=num; i>1; i--) {
		total = total * i;
	}
	return total;
}
console.log(factIter(5));

//FIBONACCI RECURSIVE - MINE
function fibRec(num, first=0, sec=1) {
	if (num === 1) return 0;
	if (num <= 3) return first+sec;
	return fibRec(num-1, sec, first+sec);
}
console.log(fibRec(10));

//FIBONACCI RECURSIVE - STANDARD
function fibRec2(num) {
	if (num <= 2) return num-1;
	return fibRec2(num-1) + fibRec2(num-2);
}
console.log(fibRec2(4));

//FIBONACCI ITERATIVE
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