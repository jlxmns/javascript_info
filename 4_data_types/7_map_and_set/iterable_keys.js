/** We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

But that doesn’t work:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");

Why? How can we fix the code to make keys.push work? */

// That would be because map.keys() returns an array-like object, but that is not an array. You would have to use Array.from(map.keys()) to make an actual Array that can use methods such as .push()

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
