"use strict";

// * 005.Constructor functions and the new Operator
const Person = function (firstName, birthYear) {
  this.firstName = firstName; // * instance
  this.birthYear = birthYear; // * properties

  // * unpractical way..
  //   this.calcAge = function () {
  //     console.log(2023 - birthYear);
  //   };
};

const alex = new Person("Alex", 1971);
const elena = new Person("Elena", 1971);
const artur = new Person("Artur", 1992);
const stas = new Person("Stas", 2003);

// console.log(alex);
// console.log(elena);
// console.log(artur);
// console.log(stas);
// console.log(stas instanceof Person);

// * 1.New {} is created
// * 2.Function is called, this = {}
// * 3.{} linked to prototype
// * 4.Function automatically return {}

// * 006.Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

alex.calcAge();
stas.calcAge();

// * prototype ~ prototypeOfLinkedObjects
// console.log(alex.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(alex));
// console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "homo spiritualis";

// console.log(alex.species);
// console.log(alex, elena);
// console.log(alex.hasOwnProperty("species"));
// console.log(alex.__proto__);
// Object.prototype (top of prototype chain)
// console.log(alex.__proto__.__proto__);
// console.log(alex.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [9, 4, 6, 6, 4, 9, 8]; // * new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// * unpractical way..
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");

console.dir(x => x + 1);
