'use strict';

function yearOfBirth(age) {
  try{
    if(age < 0) {
      throw new Error('Age can not be negative');
    } else {
      return 2018 - age;
    }
  }
  catch (e) {
    console.error(e.message);
  }
}
function whoAmI(name, age) {
  if (name && age) { 
    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
    console.log(`I was born in ${yearOfBirth(age)}`);
  } else {
    console.error('Argument not valid');
  }
}

whoAmI('Harry', 10);
