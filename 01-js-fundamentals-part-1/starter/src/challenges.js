// * CHALLENGE#4 (Tip Calculator)
// const bill = 430;

// const tips = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const total = bill + tips;

// console.log(
//   `The bill was ${bill}, the tip was ${tips}, and the total value ${total}..`
// );

// * CHALLENGE#3
// const averageDolphins = (97 + 112 + 80) / 3;
// const averageKoalas = (109 + 95 + 50) / 3;

// const winnerDolphins = averageDolphins > averageKoalas;
// const winnerKoalas = averageKoalas > averageDolphins;
// const draw = averageDolphins === averageKoalas;

// console.log("Dolphins: " + averageDolphins.toFixed(2));
// console.log("Koalas: " + averageKoalas.toFixed(2));

// if (winnerDolphins) {
//   console.log("Dolphins = Winner!!🏆");
// } else if (winnerKoalas) {
//   console.log("Koalas = Winner!!🏆");
// } else if (draw) {
//   console.log("It's a Draw..");
// }

// * Bonus 1
// if (winnerDolphins && averageDolphins >= 100) {
//   console.log("Dolphins = Winner!!🏆");
// } else if (winnerKoalas && averageKoalas >= 100) {
//   console.log("Koalas = Winner!!🏆");
// } else if (draw) {
//   console.log("It's a Draw..");
// }

// * Bonus 2
// if (winnerDolphins && averageDolphins >= 100) {
//   console.log("Dolphins = Winner!!🏆");
// } else if (winnerKoalas && averageKoalas >= 100) {
//   console.log("Koalas = Winner!!🏆");
// } else if (draw && averageDolphins >= 100 && averageKoalas >= 100) {
//   console.log("It's a Draw!");
// } else {
//   console.log("No one wins the trophy..");
// }

// * CHALLENGE#1 + CHALLENGE#2
// * Data1
// let weightMark = 78;
// let heightMark = 1.69;
// let weightJohn = 92;
// let heightJohn = 1.95;

// let bmiMark = weightMark / heightMark ** 2;
// let bmiJohn = weightJohn / (heightJohn * heightJohn);

// let markHigherBMI = bmiMark > bmiJohn;

// if (markHigherBMI) {
//   console.log(
//     `Mark's BMI (${bmiMark.toFixed(
//       2
//     )}) is higher than John's (${bmiJohn.toFixed(2)})!`
//   );
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// * Data2
// weightMark = 95;
// heightMark = 1.88;
// weightJohn = 85;
// heightJohn = 1.76;

// bmiMark = weightMark / heightMark ** 2;
// bmiJohn = weightJohn / (heightJohn * heightJohn);

// if (markHigherBMI != false) {
//   console.log(
//     `John's BMI (${bmiJohn.toFixed(
//       2
//     )}) is higher than Mark's (${bmiMark.toFixed(2)})!`
//   );
// } else {
//   console.log("Mark's BMI is higher than John's!");
// }
