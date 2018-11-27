

//remove shorter strings

var str = ['kek', 'owarida', 'shimata', 'bakana', 'masaka']
var value = 4;
console.log(fun1(str, value));
function fun1(str, value) {
	for (var i=0; i<str.length; i++) {
		if (str[i].length<value) {
			for (var j=i; j>0;j--) {
				str[j] = str[j-1]
			}
			str.shift();
		}
	}
	return str;
}


switch ('lel') {
	case 'lel':
		console.log(1);
		break;
	case 4:
		console.log('yay');
		break;
	default:
		console.log('end');

}











