/** Output a single-linked list from the previous task Output a single-linked list in the reverse order.

Make two solutions: using a loop and using a recursion.
 */

function printList(list) {
	if (list.next != null) {
		printList(list.next);
	}

	console.log(list.value);
	return;
}

function printListIterative(list) {
	let temp = list;
	let flag = 0;

	while (temp) {
		flag++;
		temp = temp.next;
	}

	temp = list;

	for (let i = flag; i > 0; i--) {
		temp = list;
		for (let j = i - 1; j > 0; j--) {
			temp = temp.next;
		}
		console.log(temp.value);
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

printList(list);
printListIterative(list);
