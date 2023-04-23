"use strict";

// * Reviewing Functions
const calcAge = function (yearOfBirth) {
  return 2023 - yearOfBirth;
};

const yearsUntilRetirement = function (birthYear, fullName) {
  const age = calcAge(birthYear);
  const retirement = 70 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  // return console.log(`${fullName} retires in ${retirement} years.`);
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1971, "Alex"));
console.log(yearsUntilRetirement(1930, "Bob"));

// * Functions Calling Other Functions
// const cutFruitPieces = (fruit) => fruit * 4;

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges for you!!😍`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// * Arrow Functions
// !expression..do not get 'this' keyword..
// const calcAge3 = (birthYear) => 2023 - birthYear;

// const age3 = calcAge3(2003);

// const yearsUntilRetirement = (birthYear, fullName) => {
//   const age = 2023 - birthYear;
//   const retirement = 70 - age;
//   return `${fullName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1971, "Alex Romanov"));
// console.log(yearsUntilRetirement(1992, "Artur Romanov"));
// console.log(yearsUntilRetirement(2003, "Stas Romanov"));

// * Function Declarations vs. Expressions
// !declaration = может вызываться сверху
// const age1 = calcAge1(1971);

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// !expression = не может вызываться сверху (hoisted)
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(1992);

// console.log(age1, age2, age3);

// * Functions
// function logger() {
//   console.log("My name is Alex!!");
// }

// logger(); // вызов функции
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges for you!!😍`;
//   return juice;
// }

// const appleJuice = fruitProcessor(3, "no");
// const orangeJuice = fruitProcessor("no", 3);

// console.log(appleJuice);
// console.log(orangeJuice);
