/** Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John"; */

function ucFirst(str) {
	return String(str[0]).toUpperCase() + String(str).slice(1);
}

console.log(ucFirst("john") == "John");
console.log(ucFirst("laika") == "Laika");
console.log(ucFirst("spark") == "Spark");
console.log(ucFirst("du0") == "du0"); // is false
