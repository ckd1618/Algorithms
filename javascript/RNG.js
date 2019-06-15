var nums = 100000000;
var arr= [];
var a0, a1, a2,a3,a4,a5,a6,a7,a8,a9;
a0=a1=a2=a3=a4=a5=a6=a7=a8=a9=0;
var j = 0;
for (var i=0; i<nums; i++) {
	arr[j] = Math.random();
	
	if (arr[j]<.1) {a0++; continue; }
	if (arr[j]<.2) {a1++; continue;}
	if (arr[j]<.3) {a2++; continue;}
	if (arr[j]<.4) {a3++; continue;}
	if (arr[j]<.5) {a4++; continue;}
	if (arr[j]<.6) {a5++; continue;}
	if (arr[j]<.7) {a6++; continue;}
	if (arr[j]<.8) {a7++; continue;}
	if (arr[j]<.9) {a8++; continue;}
	if (arr[j]<1) {a9++; continue;}
}
console.log(a0, a1, a2,a3,a4,a5,a6,a7,a8,a9);








/*
var array = new Uint32Array(10);
window.crypto.getRandomValues(array);

var arr = [];
var count=0;
console.log("Your lucky numbers:");
for (var i = 0; i < array.length; i++) {
	arr.push(array[i]);
	count++;
}
console.log(count);
*/
