"use strict";

// *CHALLENGE#1
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(`Dolphins score:${scoreDolphins} vs. Koalas score:${scoreKoalas}`);

checkWinner(scoreDolphins, scoreKoalas);

// Test2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(`Dolphins score:${scoreDolphins} vs. Koalas score:${scoreKoalas}`);

checkWinner(scoreDolphins, scoreKoalas);

// * Function Declaration
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins wins!! 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas wins!! 🏆 (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins..");
  }
}
