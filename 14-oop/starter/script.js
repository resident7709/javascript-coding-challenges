"use strict";

// * 012.Static Methods

// * 011.Setters and Getters
const account = {
  owner: "John",
  movements: [100, 200, -89, 670, 12000, 4700, 7709],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest = 50;

console.log(account);
console.log(account.latest);
console.log(account.movements);

// * 010.ES6 Classes

// * 1.Classes aren't hoisted
// * 2.Classes are first-class citizens
// * 3.Classes are strict mode executed

// const Person = class {}; // * Expression

// * Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName; // * instance
    this.birthYear = birthYear; // * properties
  }

  // * Instance methods
  // * ..added to prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Hi, ${this.firstName}!!`);
  }

  get age() {
    return 2023 - this.birthYear;
  }
  // * set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  // * Static method
  static hey() {
    console.log("Hi, Cl!!🖖");
    console.log(this);
  }
}

// PersonCl.prototype.greet = function () {
//   console.log(`Hi, ${this.firstName}!!`);
// };

const jessica = new PersonCl("Jessica Davis", 1982);
const walter = new PersonCl("Walter Walters", 1990);

// console.log(jessica);
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);

// jessica.calcAge();
// jessica.greet();

// * 005.Constructor functions and the new Operator
const Person = function (firstName, birthYear) {
  this.firstName = firstName; // * instance
  this.birthYear = birthYear; // * properties

  // * unpractical way..
  // this.calcAge = function () {
  //   console.log(2023 - birthYear);
  // };
};

Person.hey = function () {
  console.log("Hi!!🖖");
  console.log(this);
};

Person.hey();
PersonCl.hey();

// const alex = new Person("Alex", 1971);
// const elena = new Person("Elena", 1971);
// const artur = new Person("Artur", 1992);
// const stas = new Person("Stas", 2003);

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
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// alex.calcAge();
// stas.calcAge();

// * prototype ~ prototypeOfLinkedObjects
// console.log(alex.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(alex));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = "homo spiritualis";

// console.log(alex.species);
// console.log(alex, elena);
// console.log(alex.hasOwnProperty("species"));
// console.log(alex.__proto__);
// Object.prototype (top of prototype chain)
// console.log(alex.__proto__.__proto__);
// console.log(alex.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

// const arr = [9, 4, 6, 6, 4, 9, 8]; // * new Array === []

// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// * unpractical way..
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector("h1");

// console.dir(x => x + 1);
