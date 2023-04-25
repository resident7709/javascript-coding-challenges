"use strict";

// * While Loop

let rep = 1;

while (rep <= 10) {
  // console.log(`Repetition ${rep}..`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}!`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end..it's 6!!");
}

// * For Loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`Repetition ${i}..`);
// }

const aboutMe = {
  firstName: "Alex",
  lastName: "Romanov",
  birthYear: 1971,
  position: "React-Developer",
  skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
};

const myInfo = [
  "Alex",
  "Romanov",
  2023 - 1971,
  "React-Developer",
  true,
  "mango",
];

// * looping backwards
// for (let i = myInfo.length - 1; i >= 0; i--) {
//   console.log(i, myInfo[i]);
// }

// * loop in loop
for (let exercise = 1; exercise <= 3; exercise++) {
  // console.log(`---Starting exercise ${exercise}`);
  // ! внутренний цикл повторяется на каждой итерации внешнего цикла
  for (let rep = 1; rep <= 5; rep++) {
    // console.log(`Exercise ${exercise}: repetition ${rep}`);
  }
}

// *=======================================* //
const types = [];

for (let i = 0; i < myInfo.length; i++) {
  // * Reading from types array
  // console.log(myInfo[i], typeof myInfo[i]);

  // * Filling types array
  // types[i] = typeof myInfo[i];
  types.push(typeof myInfo[i]);
}

// console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  // ages[i] = 2023 - years[i];
  ages.push(2037 - years[i]);
}

// console.log(ages);

// * continue and break
// console.log("---ONLY STRINGS---");
// for (let i = 0; i < myInfo.length; i++) {
//   if (typeof myInfo[i] !== "string") continue;

//   console.log(myInfo[i], typeof myInfo[i]);
// }

// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < myInfo.length; i++) {
//   if (typeof myInfo[i] === "number") break;

//   console.log(myInfo[i], typeof myInfo[i]);
// }

// * Object Methods

// const aboutMe = {
//   firstName: "Alex",
//   lastName: "Romanov",
//   birthYear: 1971,
//   position: "React-Developer",
//   skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
//   married: true,

//   calcAge: (birthYear) => 2023 - birthYear, // function expression

//   calcAge: function () {
//     return 2023 - this.birthYear; // ! this
//   },

//   calcAge: function () {
//     this.age = 2023 - this.birthYear; // ! using this
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is ${this.calcAge()} years old ${
//       this.position
//     }, and he ${this.married ? "is" : "isn't"} married!!🤩`; // ! using ternary operator
//   },
// };

// aboutMe.location = "Tver";
// aboutMe["hobbies"] = "AX training programms";

// console.log(aboutMe.getSummary());

// console.log(aboutMe.calcAge());
// console.log(aboutMe.age);
// console.log(aboutMe.age);
// console.log(aboutMe.age);

// * challenge (objects)
// Alex has 5 skills, and his best skill is React!!

// console.log(
//   `${aboutMe.firstName} has ${aboutMe.skills.length} skills, and his best skill is ${aboutMe.skills[3]}!!`
// );

// * challenge (object methods)
// todo: Alex is 52 years old React-Developer, and he is/isn't married.

// console.log(aboutMe);

// const nameKey = "Name";

// console.log(aboutMe["first" + nameKey]);
// console.log(aboutMe["last" + nameKey]);

// console.log(aboutMe.lastName); // ! dot looks cleaner..
// console.log(aboutMe["lastName"]); // ! bracket for expressions..

// const interestedIn = prompt("Choose property..");

// if (aboutMe[interestedIn]) {
//   console.log(aboutMe[interestedIn]);
// } else {
//   console.log("Choice doesn't exist..");
// }

// * Array Methods
// const fruits = ["kiwi", "banana", "orange"];
// fruits[1] = "tomato";

// * add array elements
// const newLength = fruits.push("cabbage"); // ! добавляет элемент в конец массива
// console.log(newLength);

// fruits.unshift("celery"); // ! добавляет элемент в начало массива

// * remove array elements
// fruits.pop(); // ! удаляет элемент в конце массива
// const popped = fruits.pop();
// console.log(popped);

// fruits.shift(); // ! удаляет элемент в начале массива
// fruits.push(23);

// if (fruits.includes(23)) {
//   console.log("Hi, 23..");
// }

// console.log(fruits);
// console.log(fruits.indexOf("kiwi"));
// console.log(fruits.includes("kiwi"));
// console.log(fruits.includes(23));

// * Arrays
// const fruits2 = new Array("apple", "lemon", "mango");

// console.log(fruits[0], fruits[2]);
// console.log(fruits2[fruits2.length - 1]);
// console.log(typeof fruits2);

// const firstName = "Alex";

// const myInfo = [firstName, "Romanov", 2023 - 1971, "React-Developer", fruits2];

// console.log(myInfo);
// console.log(myInfo.length);

// * exercise (arrays)
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

// const years = [1971, 1992, 2003, 2023, 2000];

// const age1 = calcAge1(years[0]);
// const age2 = calcAge1(years[1]);
// const age3 = calcAge1(years[years.length - 1]);

// const ages = [
//   calcAge1(years[0]),
//   calcAge1(years[1]),
//   calcAge1(years[years.length - 1]),
// ];

// console.log(ages);

// * Functions Reviewing
// const calcAge = function (yearOfBirth) {
//   return 2023 - yearOfBirth;
// };

// const yearsUntilRetirement = function (birthYear, fullName) {
//   const age = calcAge(birthYear);
//   const retirement = 70 - age;

//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }

//   return console.log(`${fullName} retires in ${retirement} years.`);
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1971, "Alex"));
// console.log(yearsUntilRetirement(1930, "Bob"));

// * Functions Calling Other Functions
// const cutFruitPieces = (fruit) => fruit * 4;

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges for you!!😍`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// * Arrow Functions
// !expression..do not get 'this' keyword..
// const calcAge3 = (birthYear) => 2023 - birthYear;

// const age3 = calcAge3(2003);

// const yearsUntilRetirement = (birthYear, fullName) => {
//   const age = 2023 - birthYear;
//   const retirement = 70 - age;
//   return `${fullName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1971, "Alex Romanov"));
// console.log(yearsUntilRetirement(1992, "Artur Romanov"));
// console.log(yearsUntilRetirement(2003, "Stas Romanov"));

// * Function Declarations vs. Expressions
// !declaration = может вызываться сверху
// const age1 = calcAge1(1971);

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// !expression = не может вызываться сверху (hoisted)
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(1992);

// console.log(age1, age2, age3);

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
