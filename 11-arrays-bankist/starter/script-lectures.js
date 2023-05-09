"use strict";

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// * .forEach WITH Maps AND Sets

// * LOOPING ARRAYS .forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// * The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); // * The Math.abs() static method returns the absolute value of a number
//   }
// }

// console.log("--- forEach + ternary operator  ---");

// * The forEach() method executes a provided function once for each array element
// * .forEach не использует continue and break..
// movements.forEach((movement, i, array) =>
//   movement > 0
//     ? console.log(`Movement ${i + 1}: You deposited ${movement}`)
//     : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
// );

// * 004.THE NEW .at METHOD
// const arr = [23, 11, 64];

// * getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log("String".at(0));
// console.log("String".at(-1));

// * 003.SIMPLE ARRAY METHODS
// let arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["f", "g", "h", "i", "j"];

// * .slice - не изменяет оригинал
// console.log(arr.slice()); // * shallow copy..
// console.log([...arr]); // * ES6
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1)); // * (-1) always last element..
// console.log(arr.slice(1, -2));

// * .splice - изменяет оригинал
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2); // * (start, deleteCount)
// console.log(arr);

// * .reverse - изменяет оригинал
// console.log(arr2.reverse());
// console.log(arr2);

// * .concat - не изменяет оригиналы, но возвращает новый массив
// const letters = arr.concat(arr2);
// const letters2 = [...arr, ...arr2]; // * ES6

// console.log(letters);
// console.log(letters2);

// * .join - возвращает новую строку, объединяя все элементы массива
// console.log(letters.join(" - "));
