/** Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

    Using setInterval.
    Using nested setTimeout.

 */

function printNumbers(from, to) {
	let timerId = setInterval(() => {
		console.log(from++);
		if (from > to) clearInterval(timerId);
	}, 1000);
}

function printNumbersNested(from, to) {
	let timerId = setTimeout(function run() {
		console.log(from++);
		if (from <= to) setTimeout(run, 1000);
	}, 1000);
}

printNumbersNested(1, 4);
