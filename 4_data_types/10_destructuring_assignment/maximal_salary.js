/** There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

Create the function topSalary(salaries) that returns the name of the top-paid person.

    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.

P.S. Use Object.entries and destructuring to iterate over key/value pairs. */

let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};

function topSalary(salaries) {
	let highestSalary = [0];
	let highestPaid = [];
	const entries = Object.entries(salaries);

	if (entries.length === 0) return null;

	for (let [name, salary] of entries) {
		if (salary > highestSalary) {
			[highestPaid, highestSalary] = [name, salary];
		}
	}

	return highestPaid;
}

console.log(topSalary(salaries));
