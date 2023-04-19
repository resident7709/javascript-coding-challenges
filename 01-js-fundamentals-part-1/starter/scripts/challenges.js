// *CHALLENGE#1
// *Data1
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

// *Data2
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

// *CHALLENGE#2
