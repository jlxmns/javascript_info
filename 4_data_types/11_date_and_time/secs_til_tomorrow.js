/** Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600

P.S. The function should work at any day, the “today” is not hardcoded. */

function getSecondsToTomorrow() {
	let today = new Date();
	let tomorrow = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + 1,
	);

	return (tomorrow - today) / 1000;
}

console.log(getSecondsToTomorrow());
