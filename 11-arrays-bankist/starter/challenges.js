"use strict";

// *CHALLENGE#1
const checkDogs = function (dogsJulia, dogsKate) {
  let dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2); // * dogsJulia.slice(1,3)

  const dogs = [...dogsJuliaCorrected, ...dogsKate]; // * dogsJuliaCorrected.concat(dogsKate)

  dogs.forEach((age, i) =>
    age >= 3
      ? console.log(
          `Dog number ${i + 1} is an adult, and is ${age} years old!!`
        )
      : console.log(`Dog number ${i + 1} is still a puppy.. 🐶`)
  );
};

// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// todo: Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// todo: 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// todo: 2. Create an array with both Julia's (corrected) and Kate's data
// todo: 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶 ")
// todo: 4. Run the function for both test datasets

// todo: Test data:
// todo: Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// todo: Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// *CHALLENGE#2 + #CHALLENGE3
const calcAverageHumanAge = ages => {
  const dogAgeInHumanYears = ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
    .toFixed(2);

  console.log(+dogAgeInHumanYears);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// todo: Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// todo: 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// todo: 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// todo: 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages)
// todo: 4. Run the function for both test datasets

// todo: Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

// todo - Test data:
// todo - Data 1: [5, 2, 4, 1, 15, 8, 3]
// todo - Data 2: [16, 6, 10, 5, 6, 1, 4]
