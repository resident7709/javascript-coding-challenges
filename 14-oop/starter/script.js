"use strict";

// * Encapsulation: Private Class Fields and Methods

// * Public fields, Public methods
// * Private fields, Private methods
// * ...and static version

// * Another Class Example
class Account {
  locale = navigator.language; // * Public fields (instances)
  // _movements = [];

  #movements = []; // * Private fields (instances)
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // * protected property
    // this._movements = []; // * protected property
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}!!`);
  }

  // * Public methods (public interface)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) { // * for future..
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!!😇`);
      return this;
    }
  }

  static helper() {
    console.log("I'm Always Your Helper!!✨");
  }

  // * Private methods
  // #approveLoan(val) { // * for future..
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);

acc1.deposit(200);
acc1.withdraw(100);
// acc1._approveLoan(45000);
acc1.requestLoan(45000);
Account.helper();

console.log(acc1);
console.log(acc1.getMovements());
console.log(acc1._approveLoan(100));

// * Chaining methods
acc1.deposit(300).deposit(500).withdraw(20).requestLoan(10000).withdraw(5000);

console.log(acc1);
console.log(acc1.getMovements());

// * 018.Inheritance Between 'Classes': Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I'm study ${this.course}`);
// };

// const jay = Object.create(StudentProto);

// jay.init("Jay", 2010, "Computer Science");
// jay.introduce();
// jay.calcAge();

// * 017.Inheritance Between 'Classes': ES6 Classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hi, ${this.firstName}!!`);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }
// * set a property that already exists
//   set fullName(name) {
// console.log(name);
//     if (name.includes(" ")) this._fullName = name;
//     else console.log(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// * Static method
//   static hey() {
//     console.log("Hi, Cl!!🖖");
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear); // * always needs to happen first
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I'm study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }..`
//     );
//   }
// }

// const martha = new StudentCl("Martha Jones", 2012, "Software Engineering");

// martha.introduce();
// martha.calcAge();

// * 015.Inheritance Between 'Classes': Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName; // * instance
//   this.birthYear = birthYear; // * properties
// };

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// * Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I'm study ${this.course}`);
// };

// const mike = new Student("Mike", 2020, "Computer Science");

// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// * 013.Object.create
// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const me = Object.create(person);

// me.name = "Matthew"; // * "name" is a property set on "me", but not on "person"
// me.isHuman = true; // * inherited properties can be overwritten

// me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// const sarah = Object.create(PersonProto);

// steven.firstName = "Steven";
// steven.birthYear = 2002;

// steven.calcAge();

// sarah.init("Sarah", 1989);
// sarah.calcAge();

// console.log(steven);
// console.log(sarah);
// console.log(steven.__proto__ === PersonProto);

// * 012.Static Methods
// * 011.Setters and Getters
// const account = {
//   owner: "John",
//   movements: [100, 200, -89, 670, 12000, 4700, 7709],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// account.latest = 50;

// console.log(account);
// console.log(account.latest);
// console.log(account.movements);

// * 010.ES6 Classes

// * 1.Classes aren't hoisted
// * 2.Classes are first-class citizens
// * 3.Classes are strict mode executed

// const Person = class {}; // * Expression

// * Declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName; // * instance
//     this.birthYear = birthYear; // * properties
//   }

// * Instance methods
// * ..added to prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hi, ${this.firstName}!!`);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }
// * set a property that already exists
//   set fullName(name) {
// console.log(name);
//     if (name.includes(" ")) this._fullName = name;
//     else console.log(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }

// * Static method
//   static hey() {
//     console.log("Hi, Cl!!🖖");
//     console.log(this);
//   }
// }

// PersonCl.prototype.greet = function () {
//   console.log(`Hi, ${this.firstName}!!`);
// };

// const jessica = new PersonCl("Jessica Davis", 1982);
// const walter = new PersonCl("Walter Walters", 1990);

// console.log(jessica);
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);

// jessica.calcAge();
// jessica.greet();

// * 005.Constructor functions and the new Operator
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName; // * instance
//   this.birthYear = birthYear; // * properties

// * unpractical way..
// this.calcAge = function () {
//   console.log(2023 - birthYear);
// };
// };

// Person.hey = function () {
//   console.log("Hi!!🖖");
//   console.log(this);
// };

// Person.hey();
// PersonCl.hey();

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
