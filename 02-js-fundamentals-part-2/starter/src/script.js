"use strict";

// * Function Declarations vs. Expressions
// !declaration = может вызываться сверху
const age1 = calcAge1(1971);

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

// !expression = не может вызываться сверху (hoisted)
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(1992);

// console.log(age1, age2);

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
