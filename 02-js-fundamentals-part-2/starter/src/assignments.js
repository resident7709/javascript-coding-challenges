"use strict";
const worldPopulation = 7900;

const populationChina = 1441;
const populationRussia = 143;
const populationFinland = 6;
const populationIndia = 1388;
const populationThailand = 69;
const populationUK = 68;

// * Functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its
//     capital city is ${capitalCity}`;
// }

// const descFinland = describeCountry("Finland", 6, "Helsinki");
// const descRussia = describeCountry("Russia", 143, "Moscow");
// const descChina = describeCountry("China", 1412, "Beijing");

// console.log(descFinland);
// console.log(descRussia);
// console.log(descChina);

// * Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  const percentage = (population / worldPopulation) * 100;
  return percentage;
}

const CHINA = percentageOfWorld1(populationChina).toFixed(2);
const RUSSIA = percentageOfWorld1(populationRussia).toFixed(2);
const FINLAND = percentageOfWorld1(populationFinland).toFixed(2);

console.log(CHINA, RUSSIA, FINLAND);

const percentageOfWorld2 = function (population) {
  const percentage = (population / worldPopulation) * 100;
  return percentage;
};

const INDIA = percentageOfWorld1(populationIndia).toFixed(2);
const THAILAND = percentageOfWorld1(populationThailand).toFixed(2);
const UK = percentageOfWorld1(populationUK).toFixed(2);

console.log(INDIA, THAILAND, UK);
