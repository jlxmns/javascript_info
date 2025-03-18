/** In the code below we create new Rabbit, and then try to modify its prototype.

In the start, we have this code:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true

    We added one more string (emphasized). What will alert show now?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // ?

…And if the code is like this (replaced one line)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // ?

And like this (replaced one line)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // ?

The last variant:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // ? */

//1. it will still print true, because when the object was created, the prototype had eats: true
//2. it will print false, because you modified the existing prototype
//3. it will print true, because it won't find eats in the object rabbit so it can't delete it
//4. it will print undefined, the property was deleted from the prototype
