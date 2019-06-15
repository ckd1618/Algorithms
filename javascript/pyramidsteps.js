var steps = 15;

stepMe(steps);

function stepMe(steps) {

	for (var i = 1; i<=steps; i++) {
		var iHashes = 1+2*(i-1)
		var spaces = ((1+2*(steps-1))-iHashes)/2
		console.log(" ".repeat(spaces) + "#".repeat(iHashes) + " ".repeat(spaces));
	}
}
