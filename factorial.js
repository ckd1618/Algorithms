var fctl = 1000;
for (var i = 1; i<fctl+1; i++) {
	console.log(fun1(i));
}
function fun1(fctl) {
	var total=1;
	while (fctl >1) {
		total *= fctl;
		fctl--;
	}
	return total;
}
