/** Here a counter object is made with the help of the constructor function.

Will it work? What will it show?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ? */

// It will work. Both functions refer to the same outer lexical environment and have access to the count variable.
// The alerts will be 1, 2 and 1.
