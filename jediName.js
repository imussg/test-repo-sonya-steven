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

// function decode(word) {
//   let char = '';
//   switch(word.charAt(0)) {
//   case 'a':
//     char = word.charAt(1);
//     break;
//   case 'b':
//     char = word.charAt(2);
//     break;
//   case 'c':
//     char = word.charAt(3);
//     break;
//   case 'd':
//     char = word.charAt(4);
//     break;
//   default:
// 	  char = ' ';
// 	}
// 	return char;
// }

// console.log(decode('craft'));
// console.log(`${decode('craft')} ${decode('block')} ${decode('argon')} ${decode('meter')} ${decode('bells')} ${decode('brown')} ${decode('croon')} ${decode('droop')}`)

// console.log(jediName('Sonya', 'Slegers'));
// console.log(beyond(Math.pow(10, 1000)));
// console.log(beyond(100));

// function howManyDays(month, leapYear) {
//   if (leapYear === true && month === 'February') {
//     return 'It\'s a leap year so February has 29 days.';
//   } else {
//     switch(month) {
//     case 'January':
//     case 'March':
//     case 'May':
//     case 'July':
//     case 'August':
//     case 'October':
//     case 'December':
//       return `${month} has 31 days.`;
//       break;
//     case 'April':
//     case 'June':
//     case ' September':
//     case 'November':
//       return `${month} has 30 days.`;
//       break;
//     case 'February':
//       return `It's not a leap year so ${month} has 28 days.`;
//       break;
//     default:
// 		  return 'Must provide a valid month';
//     }
//   }
// }
// console.log(howManyDays(23, true));

function rockPaperScissors(num) {
	const randomNo = Math.floor(Math.random() * 3) + 1;
  if (num === 1 && randomNo === 3 || 
			num === 3 && randomNo === 2 || 
			num === 2 && randomNo === 2) {
    return 'Congratualtions!  You beat the computer!';
  } else if (num === 1 && randomNo === 2 ||
						 num === 2 && randomNo === 3 ||
						 num === 3 && randomNo === 1) {
									 return 'Bummer! The computer beat you...';
								 } else if (num === randomNo) {
									 return `It's a tie!`;
								 } else {
									 console.error(`Parameter is not a number`);
								 }
}

console.log(rockPaperScissors(10));