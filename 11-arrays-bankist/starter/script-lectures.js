"use strict";

// * 004.THE NEW AT METHOD

// * 003.SIMPLE ARRAY METHODS
let arr = ["a", "b", "c", "d", "e"];
const arr2 = ["f", "g", "h", "i", "j"];

// * Slice - не изменяет оригинал
// console.log(arr.slice()); // * shallow copy..
// console.log([...arr]); // * ES6
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1)); // * (-1) always last element..
// console.log(arr.slice(1, -2));

// * Splice - изменяет оригинал
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2); // * (start, deleteCount)
// console.log(arr);

// * Reverse - изменяет оригинал
// console.log(arr2.reverse());
// console.log(arr2);

// * Concat - не изменяет оригиналы, но возвращает новый массив
// const letters = arr.concat(arr2);
// const letters2 = [...arr, ...arr2]; // * ES6

// console.log(letters);
// console.log(letters2);

// * Join - возвращает новую строку, объединяя все элементы массива
// console.log(letters.join(" - "));
