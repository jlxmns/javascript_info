/** Consider the following code:

let str = "Hello";

str.test = 5;

alert(str.test);

What do you think, will it work? What will be shown? */

// I don't think that will work. The primitives as objects have certain methods you can call, you can't create a new key/value pair.

let str = "Hello";

str.test = 5;

alert(str.test);
