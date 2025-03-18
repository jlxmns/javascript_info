/** Write the function sumInput() that:

    Asks the user for values using prompt and stores the values in the array.
    Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
    Calculates and returns the sum of array items.

P.S. A zero 0 is a valid number, please don’t stop the input on zero. */

function sumInput() {
	let myArray = [];
	let question;

	do {
		question = prompt("Enter a number: ", 0);

		if (question === "" || question === null || !isFinite(question)) {
			break;
		}

		myArray.push(+question);
	} while (True);

	let sum = 0;

	for (let item of myArray) {
		sum += item;
	}

	return sum;
}

console.log(sumInput());
