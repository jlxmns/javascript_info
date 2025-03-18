/** Write function sum that would work like this:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15

P.S. Hint: you may need to setup custom object to primitive conversion for your function. */

function sum(a) {
	let cumSum = a;

	function func(b) {
		cumSum += b;
		return func;
	}

	func.toString = function () {
		return cumSum;
	};

	return func;
}

alert(sum(0)(1)(2)(3)(4)(5));
