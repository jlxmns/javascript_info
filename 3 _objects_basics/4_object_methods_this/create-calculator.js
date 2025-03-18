/** Create an object calculator with three methods:

    read() prompts for two values and saves them as object properties with names a and b respectively.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.

let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function prompt(question) {
	return new Promise(resolve => {
		rl.question(question, answer => {
			resolve(answer);
		});
	});
}

let calculator = {
	async read() {
		this["a"] = parseFloat(await prompt("Enter the first number: "));
		this["b"] = parseFloat(await prompt("Enter the second number: "));
	},
	sum() {
		return this.a + this.b;
	},
	mul() {
		return this.a * this.b;
	},
};

async function main() {
	await calculator.read();
	console.log(`Sum: ${calculator.sum()}`);
	console.log(`Product: ${calculator.mul()}`);
	rl.close();
}

main().catch(err => {
	console.error("An error occurred:", err);
	rl.close();
});

main();
