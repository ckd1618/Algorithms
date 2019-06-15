var str = '(a{b}c[d]e(f))[';
console.log(fun1(str));
function fun1(str) {
	var arr=[];
	var compare = [];
	for (var j=0; j<str.length; j++) {
		if (str[j] == '[' || str[j] == ']' || str[j] == '{' || str[j] == '}' || str[j] == '(' || str[j] == ')') {
			arr.push(str[j])
		}
	}
	for (var i=0; i<arr.length; i++) {
		if (arr[i] == '{') {
			compare.unshift('}');
		}
		else if (arr[i] == '[') {
			compare.unshift(']');
		}
		else if (arr[i] == '(') {
			compare.unshift(')');
		}
		else if (arr[i] == ']' && arr[i] == compare[0]) {
			compare.shift();
		}
		else if (arr[i] == ')' && arr[i] == compare[0]) {
			compare.shift();
		}
		else if (arr[i] == '}' && arr[i] == compare[0]) {
			compare.shift();
		}
		else {
			return false
		}
	}
	if (compare == '') {
		return true;
	}	
	else {
		return false;
	}
}
		
/*
	var testme = /[)}[]{(]/g;
	var testme = new RegExp(')}{(');
	for (var j=0; j<str.length; j++) {
		if (testme.test(str[j])) arr.push(str[j]);
	}
		console.log(arr);
	for (var i=0; i<arr.length; i++) {

		switch (arr[i]) {
			case '{':
				compare.unshift('}'); continue;
			case '[':
				compare.unshift(']'); continue;
			case '(':
				compare.unshift(')'); continue;
			case '}':
				if (arr[i] == compare[0]) {compare.shift(); continue;}
				else return false;
				
			case ']':
				if (arr[i] == compare[0]) {compare.shift(); continue;}
				else return false;
			case ')':
				if (arr[i] == compare[0]) {compare.shift(); continue;}
				else return false;
			default:
				return false
		}
	}
	if (compare == '') return true;
	else return 'no idea';
}
*/

