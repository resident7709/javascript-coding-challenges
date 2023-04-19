// * CHALLENGE#1
// * Data1
let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let bmiMark = weightMark / heightMark ** 2;
let bmiJohn = weightJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
  console.log(
    `Mark's BMI (${bmiMark.toFixed(
      2
    )}) is higher than John's (${bmiJohn.toFixed(2)})!`
  );
} else {
  console.log("John's BMI is higher than Mark's!");
}

// * Data2
weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

bmiMark = weightMark / heightMark ** 2;
bmiJohn = weightJohn / (heightJohn * heightJohn);

if (bmiMark < bmiJohn) {
  console.log(
    `John's BMI (${bmiJohn.toFixed(
      2
    )}) is higher than Mark's (${bmiMark.toFixed(2)})!`
  );
} else {
  console.log("Mark's BMI is higher than John's!");
}

// * CHALLENGE#3
