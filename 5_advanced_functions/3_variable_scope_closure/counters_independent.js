/** Here we make two counters: counter and counter2 using the same makeCounter function.

Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ? */

// They are independent. Each makeCounter function call will have a different lexical environment. counter2() will return 0 and then 1.
