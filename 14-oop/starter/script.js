"use strict";

// * 006.Prototypes

// * 005.Constructor functions and the new Operator
const Person = function (firstName, birthYear) {
  this.firstName = firstName; // * instance
  this.birthYear = birthYear; // * properties

  //   this.calcAge = function () {
  //     console.log(2023 - birthYear);
  //   };
};

const alex = new Person("Alex", 1971);
const elena = new Person("Elena", 1971);
const artur = new Person("Artur", 1992);
const stas = new Person("Stas", 2003);

console.log(alex);
console.log(elena);
console.log(artur);
console.log(stas);
console.log(stas instanceof Person);

// * 1.New {} is created
// * 2.Function is called, this = {}
// * 3.{} linked to prototype
// * 4.Function automatically return {}
