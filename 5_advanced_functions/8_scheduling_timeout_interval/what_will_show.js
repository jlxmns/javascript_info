/** In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

When will the scheduled function run?

    After the loop.
    Before the loop.
    In the beginning of the loop.

What is alert going to show?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
} */

//I imagine that it will be shown after the loop, since setTimeout with a time of 0 only runs after the script is run, I think with positive numbers it may be the same
