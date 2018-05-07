'use strict';

// function jediName(firstName, lastName) {
//   return `${lastName.slice(0, 3)}${firstName.slice(0, 2)}`;
// }

// function beyond(num) {
// 	let returned = "";
// 	if(num === Infinity) {
// 		returned = "And beyond";
// 	} else if(num > 0) {
// 		returned = "To infinity";
// 	} else if(num < 0) {
// 		returned = "To negative infinity";
// 	} else {
// 		returned = "Staying home";
// 	}
// 	return returned;
// }

function decode(word) {
  let char = '';
  switch(word.charAt(0)) {
  case 'a':
    char = word.charAt(1);
    break;
  case 'b':
    char = word.charAt(2);
    break;
  case 'c':
    char = word.charAt(3);
    break;
  case 'd':
    char = word.charAt(4);
    break;
  default:
	  char = ' ';
	}
	return char;
}

console.log(decode('craft'));
console.log(`${decode('craft')} ${decode('block')} ${decode('argon')} ${decode('meter')} ${decode('bells')} ${decode('brown')} ${decode('croon')} ${decode('droop')}`)

// console.log(jediName('Sonya', 'Slegers'));
// console.log(beyond(Math.pow(10, 1000)));
// console.log(beyond(100));