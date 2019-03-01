function factRec(num) {
	if (num === 2) return 2;
	return num*factRec(num-1);
}

console.log(factRec(5));