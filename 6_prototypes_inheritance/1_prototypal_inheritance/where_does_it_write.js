/** We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat(); */

//The rabbit object recieves the 'full' prop, because in prototypes, this always refers to the object that is originally called.
