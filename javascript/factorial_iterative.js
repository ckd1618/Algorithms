function factIter(num) {
	total = 1;
	for (var i=num; i>1; i--) {
		total = total * i;
	}
	return total;
}
console.log(factIter(5));