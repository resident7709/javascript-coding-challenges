"use strict";

// *CHALLENGE#4
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(bills[i] + tip);
}

// console.log(bills);
// console.log(tips);
// console.log(totals);

// todo: Bonus
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// console.log(calcAverage(totals));

// *CHALLENGE#3
// todo: Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

const dataMark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi.toFixed(2);
  },
};

const dataJohn = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi.toFixed(2);
  },
};

function getSummary() {
  if (dataMark.calcBMI() > dataJohn.calcBMI()) {
    return `${dataMark.fullName}'s BMI (${dataMark.calcBMI()}) is higher than ${
      dataJohn.fullName
    }'s BMI 
    (${dataJohn.calcBMI()})!`;
  } else if (dataJohn.calcBMI() > dataMark.calcBMI()) {
    return `${dataJohn.fullName}'s BMI (${dataJohn.calcBMI()}) is higher than ${
      dataMark.fullName
    }'s BMI 
    (${dataMark.calcBMI()})!`;
  }
}

console.log(getSummary());

console.log(+dataMark.bmi.toFixed(2));
console.log(+dataJohn.bmi.toFixed(2));

// *CHALLENGE#2
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// calcTip(bills[0]);
// calcTip(bills[1]);
// calcTip(bills[2]);

// console.log(bills);
// console.log(tips);
// console.log(total);

// *CHALLENGE#1
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(`Dolphins score:${scoreDolphins} vs. Koalas score:${scoreKoalas}`);

// checkWinner(scoreDolphins, scoreKoalas);

// Test2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// console.log(`Dolphins score:${scoreDolphins} vs. Koalas score:${scoreKoalas}`);

// checkWinner(scoreDolphins, scoreKoalas);

// * Function Declaration
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins wins!! 🏆 (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas wins!! 🏆 (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No team wins..");
//   }
// }
