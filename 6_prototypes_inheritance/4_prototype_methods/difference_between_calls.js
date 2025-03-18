/** Let’s create a new rabbit object:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

These calls do the same thing or not?

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi(); */

//no, only the first one will work because this will refer to rabbit, the others will refer to rabbit.prototype
