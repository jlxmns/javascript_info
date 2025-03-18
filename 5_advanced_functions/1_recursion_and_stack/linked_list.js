/** Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

Write a function printList(list) that outputs list items one-by-one.

Make two variants of the solution: using a loop and using recursion.

What’s better: with recursion or without it? */

function printList(list) {
	console.log(list.value);
	return list.next === null ? undefined : printList(list.next);
}

function printListIterative(list) {
	let temp = list;

	while (temp) {
		console.log(temp.value);
		temp = temp.next;
	}
}

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

printListIterative(list);
