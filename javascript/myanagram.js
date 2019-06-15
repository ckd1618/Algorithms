//check to see if two strings are anagrams of one another
//(if it uses the same characters)
var string1 = "world hello";
var string2 = "bakana";
console.log(stringToDict(string1) === stringToDict(string2));
console.log(stringToDict(string1));
console.log(stringToDict(string2));

function stringToDict(string){
	var stringSortNoSpace = [];	
	for(var i=0; i<string.length;i++){
		if (string[i] != ' ') stringSortNoSpace.push(string[i]);
	}
	stringSortNoSpace.sort();
	var dict = {};
	for(var char of stringSortNoSpace){
		if(dict[char]){
			dict[char]++;
		}else dict[char] =1;
	}return JSON.stringify(dict);
}
