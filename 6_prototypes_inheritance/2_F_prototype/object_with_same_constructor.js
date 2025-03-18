/** Imagine, we have an arbitrary object obj, created by a constructor function – we don’t know which one, but we’d like to create a new object using it.

Can we do it like that?

let obj2 = new obj.constructor();

Give an example of a constructor function for obj which lets such code work right. And an example that makes it work wrong. */

//It would work if the prototype was not modified or it the modified prototype has a valid constructor.
