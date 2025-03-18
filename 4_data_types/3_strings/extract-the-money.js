/** We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

The example:

alert( extractCurrencyValue('$120') === 120 ); // true */

function extractCurrencyValue(str) {
	return Number(str.replace("$", ""));
}

console.log(extractCurrencyValue("$120") === 120);
