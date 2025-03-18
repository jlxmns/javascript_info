/* Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true

If it is, then provide an example of their code. */

function A(obj) {
	this.greeting = "Hi";
}

function B(obj) {
	this.greeting = "Hello";

	return obj;
}

let a = new A();
let b = new B(a);

console.log(a == b);

// Yes, if the constructor takes an argument that is the reference to the a object, it can return the same reference to that object.
