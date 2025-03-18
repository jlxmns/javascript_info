/** Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

function checkSpam(str) {
	str = String(str).toLowerCase();
	return str.includes("viagra") || str.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
