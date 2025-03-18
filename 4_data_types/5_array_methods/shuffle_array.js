/** Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case. */

function randomInteger(min, max) {
	return min + Math.trunc(Math.random() * (max - min));
}

function shuffle(arr) {
	let copyArray = arr.slice();
	for (let i = 0; i < arr.length; i++) {
		let randomNumber = randomInteger(0, copyArray.length - 1);
		arr[i] = copyArray[randomNumber];
		copyArray.splice(randomNumber, 1);
	}
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);
