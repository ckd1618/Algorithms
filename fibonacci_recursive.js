function fibRec(num, first=0, sec=1) {
	if (num === 1) return 0;
	if (num <= 3) return first+sec;
	return fibRec(num-1, sec, first+sec);
}
console.log(fibRec(10));



