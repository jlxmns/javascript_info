/** According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

For instance:

alert( 1.35.toFixed(1) ); // 1.4

In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

alert( 6.35.toFixed(1) ); // 6.3

How to round 6.35 the right way? */

/* That happens due to value imprecision when working with fractions. 1.35 is actually 1.35000000000000008882 while 6.35 is 6.34999999999999964473, which makes it round down.
One way to round would be to multiply it by a value and then dividing it back */

console.log(Math.round(6.35 * 10) / 10);
