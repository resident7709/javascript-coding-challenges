"use strict";

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName} ${age} years old, and born in ${birthYear}..`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `..you're a millenial, ${firstName}!`;
      console.log(str);
    }
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstName = "Jonas";

calcAge(1991);

// * Scope Chain vs Call Stack
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
