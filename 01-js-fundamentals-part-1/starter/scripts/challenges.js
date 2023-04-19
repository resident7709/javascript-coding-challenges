// * CHALLENGE#1
// * Data1
let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let bmiMark = weightMark / heightMark ** 2;
console.log("if Mark's BMI: " + bmiMark.toFixed(2));
let bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log("and John's BMI: " + bmiJohn.toFixed(2));

let markHigherBMI = bmiMark > bmiJohn;
console.log("markHigherBMI = " + markHigherBMI);

// * Data2
weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

bmiMark = weightMark / heightMark ** 2;
console.log("if Mark's BMI: " + bmiMark.toFixed(2));
bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log("and John's BMI: " + bmiJohn.toFixed(2));

markHigherBMI = bmiMark > bmiJohn;
console.log("markHigherBMI = " + markHigherBMI);

// * CHALLENGE#2
// * Use the BMI example from Challenge #1, and the code you already wrote, and
// * improve it.
// * Your tasks:
// * 1. Print a nice output to the console, saying who has the higher BMI. The message
// * is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// * 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// * BMI (28.3) is higher than John's (23.9)!"
// * Hint: Use an if/else statement

// * CHALLENGE#3
