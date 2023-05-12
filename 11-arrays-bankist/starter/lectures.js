"use strict";

// * 021.The findIndex() Method

// * 018.The find() Method
// * The find() method returns the first element in the provided array that satisfies the provided testing function
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

const firstWithdrawal = movements.find(el => el < 0);

console.log(firstWithdrawal);

// * 016.The Magic of Chaining Methods

// const eurToUsd = 1.1;

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd) // * map(mov, i, arr) for debugging..
//   .reduce((acc, mov) => acc + mov, 0)
//   .toFixed(2);

// console.log(+totalDepositsUSD);

// * 014.The reduce() Method

// * accumulator (acc) => SNOWBALL..The value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0]

// * functional way..
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// * for of way..
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;

// console.log(balance2);

// * maximum value of array
// const max = movements.reduce((acc, mov) => (acc > mov ? acc : mov), 0);

// console.log(max);

// * 013.The filter() Method

// * functional way..
// const deposits = movements.filter(mov => mov > 0);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(deposits);
// console.log(withdrawals);

// * for of way..
// const depositsFor = [];
// for (const mov of movements) mov > 0 ? depositsFor.push(mov) : null;

// console.log(depositsFor);

// * 011.The map() Method
// * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// * functional way..
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movementsUSD);

// * for of way..
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// console.log(movementsUSDfor);

// * ...
// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescriptions);

// * 006.forEach with Maps & Sets
// * Map
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// * Set
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach((value, _, map) => {
//   console.log(`${value}: ${value}`);
// });

// * LOOPING ARRAYS forEach()
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

// * 004.The New at() Method
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

// * slice() - не изменяет оригинал
// console.log(arr.slice()); // * shallow copy..
// console.log([...arr]); // * ES6
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1)); // * (-1) always last element..
// console.log(arr.slice(1, -2));

// * splice() - изменяет оригинал
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2); // * (start, deleteCount)
// console.log(arr);

// * reverse() - изменяет оригинал
// console.log(arr2.reverse());
// console.log(arr2);

// * concat() - не изменяет оригиналы, но возвращает новый массив
// const letters = arr.concat(arr2);
// const letters2 = [...arr, ...arr2]; // * ES6

// console.log(letters);
// console.log(letters2);

// * join() - возвращает новую строку, объединяя все элементы массива
// console.log(letters.join(" - "));
