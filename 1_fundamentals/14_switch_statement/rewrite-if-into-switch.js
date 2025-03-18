/** Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
} */

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.setPrompt("a? ");
rl.prompt();

rl.on("line", function (n) {
	let a = +n;
	console.log(a);
	switch (a) {
		case 0:
			console.log("0");
			break;
		case 1:
			console.log("1");
			break;
		case 2:
		case 3:
			console.log("2, 3");
			break;
	}
	rl.close();
}).on("close", () => {
	process.exit(0);
});
