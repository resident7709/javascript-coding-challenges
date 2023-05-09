"use strict";

// * LOOPING ARRAYS .forEach

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
