/** There’s an array of messages as in the previous task. The situation is similar.

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

The question now is: which data structure you’d suggest to store the information: “when the message was read?”.

In the previous task we only needed to store the “yes/no” fact. Now we need to store the date, and it should only remain in memory until the message is garbage collected.

P.S. Dates can be stored as objects of built-in Date class, that we’ll cover later. */

let messages = [
	{ text: "Hello", from: "John" },
	{ text: "How goes?", from: "John" },
	{ text: "See you soon", from: "Alice" },
];

let messageReadDate = new WeakMap();

messageReadDate.set(messages[0], "20-02-2025");
messageReadDate.set(messages[1], "21-02-2025");

console.log("Message read at: ", messageReadDate.get(messages[0]));
console.log("Message read at: ", messageReadDate.get(messages[2]));
