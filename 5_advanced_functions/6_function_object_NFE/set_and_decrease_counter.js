/** Modify the code of makeCounter() so that the counter can also decrease and set the number:

    counter() should return the next number (as before).
    counter.set(value) should set the counter to value.
    counter.decrease() should decrease the counter by 1.

See the sandbox code for the complete usage example.

P.S. You can use either a closure or the function property to keep the current count. Or write both variants. */

function makeCounter() {
	let count = 0;

	function counter() {
		return count++;
	}

	counter.set = value => (count = value);
	counter.decrease = () => count--;

	return counter;
}

let co = makeCounter();

console.log(co());
console.log(co());
console.log(co.decrease());
console.log(co.decrease());
console.log(co.set(30));
