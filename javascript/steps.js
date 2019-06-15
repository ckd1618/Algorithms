var steps = 5;

createSteps(steps);

function createSteps(steps) {
	for (var i =1; i<=steps; i++) {	
		console.log("#".repeat(i) + " ".repeat(steps-i));
	}
}
