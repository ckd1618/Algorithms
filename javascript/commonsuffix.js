//commonsuffix
var arr = ['deforestation', 'citation', 'conviction', 'incarcerationz'];
console.log(fun1(arr));
function fun1(arr) {
	var same = [];
	for (var i=1; i<arr.length; i++) {
		var count = 0;
		for (var j= arr[i].length-1; j>-1; j--) {
			var conditional;

			if ( arr[i][j] == (i==1 ? arr[i-1][arr[i-1].length-1-count] : conditional = same[same.length-1-count]) ) {
				(i==1) ? same.unshift(arr[i][j]): {};
				console.log(same);
				count++;
			}
			else break;
		}
		while (count<same.length) {
			same.shift();
		}
	}
	return same;
}

