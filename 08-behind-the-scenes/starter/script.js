"use strict";

// * Scope Chain vs Call Stack
const a = "Alex";

first();

function first() {
  const b = "Hello!";
  second();

  function second() {
    const c = "Hi!";
    third();
  }
}

function third() {
  const d = "Hey!";

  console.log(d + c + b + a);
}

// const myName = "Alex Romanov";

// function first() {
//   const age = 52;

//   if (age >= 30) {
//     const decade = 5;
//     var yogin = true;
//   }

//   function second() {
//     const job = "react-developer";

//     console.log(`${myName} is a ${age}-year-old ${job}!!💰✨`);
//   }

//   second();
// }

// first();

// * Call Stack: Global execution, first() called, second() called, second() returns, first() returns, back to Global..

// const nameFirst = "Alex"; // * Global Execution => Call Stack

// const first = () => {
//   let a = 1;
//   const b = second(7, 9);
//   a += b;
//   return a;
// };

// function second(x, y) {
//   var c = 2;
//   return c;
// }

// const x = first();

// console.log(x);
