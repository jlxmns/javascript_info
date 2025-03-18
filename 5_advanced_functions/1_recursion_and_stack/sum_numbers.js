/** Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

Make 3 solution variants:

    Using a for loop.
    Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
    Using the arithmetic progression formula.

An example of the result:

function sumTo(n) { ... your code ...  }

alert( sumTo(100) ); // 5050

P.S. Which solution variant is the fastest? The slowest? Why?

P.P.S. Can we use recursion to count sumTo(100000)? */

function sumToForLoop(number) {
	let sum = 0;
	for (let i = 0; i <= number; i++) {
		sum += i;
	}

	return sum;
}

function sumToRecursive(number) {
	return number > 1 ? number + sumToRecursive(number - 1) : number;
}

function sumToArithmetic(number) {
	return (number * (1 + number)) / 2;
}

console.log(sumToRecursive(100));
console.log(sumToForLoop(100));
console.log(sumToArithmetic(100));

//The Arithmetic solution is fastest, as it is just a mathematical equation that can be processed quickly.
//The slowest is the recursion, as it needs to manage call stacks
//We probably cant because of integer overflow, we would need to use BigInt to try
