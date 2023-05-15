"use strict";

// * 004.Math and Rounding

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
console.log(Number.parseInt("30px", 10));
console.log(Number.parseFloat("2.5rem"));

// * Checking if value is NaN
console.log(Number.isNaN(10));
console.log(Number.isNaN("10"));
console.log(Number.isNaN(+"10X"));
console.log(Number.isNaN(23 / 0));

// * Checking if value is a number
console.log(Number.isFinite(10));
console.log(Number.isFinite("23"));
console.log(Number.isFinite(+"23X"));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23 / 0));
