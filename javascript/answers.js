//Chris Darakjian
//PAGE 16---------------------------------------------

//Setting and Swapping
var myNumber = 42;
var myName = "Chris";
var temp = myNumber;
myNumber = myName;
myName = temp;

//Print -52 to 1066
for (var i = -52; i<1067; i++) {
	console.log(i);
}

//Don't Worry, Be Happy
function beChearful() {
	console.log("good morning!");
}

for (var i = 0; i<98; i++) {
	beChearful();	
}

//Multiples of Three - but Not All
for (var i = -300; i<1; i+=3) {

	if (i === -3 || i === -6) {
		continue;
	}else console.log(i);
}

//Printing Integers with While
var i = 2000;
while (i<5281) {
	console.log(i);	
	i++;
}

//You Say It's Your Birthday
var num1 = 1;
var num2 = 1;
if ((num1 === 8 && num2 === 26) || (num1 === 26 && num2 === 8)) {
	console.log("How did you know?");
}else console.log("Just another day...."); 


//Leap Year
var year = 2004;
console.log(isItLeap(year));
function isItLeap(year) {
	if (year%4===0) {
		if (year%100===0) {
			if (year%400===0) {
				return "leap";
			}else return "not leap";
		}else return "leap";
	}else return "not leap";
}
//Leap Year (Alternate Solution, I spent a few days on this)
var year = 2003;
console.log(isItLeap(year)===true ? "leap" : "not leap");
function isItLeap(year) {
	return year%4===0 && (year%100!==0 || year%400===0)
}

//Print and Count
var initial = 512;
var final = 4096;
var multipleOf = 5;
var i = initial;
var count=0;
while (i<=final) {
	if (i%multipleOf===0) {
		console.log(i);
		count++;
	}
	i++;
}
console.log("There are %s multiples of 5.", count);

//Multiples of Six
var i = 6;
while (i<60001) {
	if (i%6===0) {
		console.log(i);
	}
	i++;
}

//Counting, the Dojo Way
for (var i = 1; i<101;i++) {
	var printMe = "";
	if (i%5===0) {
		printMe+="Coding";
	}
	if (i%10===0) {
		printMe+=" Dojo";
	}
	if (printMe !== "") {
		console.log(printMe);
	}
}

//What Do You Know?
var incomming = 5000; 
inputpar(incomming);
function inputpar(incomming) {
	console.log(incomming)
}

//Whoa, That Sucker's Huge
var initial = -300000;
var final = 300000;
if (-initial != final) {
	var arr = adjust(initial,final);

	function adjust(x, y) {
		if (x<0 && y>0) {
			if (-x<y) {
				return [-x+1,y];
			}else if (-x>y) {
				return [x,x+y-1];
			}
		}else return [x,y];
	}

	initial = arr[0];
	final = arr[1];
	var oddTotal = 0;
	for (var i = initial; i<=final; i++) {
		if (i%2===1 || i%2===-1) {
			oddTotal+=i;
		}
	}
	console.log(oddTotal);
}else console.log(0);

//Countdown by Fours
var starting = 2016;
while (starting>0) {
	console.log(starting);
	starting-=4
}

//Flexible Countdown
var lowNum = 2;
var highNum = 9;
var mult =3;

for (var i = highNum; i>=lowNum; i--) {
	if (i%mult===0) {
		console.log(i);
	}
}
}

//The Final Countdown
var given = [3,5,17,9]
var mult = given[0];
var lowNum = given[1];
var highNum = given[2];
var except = given[3];

var i = lowNum;
while (i<=highNum) {
	if (i!==except && i%mult===0){
		console.log(i);
	}
	i++;
}

//PAGE 20---------------------------------------------

//Countdown
var input = 10;
var arr = [];
var length = 0;
console.log(countDown(input));
console.log("The array's length is: %d", length);
function countDown(input) {
	for (var i = 0; input>=0; input--) {
		arr.push(input);
		length++;
	}
	return arr;
}

//Print and Return
var arr = [34,97];
fun1(arr);
function fun1(arr) {
	console.log(arr[0]);
	return arr[1];
}

//First Plus Length
var arr = [34,6,78,43,100,101]; 
console.log(fun1(arr));
function fun1(arr) {
	return arr[0] + arr.length;
}
console.log('If first number is "What" you get What34, if true, you get 35 (34+1), meaning true = 1.');

//Values Greater than Second
var arr = [1,3,4,5,9,13];
fun1(arr);
var count = 0;
function fun1(arr) {
	for (var i = 0; i<arr.length; i++) {
		if (arr[i]>arr[1]) {
			console.log(arr[i]);
			count++;
		}
	}
	return count;
}

//Values Greater than Second, Generalized
var arr = [1,3,4,5,9,13];
var newArr = [];
var count = 0;
fun1(arr);
function fun1(arr) {

	if (arr.length<2) {
		return newArr.push(arr[0]);
	}
	for (var i = 0; i<arr.length; i++) {
		if (arr[i]>arr[1]) {
			newArr.push(arr[i]);
			count++;
		}
	}
	console.log(count);
	return newArr;
}

//This Length, That Value
var num1= 7;
var num2 = 99;
var arr = [];

fun1(num1, num2);
function fun1(num2,num2) {
	if (num1 === num2) console.log("Jinx!");
	for (var i=0; i<num1; i++) {
		arr.push(num2);
	}
	return arr;
}

//Fit the First Value
var arr = [99,5,3,5,2,56,3456];
fun1(arr);
function fun1(arr) {
	if (arr[0]>arr.length) {
		console.log("Too big!");
	}else if (arr[0]<arr.length) {
		console.log("Too small!");
	}else console.log("Just right!");
}

//Fahrenheit to Celsius
var fDegrees = 150;
fahrenheitToCelsius(fDegrees);
function fahrenheitToCelsius(fDegrees) {
	return (fDegrees-32)*5/9;
}

//Celsius to Fahrenheit
var cDegrees = 200;
celsiusToFahrenheit(cDegrees);
function celsiusToFahrenheit(cDegrees) {
	return (9/5*cDegrees)+32;
}

//Celsius to Fahrenheit (optional)
var cDegrees = 200;
var fDegrees = 0;
console.log(fun1(cDegrees));
function fun1(cDegrees) {
	while (cDegrees !== fDegrees) {
		fDegrees = (9/5*cDegrees)+32;
		if (fDegrees === cDegrees) return cDegrees;
		cDegrees--;
	}
}

//Page 22--------------------------------------------------------

//Biggie Size
var arr = [-1,3,5,-5];
fun1(arr);
function fun1(arr) {
	for (var i = 0; i<arr.length;i++) {
		if (arr[i]>0) {
			arr[i] = "big";
		}
	}
	return arr;
}

//Print Low, Return High
var arr = [7,5,7,4,3,5,8,9,2];
var lowest = arr[0];
var highest = arr[0];
fun1(arr);
function fun1(arr) {
	for (var i = 1; i<arr.length;i++) {
		if (arr[i]< lowest) {
			lowest = arr[i];
		}
		if (arr[i] > highest) {
			highest = arr[i];
		}
	}
	console.log(lowest);
	return highest;
}

//Print One, Return Another
var arr = [2,4,5,6,7,8,9,45,32]
fun1(arr);
function fun1(arr) {
	console.log(arr[arr.length-2]);
	var i = 0;
	while (i<arr.length) {
		if (arr[i]%2===1) {
			return arr[i];
		}
		i++;
	}
}

//Double Vision
var initialarr = [1,2,3];
var newArr = [];
double(initialarr);
function double(arr) {
	for (var i = 0; i<arr.length;i++) {
		newArr.push(arr[i]*2);
	}
	return newArr;
}

//Count Positives
var arr = [1,3,5,7,8,6,4,3,4,5,7,9,6,4,2]
var countOdd= 0;
var countEven = 0;
fun1(arr);
function fun1(arr) {
	for (var i = 0; i<arr.length;i++) {
		if (arr[i]%2 === 0) {
			countEven++;
			countOdd=0;
		}
		if (arr[i]%2 === 1) {
			countOdd++;
			countEven=0;
		} 
		if (countOdd===3) {
			console.log("That's odd!");
			countOdd===0;
		}
		if (countEven===3) {
			console.log("Even more so!");
			countEven===0;
		}
	}
}

//Increment in Seconds
var arr = [1,2,3,4,5,6,7,8,9];
fun1(arr);
function fun1(arr) {
	for (var i = 0; i<arr.length;i++) {
		if (arr[i]%2===1) {
			arr[i]++;
		}
	}
	return arr;
}

//Previous Lengths
var arr = ["kek", "lolol", "owar"];
fun1(arr);
function fun1(arr) {
	var temp = [];
	for (var i=1;i<arr.length;i++) {
	  temp[i] = arr[i-1].length; 
	}
	temp[0]= arr[0];
	return temp;
}

//Add Seven to Most
var array = [1,2,3,4,5,6,7,8,9];
fun1(array);
function fun1(arr) {
	arr.shift();
	for (var i=0;i<arr.length;i++) {
		arr[i]+=7;
	}
	return arr;
}

//Reverse Array
var array = [1,2,3,4,5,6,7];
fun1(array);
function fun1(arr) {
	var temp = [];
	for (var i=0;i<arr.length;i++) {
		temp[arr.length-1-i] = arr[i];
	}
	return temp;
}

//Outlook: Negative
var array = [-1,2,3,4,-5];
reverse(array);
function reverse(arr) {
	for(var i=0; i<arr.length;i++) {
		if (arr[i] >0 ) {
			arr[i]*=-1;
		}
	}
	return arr;
}

//Always Hungry
var array = ["foodzing", "nourishment", "fatty", "food"];
hungry(array);
function hungry(arr) {
	var foodCount = 0;
	for(var i=0; i<arr.length;i++) {
		if (arr[i] === "food") {
			console.log("yummy");
			foodCount++;
		}
	}
	if (foodCount === 0) {
	console.log("I'm hungry");
	}
}

//Swap toward the Center
var array = [1,2,3,4,5,6];
swap(array);
function swap(arr) {
	var temp = []
	var half = Math.ceil(arr.length/2)
	for (var i=0;i<half;i++) {
		if (i%2===0) {
			temp[i] = arr[arr.length-i-1];
			temp[arr.length-i-1] = arr[i]
		}else if (i%2===1) {
			temp[i] = arr[i];
			temp[arr.length-i-1] = arr[arr.length-i-1];
		}
	}
	return temp;
}

//Scale the Array
var arr = [1,2,3,4,5,6,7];
var num = 5;
multMe(arr);
function multMe(arr) {
	for (var i=0; i<arr.length; i++) {
		arr[i] = arr[i]*num;
	}
	return arr;
}

//--------(all work is complete)-----------------------------
