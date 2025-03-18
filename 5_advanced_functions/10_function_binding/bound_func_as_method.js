/** What will be the output?

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g(); */

//The output will be null, as you are passing null as the context
