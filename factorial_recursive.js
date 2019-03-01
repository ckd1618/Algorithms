function factRec(num) {
	if (num === 1) return 1;
	return num*factRec(num-1);
}

console.log(factRec(5));