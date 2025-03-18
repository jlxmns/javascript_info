/** Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers

Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

From every anagram group should remain only one word, no matter which one. */

function aclean(arr) {
	let compareArray = [];
	let result = [];
	for (let item of arr) {
		let comparison_string = item.toLowerCase().split("").sort().join("");
		if (!compareArray.includes(comparison_string)) {
			compareArray.push(comparison_string);
			result.push(item);
		}
	}
	return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
