/** There’s a value in the property of a function. Will it change after bind? Why, or why not?

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert( bound.test ); // what will be the output? why? */

//undefined, because the returned object from bind() does not have the test prop.
