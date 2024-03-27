'use strict';

// 32. Activating Strict Mode

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriverLicense = true
// if (hasDriversLicense) console.log(`I can drive`)

// const interface = `Audio`





// 33. Functions

// function logger() {
//   console.log(`My name is Jonas`)
// }

// // calling / running / invoking function
// logger()
// logger()
// logger()


// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`
//   return juice
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)
// console.log(fruitProcessor(5, 0))

// const AppleOrangeJuice = fruitProcessor(2, 4)
// console.log(AppleOrangeJuice)








// 34. Function Declarations and Expressions

// Declaration

// function calcAge1(birthYear) {
//   return 2037 - birthYear
// }

// const age1 = calcAge1(1993)


// // Expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear
// }

// const age2 = calcAge2(1991)
// console.log(age1, age2)





// 35. Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(1993)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear
//   const retirement = 65 - age
//   // return retirement
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1993, `Faustas`))
// console.log(yearsUntilRetirement(1989, `Jonas`))









// 36. Functions calling other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples)
//   const orangePieces = cutFruitPieces(oranges)

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
//   return juice
// }

// console.log(fruitProcessor(2, 3))





// 37. Reviewing Functions
// function calcAge(birthYear) {
//   return 2024 - birthYear
// }

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`)
//     return retirement
//   } else {
//     console.log(`${firstName} has already retired!`)
//     return -1
//   }
// }

// console.log(yearsUntilRetirement(1993, 'Faustas'))
// console.log(yearsUntilRetirement(1950, 'Petras'))


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27)

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > (avgKoalas * 2)) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgKoalas > (avgDolphins * 2)) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
  } else {
    console.log(`No team wins...`)
  }
}

checkWinner(scoreDolphins, scoreKoalas)