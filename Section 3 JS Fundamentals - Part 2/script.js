'use strict';

// 32. Activating Strict Mode

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriverLicense = true
// if (hasDriversLicense) console.log(`I can drive`)

// const interface = `Audio`





// 33. Functions

function logger() {
  console.log(`My name is Jonas`)
}

// calling / running / invoking function
logger()
logger()
logger()


function fruitProcessor(apples, oranges) {
  const juice = `Juice ${apples} apples and ${oranges} oranges`
  return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)
console.log(fruitProcessor(5, 0))

const AppleOrangeJuice = fruitProcessor(2, 4)
console.log(AppleOrangeJuice)