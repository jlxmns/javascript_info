/** This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
} */

// This happens due to fraction number imprecision. 0.2 is not exactly 0.2, so when adding a bunch of 0.2 together, you will end up with a fractioned number that is not equal to 10.
