/** In the code below, why does instanceof return true? We can easily see that a is not created by B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true */

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B);

//that is because their prototype is the same, it is the Object prototype
