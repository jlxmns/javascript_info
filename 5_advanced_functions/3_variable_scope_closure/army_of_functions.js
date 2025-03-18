/** The following code creates an array of shooters.

Every function is meant to output its number. But something is wrong…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // create a shooter function,
      alert( i ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.

Why do all of the shooters show the same value?

Fix the code so that they work as intended. */

function makeArmy() {
	let shooters = [];

	let i = 0;
	while (i < 10) {
		let shooter = function () {
			// create a shooter function,
			console.log(i); // that should show its number
		};
		shooters.push(shooter()); // and add it to the array
		i++;
	}

	// ...and return the array of shooters
	return shooters;
}

let army = makeArmy();

//All the shooters showed the same value because the functions were being stored inside the array.
//They were only called when army[number]() was called, and by then the i in the lexical environment was already at 10 (while loop was already done)
//You can fix this by pushing shooter() instead of shooter into the shooters array
