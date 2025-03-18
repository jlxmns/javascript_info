/** The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.

Will it have access to the outer variables from its creation place, or the invocation place, or both?

function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?

Which value it will show? “Pete” or “John”? */

// It will show "Pete", because it will try to find it in the first outer lexical environment (which is makeWorker's environment) and it will find Pete.
// It does also have access to John, but since it finds Pete before, it just uses that.
