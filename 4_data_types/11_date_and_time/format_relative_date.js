/** Write a function formatDate(date) that should format date as follows:

    If since date passed less than 1 second, then "right now".
    Otherwise, if since date passed less than 1 minute, then "n sec. ago".
    Otherwise, if less than an hour, then "m min. ago".
    Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.

For instance:

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) ); */

function formatDate(date) {
	let dateNow = new Date();
	let dateDiff = (dateNow - date) / 1000;
	let twoDigitYear = String(date.getFullYear()).slice(2);
	let twoDigitMonth =
		String(date.getMonth()).length < 2
			? "0" + (date.getMonth() + 1)
			: date.getMonth();
	if (dateDiff < 1) {
		return "right now";
	} else if (dateDiff < 60) {
		return `${dateDiff} sec. ago`;
	} else if (dateDiff < 2400) {
		return `${dateDiff / 60} min. ago`;
	} else {
		return `${date.getDate()}.${twoDigitMonth}.${twoDigitYear} ${date.getHours()}:${date.getMinutes()}`;
	}
}

alert(formatDate(new Date(new Date() - 1))); // "right now"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));
