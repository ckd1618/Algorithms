var string = "i am a fatsy! oyp! =]))) ^^";

console.log(capMe(string));

function capMe(string){
	for(var i = 0; i<string.length;i++){
		if (string[i] == " " && string[i++]) string[i++].toUpperCase();
		if (i===0 && string[i] != " ") string[i].toUpperCase();	
	}
	return string;
}
