/** The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

Write a function fib(n) that returns the n-th Fibonacci number.

An example of work:

function fib(n) { /* your code  }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second. */

function fib(n) {
	let memo = {
		1: 1,
		2: 1,
	};

	for (let i = 3; i <= n; i++) {
		memo[i] = memo[i - 1] + memo[i - 2];
	}

	return memo[n];
}

console.log(fib(77));
