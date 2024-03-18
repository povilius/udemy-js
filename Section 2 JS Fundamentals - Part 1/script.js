// 9. Values and Variables

// let js = 'amazing';
// // if (js === 'amazing') alert('JavaScript is FUN!');

// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = 'Bob';
// console.log(firstName);

// let jonas_matilda = 'JM';
// let $function = 27;

// let person = 'jonas';
// let PI = 3.1415;

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);




// 11. Data types

// let country = 'Lithuania';
// let continent = 'Europe';
// let population = 3.2;

// console.log(country);
// console.log(continent);
// console.log(population);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'Yes';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);








// 13. Basic operators

// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// ** - kelimas laipsniu

// const firstName = 'Jonas';
// const lastName = 'Povilaitis';
// console.log(firstName + ' ' + lastName);

// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// Comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);





// 14. Operator Precedence

// console.log(25 - 10 - 5);

// let x, y;

// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(averageAge);






// // 18. Taking decisions: if/else Statements
// const age = 15;

// if (age >= 18) {
//   console.log(`Sarah can start driving licence 🚗`)
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
// }


// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century)







// 20. Type Conversion

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);


// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23));

// // Type Coercion

// console.log('I am ' + 23 + ' years old')
// console.log('23' - '10' - 3)
// console.log('23' / '2')



// let n = '1' + 1;
// n = n - 1;
// console.log(n);








// 21. Truthy and Falsy values

// 5 falsy values: 0, '', undefined, nul, Nan.

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Jonas'))
// console.log(Boolean({}))

// const money = 0
// if (money) {
//   console.log(`Don't spend it all`)
// } else {
//   console.log(`You should get a job`)
// }


// let height;

// if (height) {
//   console.log(`YAY! Height is defined`)
// } else {
//   console.log(`Height is UNDEFINED`)
// }







// 22. Equality Operators: == vs. ===

// const age = 18

// if (age === 18) console.log(`You just became an adult (strict)`)
// if (age == 18) console.log(`You just became an adult (loose)`)

// const favorite = Number(prompt(`What's your favorite number?`))
// console.log(favorite)

// if (favorite === 23) {
//   console.log(`Cool! ${favorite} is an amazing number!`)
// } else if (favorite === 7) {
//   console.log(`Cool! ${favorite} is an amazing number!`)
// } else {
//   console.log(`Number is not 23 or 7`)
// }

// if (favorite !== 23) console.log(`Why not 23?`)







// 24. Logical Operators

// const hasDriversLicense = true
// const hasGoodVision = false

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)


// // if (hasDriversLicense && hasGoodVision) {
// //   console.log(`Sarah is able to drive`)
// // } else {
// //   console.log(`Someone else should drive`)
// // }

// const isTired = true

// console.log(hasDriversLicense || hasGoodVision || isTired)
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Sarah is able to drive`)
// } else {
//   console.log(`Someone else should drive`)
// }






// 26. The switch Statement

const day = `wednesday`

switch (day) {
  case 'monday': // day === 'monday'
    console.log(`Plan course structure`)
    console.log(`Go to coding meetup`)
    break
  case 'tuesday':
    console.log(`Prepare theory videos`)
    break
  case 'wednesday':
  case 'thursday':
    console.log(`Write code examples`)
    break
  case 'friday':
    console.log(`Record videos`)
    break
  case 'saturday':
  case 'sunday':
    console.log(`Enjoy the weekend`)
    break
  default:
    console.log(`Not a valid day`)
}