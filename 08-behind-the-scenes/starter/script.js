"use strict";

// * this keyword

// * Hoisting and TDZ
// * Vars
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(firstName);
// console.log(job);
// console.log(year);

// var firstName = "Jonas";
// let job = "teacher";
// const year = 1991;

// * Functions
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }

// console.log(addDecl(2, 1));
// console.log(addExpr(2, 1));
// console.log(addArrow(2, 1));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// const myName = "Jonas";

// if (myName === "Jonas") {
//   console.log(`Jonas is a ${job}`);
//   const age = 2037 - birtYear;
//   console.log(age);
//   const job = "teacher"; // ! const job in TDZ
//   console.log(x);
// }

// * Scope Chain vs Call Stack
// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName} ${age} years old, and born in ${birthYear}..`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = " Steven"; // ! new var
//       output = "NEW OUTPUT!!"; // ! reassigned var

//       const str = `..you're a millenial, ${firstName}!`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       console.log(firstName);
//       console.log(output);
//     }
//     console.log(millenial);
// console.log(add(2, 3)); // * under strict mode
//   }
//   printAge();

//   return age;
// }

// const firstName = "Jonas";

// calcAge(1991);

// const myName = "Alex Romanov";

// function first() {
//   const age = 52;

//   if (age >= 30) {
//     const decade = 5;
//     var yogin = true;
//   }

//   function second() {
//     const job = "react-developer";

//     console.log(`${myName} is a ${age}-year-old ${job}!!💰✨`);
//   }

//   second();
// }

// first();

// * Call Stack: Global execution, first() called, second() called, second() returns, first() returns, back to Global..

// const nameFirst = "Alex"; // * Global Execution => Call Stack

// const first = () => {
//   let a = 1;
//   const b = second(7, 9);
//   a += b;
//   return a;
// };

// function second(x, y) {
//   var c = 2;
//   return c;
// }

// const x = first();

// console.log(x);
