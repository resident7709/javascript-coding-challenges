"use strict";

// * Array Methods
// const fruits = ["kiwi", "banana", "orange"];
// fruits[1] = "tomato";

// * Add elements
// const newLength = fruits.push("cabbage"); // ! добавляет элемент в конец массива
// console.log(newLength);

// fruits.unshift("celery"); // ! добавляет элемент в начало массива

// * Remove elements
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

// * Exercise
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

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

// * Reviewing Functions
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
