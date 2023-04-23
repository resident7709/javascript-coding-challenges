"use strict";
const worldPopulation = 7900;

const countryChi = "China";
const countryRu = "Russia";
const countryFin = "Finland";
const countryInd = "India";

const populationChina = 1455;
const populationRussia = 146;
const populationFinland = 5.5;
const populationIndia = 1418;
const populationThailand = 70;
const populationUK = 69;
const populationPoland = 41;
const populationSweden = 10;
const populationAustralia = 26;

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
  return (population / worldPopulation) * 100;
}

const prcChina = percentageOfWorld1(populationChina).toFixed(2);
const prcRussia = percentageOfWorld1(populationRussia).toFixed(2);
const prcFinland = percentageOfWorld1(populationFinland).toFixed(2);
const prcIndia = percentageOfWorld1(populationIndia).toFixed(2);

// console.log(prcChina, prcRussia, prcFinland);

// const percentageOfWorld2 = function (population) {
//   return (population / worldPopulation) * 100;
// };

// const prcIndia = percentageOfWorld1(populationIndia).toFixed(2);
// const prcThailand = percentageOfWorld1(populationThailand).toFixed(2);
// const prcUK = percentageOfWorld1(populationUK).toFixed(2);

// console.log(prcIndia, prcThailand, prcUK);

// * Arrow Functions
// const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

// const prcPoland = percentageOfWorld1(populationPoland).toFixed(2);
// const prcSweden = percentageOfWorld1(populationSweden).toFixed(2);
// const prcAustralia = percentageOfWorld1(populationAustralia).toFixed(2);

// console.log(prcPoland, prcSweden, prcAustralia);

// * Functions Calling Other Functions
// const describePopulation = (country, population) => {
//   //! параметр population используется как параметр для другой функции !
//   const percentage = percentageOfWorld1(population);
//   //! обратить на это внимание и запомнить !
//   const description = `${country} has ${population} million people,
//   which is about ${percentage.toFixed(2)} of the world.`;

//   console.log(description);
// };

// describePopulation(countryChi, populationChina);
// describePopulation(countryRu, populationRussia);
// describePopulation(countryFin, populationFinland);

// * Arrays
const population = [
  populationChina,
  populationRussia,
  populationFinland,
  populationIndia,
];

const percentages = [prcChina, prcRussia, prcFinland, prcIndia];

// console.log(population.length === 4); // !boolean
// console.log(percentages);
