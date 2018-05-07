'use strict';

function jediName(firstName, lastName) {
  return `${lastName.slice(0, 3)}${firstName.slice(0, 2)}`;
}

function beyond(num) {
	let returned = "";
	if(num === Infinity) {
		returned = "And beyond";
	} else if(num > 0) {
		returned = "To infinity";
	} else if(num < 0) {
		returned = "To negative infinity";
	} else {
		returned = "Staying home";
	}
	return returned;
}

console.log(jediName('Sonya', 'Slegers'));
console.log(beyond(Math.pow(10, 1000)));
console.log(beyond(100));