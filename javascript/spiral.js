var spiralnum = "17";

var sNum = (Math.floor(spiralnum**.5))**2;
spiralMe(sNum);
var origW = sNum**.5;

function totAtWid(widthf){
	var x = origW - widthf;
	var total = 0;
	for (let i = widthf; i<=origW; i+=2){	
		total += i *4-4
	}
}

function spiralMe (sNumf) {
	var width = origW;
	var allArr = [];
	var toprow=1; //allArr[1+(origW-width)/2][1->(width-1)]
	var botrow=origW;//allArr[width][width]
	var leftcol=1;
	var ritecol=origW;
	for (var j = 0; j<width; j++) {
		allArr.push([]);
	}
	for (var i = 1; i<=sNumf && width>0; i++) {
		if (i>=width**2) width-=2;
//left		
		var tempTot = totAtWid(width);	
		if (i>tempTot &&)
			allArr[
//down
//right
//up
		var location = i - 
	}
}
for (var k = 0; k<origW; k++) {
	console.log(allArr[k]);  
}

        

