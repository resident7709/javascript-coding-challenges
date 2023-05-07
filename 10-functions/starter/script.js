"use strict";

// * Functions Returning Functions
const greet = greeting => name => console.log(`${greeting} ${name}`); // * Arrows Cool!!

console.log();
const greeterHey = greet("Hey!!");
greeterHey("Alex");
greeterHey("Anna");

greet("Hi,")("Jonas");

// * Callback Functions
// const oneWord = str => str.replace(/ /g, "").toLowerCase();

// const upperFirstWord = str => {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// * Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the BEST!!", upperFirstWord);
// console.log("// ==================================== //");
// transformer("JavaScript is the BEST!!", oneWord);

// * JS uses callbacks all the time..
// const high5 = () => console.log("🖐");

// document.body.addEventListener("click", high5);

// ["Ivan", "Karl", "Anna"].forEach(high5);

// * How Passing Arguments Works..Value vs Reference..
// let flight = "LH234";
// const passengerData = {
//   name: "John Doe",
//   passport: 78902315,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   passengerData.passport === 78902315
//     ? console.log("Checked In..")
//     : console.log("Wrong password..");
// };

// checkIn(flight, passengerData);

// * is the same as doing..
// console.log(flight); // * const flightNum = flight;
// console.log(passengerData); // * const passenger = passengerData;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(passengerData);
// checkIn(flight, passengerData);

// * Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
// * ES5
//   numPassengers = numPassengers || 1;
//   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123", 2, 600);
// createBooking("LH123", 5);
// createBooking("LH123", 7);
// createBooking("LH123", undefined, 999);
