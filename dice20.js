var arr = [.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1];
var count = [];	
var lastnum;
var num;

	while (lastnum !== num) {
		var switch1 = false;
		for (var i=0; i<20; i++) {

			num = Math.random();
			switch1 = true;

			if (num<arr[i]) {
				count[i]++;
				break;
				
			}
			
		}
			if (switch1) {
				lastnum = num;
			}
				
	}	
	return 


















/*
var arr = [.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1];
var count = [];
var num;
var die = 20;
var lastnum;
var FirstSwitch = true;
var numRolls = 0;
var min;
var max;
var sumI = 0;
var double = true;

for (var i=0; double===true; i++) {
	num = Math.random();
	
	if (FirstSwitch) {
		min = i;
		max = i;
		FirstSwitch = false;
	}
	if (num < arr[i]) {
		sum += num;
	
		
	}
	if (
	
}

function 

*/
