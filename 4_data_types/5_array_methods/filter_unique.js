/** Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
   your code
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O */

function unique(arr) {
	let newArr = [];

	for (let str of arr) {
		if (!newArr.includes(str)) {
			newArr.push(str);
		}
	}

	return newArr;
}

let strings = [
	"Hare",
	"Krishna",
	"Hare",
	"Krishna",
	"Krishna",
	"Krishna",
	"Hare",
	"Hare",
	":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O */
