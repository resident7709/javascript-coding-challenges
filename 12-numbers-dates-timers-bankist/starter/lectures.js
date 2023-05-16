"use strict";

// * 006.Numeric Separators

// * 005.The Reminder Operator
// console.log(6 % 2); // * even
// console.log(5 % 2); // * odd

// const isEven = n => n % 2 === 0;

// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(7709));

// labelBalance.addEventListener("click", () => {
//   [...document.querySelectorAll(".movements__row")].forEach((row, i) => {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = "orangered";
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = "blue";
//     }
//   });
// }); // * good for every Nth time..

// * 004.Math and Rounding
// console.log(Math.sqrt(25)); // * квадратный корень
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3)); // * кубический корень

// console.log(Math.max(5, 18, 23, 111, 2));
// console.log(Math.max(5, 18, 23, "111", 2));
// console.log(Math.min(5, 18, 23, "111", 2));

// console.log(Math.PI * Number.parseFloat("10px") ** 2); // * радиус
// console.log(Math.trunc(Math.random() * 6) + 1); // * случайное число 1-6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min; // * 0...1 => 0...(max - min) => min...max

// console.log(randomInt(10, 20));

// * Rounding Integers
// console.log(Math.trunc(77.7));

// console.log(Math.round(77.7));
// console.log(Math.round(77.1));

// console.log(Math.ceil(77.7)); // * округляет вверх
// console.log(Math.ceil("77.1"));

// console.log(Math.floor(77.1)); // * округляет вниз
// console.log(Math.floor("77.7"));

// console.log(Math.trunc("-77.7"));
// console.log(Math.floor("-77.7"));

// * Rounding Decimals
// console.log(+(77.777).toFixed(2));

// * 003.Converting and Checking Numbers

// * Number values represent floating-point numbers like 37 or -9.25
// console.log(23 === 23.0);

// * Base 10 - 0 to 9
// * Base 2 - 0 1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);
// console.log(10 / 3);

// * Conversion
// console.log(+"23");

// * Parsing
// console.log(Number.parseInt("30px", 10));
// console.log(Number.parseFloat("2.5rem"));

// * Checking if value is NaN
// console.log(Number.isNaN(10));
// console.log(Number.isNaN("10"));
// console.log(Number.isNaN(+"10X"));
// console.log(Number.isNaN(23 / 0));

// * Checking if value is a number
// console.log(Number.isFinite(10));
// console.log(Number.isFinite("23"));
// console.log(Number.isFinite(+"23X"));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23 / 0));
