/** Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

    If it equals “TheMaster”, then show “Welcome!”,
    Another string – show “Wrong password”,
    For an empty string or cancelled input, show “Canceled”

Please use nested if blocks. Mind the overall readability of the code.

Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null. */

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Please enter your login: ", login => {
	if (login) {
		if (login === "Admin") {
			rl.question("Please enter your password: ", password => {
				if (password === "TheMaster") {
					console.log("Welcome!");
				} else {
					!!password ? console.log("Wrong password") : console.log("Canceled");
				}
			});
		} else {
			console.log("I don't know you");
		}
	} else {
		console.log("Canceled");
	}
});
