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