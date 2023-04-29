"use strict";

// * Call Stack: Global execution, first() called, second() called, second() returns, first() returns, back to Global..

const nameFirst = "Alex"; // * Global Execution => Call Stack

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a += b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();

console.log(x);
