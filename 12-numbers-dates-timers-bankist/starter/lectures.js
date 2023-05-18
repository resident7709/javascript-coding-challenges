"use strict";

// * 011.Intl Numbers

// * 010.Operations with Dates
const future = new Date(2037, 10, 19, 15, 23);

// console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 3), new Date(2037, 3, 24));

console.log(days1);

// * 008.Creating Dates

// * Create a Date
// const now = new Date();

// console.log(now);
// console.log(new Date("May 16 2023 18:04:13"));
// console.log(new Date("December 24, 2020"));
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// * Working with Dates

// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142246180000));
// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

// * 007.Working with BigInt
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(8934572103374722846582928117336182364n);
// console.log(BigInt(8934572103374));

// * Operations
// console.log(10000n + 10000n);
// console.log(9272762736817618726812761827n * 10000n);

// const huge = 82768237628376237865373n;
// const num = 77;

// * Exceptions
// console.log(2078797n > 89989);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == "20");

// console.log(huge + " is really bigInt!!");

// * Divisions
// console.log(huge / BigInt(num));
// console.log(10n / 3n);

// * 006.Numeric Separators
// const diameter = 287_460_000_000;

// console.log(diameter);

// const price = 345_99;

// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.14_15;

// console.log(PI);

// console.log(Number("230_000"));
// console.log(parseInt("230_000"));

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

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min; // * 0...1 => 0...(max - min) => min...max

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
