function fibRec2(num) {
	if (num <= 2) return num-1;
	return fibRec2(num-1) + fibRec2(num-2);
}
console.log(fibRec2(5));