/** We have two hamsters: speedy and lazy inheriting from the general hamster object.

When we feed one of them, the other one is also full. Why? How can we fix it?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple */

//That would be because both lazy and speedy calls find the stomach in hamster. this.stomach.push tries to find an existing array and finds it in stomach, so it pushes to it.
//In that way, all rabbits share the same array.
//You can fix it by not using .push and just using this.stomach =, because then it will be written as a prop of this.

let hamster = {
	stomach: [],

	eat(food) {
		this.stomach = [food];
	},
};

let speedy = {
	__proto__: hamster,
};

let lazy = {
	__proto__: hamster,
};

//You could also make sure that each hamster has their own stomach prop.
