/** What will be the result of this code?

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();

P.S. There’s a pitfall in this task. The solution is not obvious. */

//It will result in an error, because the variable x is uninitialized in the local environment, and therefore, unusable.
