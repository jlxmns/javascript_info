/** What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ? */

// it will show the array itself, since this refers to the object, which is the array
