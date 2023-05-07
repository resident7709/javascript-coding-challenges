"use strict";

// * CALL and APPLY Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, passName) {
    console.log(
      `${passName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passName });
  },
};

lufthansa.book(239, "John Doe");
lufthansa.book(635, "Karl Vesely");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(23, "Sarah Williams"); // ! Does NOT work because this keyword..

// * Call Method
book.call(lufthansa, 239, "Maxim Kuppelweiser");

console.log(lufthansa);

book.call(eurowings, 23, "Sarah Williams");

console.log(eurowings);

const swiss = {
  airline: "Swiss AirLines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 493, "Monica Portraite");

// * Apply Method
const flightData = [493, "George Copper"];
// book.apply(swiss, flightData); // * vanilla way..
book.call(swiss, ...flightData); // * ES6 way..spread operator

console.log(swiss);

// * BIND Method

// * Functions Returning Functions
// const greet = greeting => name => console.log(`${greeting} ${name}`); // * Arrows Cool!!

// console.log();
// const greeterHey = greet("Hey!!");
// greeterHey("Alex");
// greeterHey("Anna");

// greet("Hi,")("Jonas");

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
