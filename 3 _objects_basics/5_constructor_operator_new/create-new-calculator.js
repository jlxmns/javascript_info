// Note from user: from now on I'll be using Deno to run my code. I got tired of writing prompts using Node.

/* Create a constructor function Calculator that creates objects with 3 methods:

    read() prompts for two values and saves them as object properties with names a and b respectively.
    sum() returns the sum of these properties.
    mul() returns the multiplication product of these properties.

For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

function Calculator() {
	this.read = function () {
		this["a"] = parseInt(prompt("Choose your first number: "));
		this["b"] = parseInt(prompt("Choose your second number: "));
	};
	this.sum = function () {
		return this?.a + this?.b;
	};
	this.mul = function () {
		return this?.a * this?.b;
	};
}

let calculator = new Calculator();
calculator.read();

console.log("Sum = ", calculator.sum());
console.log("Mul = ", calculator.mul());
