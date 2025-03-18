/** Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task. */

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.setPrompt("Enter a number greater than 100: ");
rl.prompt();

rl.on("line", function (number) {
	if (parseInt(number.trim()) > 100) {
		console.log(`The number chosen was ${number}.`);
		rl.close();
	} else {
		console.log("Please enter a valid number.");
		rl.prompt();
	}
}).on("close", () => {
	process.exit(0);
});
