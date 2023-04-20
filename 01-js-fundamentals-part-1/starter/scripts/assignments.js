let country = "Russia";

let language = "russian";
let population = 143.4;
let isIsland = false;

const countryForSarah = language == "english" && population < 50 && !isIsland;

if (countryForSarah) {
  console.log(`You should live in ${country}!`);
} else console.log(`${country} does not meet your criteria :(`);

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours >= 1) {
//   console.log("More than 1 border..");
// } else console.log("No borders..");

// console.log(numNeighbours);

// let myCountry;
// const myCountryContinent = "Eurasia";
// let myCountryPopulation = 143.4;

// let halfPopulation = myCountryPopulation / 2;

// myCountryPopulation = ++myCountryPopulation;

// let myCountryLanguage;
// myCountryLanguage = "russian";
// myCountry = "Russia";

// const isIsland = false;

// let finlandPopulation = 6;
// let averagePopulation = 33;

// let description =
//   myCountry +
//   " is in " +
//   myCountryContinent +
//   ", and its " +
//   myCountryPopulation +
//   " million people speak " +
//   myCountryLanguage +
//   ".";

// let description1 = `${myCountry} is in ${myCountryContinent}, and its ${myCountryPopulation} million people speak ${myCountryLanguage}.`;

// if (myCountryPopulation > averagePopulation) {
//   console.log(`${myCountry}'s population is above average.`);
// } else {
//   console.log(
//     `${myCountry}'s population is ${
//       averagePopulation - myCountryPopulation
//     } million below average.`
//   );
// }

// console.log(description);
// console.log(description1);
// console.log(myCountryPopulation > finlandPopulation);
// console.log(myCountryPopulation < averagePopulation);

// console.log(myCountry, myCountryContinent, myCountryPopulation);
// console.log(halfPopulation);
// console.log(
//   typeof isIsland,
//   typeof myCountryPopulation,
//   typeof myCountry,
//   typeof myCountryLanguage
// );
