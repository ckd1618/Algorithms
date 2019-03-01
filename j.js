var string = "hello noobs";
var dict = {};

// if there is no entry into dict for each char in the string, then create it and set it to 1
// else if there is an entry, increment it by 1
for(var i of string){
	if(!dict[i]){
		dict[i]=1;
	}else{
		dict[i]++;
	}
}
console.log(dict);
//console.log(dict);
