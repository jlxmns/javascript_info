/** Can we change this by additional binding?

What will be the output?

function f() {
  alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f(); */

//John, because functions cannot be rebound (the exotic object returned remembers only the original context)
