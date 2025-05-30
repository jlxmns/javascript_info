/** Create a constructor function Accumulator(startingValue).

Object that it creates should:

    Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
    The read() method should use prompt to read a new number and add it to value.

In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values */

function Accumulator(startingValue = 0) {
	this.value = startingValue;
	this.read = function () {
		this.value += parseInt(
			prompt("Enter a new number to add to the current value: ", 0),
		);
	};
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);
