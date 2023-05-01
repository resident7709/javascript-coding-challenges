"use strict";

// * Primitives vs Objects

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const jonas = {
//   name: "Jonas",
//   age: 30,
// };

// const kai = jonas;
// kai.name = "Kai";
// kai.age = 37;

// console.log("Jonas:", jonas);
// console.log("Kai:", kai);

// * Regular Functions vs Arrow Functions
// const jonas = {
//   name: "Jonas",
//   year: 1991,
//   calcAge: function () {
// console.log(this);
//     console.log(2037 - this.year);

// * Solution 1
// const self = this; // * self or that
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

// * Solution 2
//     const isMillenial = () => {
//       console.log(this); // * this keyword from parent scope
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.name}!`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// * arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments); // * only for regular functions
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 2, 16);

// const addArrow = (a, b) => {
//     console.log(arguments); // ! RefereneError..
//   return a + b;
// };

// console.log(addArrow(1, 2));

// * this keyword
// console.log(this); // * global window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAge1 = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // * global window object in arrow(parent) function, lexical this keyword..
// };

// calcAge1(1992);

// const jonas = {
//   name: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   name: "Matilda",
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge; // ! cannot take this.year from jonas.calcAge
// f(); // ! cannot read properties of undefined (reading 'year')

// * Hoisting and TDZ
// * Vars
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log6pooooool(z === window.z);

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
