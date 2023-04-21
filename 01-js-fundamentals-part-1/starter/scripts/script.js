// * switch Statement
let day = "sunday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Learn React!!");
    console.log("AX-1 training!!");
    break;
  case "tuesday":
    console.log("Lear JS!!");
    break;
  case "wednesday":
  case "thursday":
    console.log("Learn Git & NPM!!");
    break;
  case "friday":
    console.log("Learn Module Bundlers!");
    break;
  case "saturday":
  case "sunday":
    console.log("Learn Tailwind & Modern CSS.. ");
    break;
  default:
    console.log("Not a valid day..");
}

day = "tuesday";

if (day === "monday") {
  console.log("Learn React!!");
  console.log("AX-1 training!!");
} else if (day === "tuesday") {
  console.log("Learn Git & NPM!!");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Learn Git & NPM!!");
} else if (day === "friday") {
  console.log("Learn Module Bundlers!");
} else if (day === "saturday" || day === "sunday") {
  console.log("Learn Tailwind & Modern CSS.. ");
} else {
  console.log("Not a valid day..");
}

// * logical operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// const isTired = true; // C

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense); // ! = NOT operator
// console.log(!hasGoodVision); // ! = NOT operator

// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

// if (shouldDrive) {
//   console.log("able to drive");
// } else {
//   console.log("not able to drive yet");
// }

// * equality operators: ==&===
// const age = "18";

// if (age === 18) console.log("Cool!! (strict)");

// if (age == 18) console.log("Cool!! (loose)");

// const someNumber = Number(prompt("What's your number?"));

// console.log(someNumber);

// if (someNumber === 23) {
//   console.log("Cool number..");
// } else if (someNumber === 7) {
//   console.log("7 is also coll number..");
// } else {
//   console.log("num isn't 23 or 7");
// }

// if (someNumber !== 23) console.log("Oops..");

// * 5 falsy values: 0, "", undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean("Hi.."));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean({}));

// const myMoney = Infinity;

// if (myMoney) {
//   console.log("Thanks GOD!!💥");
// } else {
//   console.log("You should get a job!!");
// }

// let height;
// height = "2";

// if (height) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// * type conversion
// const inputYear = "1991";

// console.log(Number(inputYear), inputYear);
// console.log(+inputYear + 18);

// console.log(Number("Alex"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// * type coercion
// console.log("I'm " + 23 + " years old..");
// console.log("I'm " + "23" + " years old..");

// console.log("23" - 2 - "5");

// todo: assignment
// let someVar = "9" - "5"; // 4
// someVar = "19" - "13" + "17"; // "617"
// someVar = "19" - "13" + 17; // 23
// someVar = "123" < 57; // false
// someVar = 5 + 6 + "4" + 9 - 4 - 2; // 1143

// console.log(someVar);

// * if/else
// const age = 13;

// if (age >= 18) {
//   console.log("You can drive!!🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`You can start drive after ${yearsLeft} years..`);
// }

// const birthYear = 2003;

// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);
