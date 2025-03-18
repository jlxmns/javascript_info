/** What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ? */

// Fruits will show 'Apples, Pear, Orange, Banana'. Arrays are treated like objects, so when you say shoppingCart = fruits, it is copying the reference to that address (pointer).
// Therefore, when you change shoppingCart, it will change the same address that fruits is referencing, changing fruits with it.
