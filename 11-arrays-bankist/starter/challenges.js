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

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// todo: Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// todo: 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// todo: 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// todo: 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages)
// todo: 4. Run the function for both test datasets

// todo: Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

// todo - Test data:
// todo - Data 1: [5, 2, 4, 1, 15, 8, 3]
// todo - Data 2: [16, 6, 10, 5, 6, 1, 4]

// * CHALLENGE#4

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// todo: 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// * The Math.trunc() static method returns the integer part of a number by removing any fractional digits
console.log("1. =============================");

dogs.forEach(dog => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28); // * add new object property
});

console.log(dogs);

// todo:2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose)
console.log("2. =============================");

const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));

console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much!!" : "little!!"
  }`
);

// todo: 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
console.log("3. =============================");

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// todo: 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log("4. =============================");

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// todo: 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
console.log("5. =============================");

console.log(dogs.some(dog => dog.recFood === dog.curFood));

// todo: 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
console.log("6. =============================");

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// todo: 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
console.log("7. =============================");

console.log(dogs.filter(checkEatingOkay));

// todo: 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
console.log("8. =============================");
const dogsSortedCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(dogsSortedCopy);
