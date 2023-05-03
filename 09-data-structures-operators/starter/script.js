"use strict";

// * Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// * Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterInd, mainInd) {
    return [this.starterMenu[starterInd], this.mainMenu[mainInd]];
  },

  orderDelivery: function ({
    starterInd = 1,
    mainInd = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterInd]} and ${this.mainMenu[mainInd]} will be delivered to ${address}
      at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngr, ...otherIngrs) {
    console.log(mainIngr);
    console.log(otherIngrs);
  },
};

// * Modern Operators

// * Nullish Coalescing Operator (??)
console.log("--- ?? NCO ---");

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// * Nullish: null and undefined (NOT 0 or "")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// * use ANY data type, return ANY data type, short-circuiting
console.log("--- || OR ---"); // ! takes first truthy value or last value if all of them falthy, looks for truthy..
// console.log(3 || "jonas");
// console.log("" || "jonas");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 123;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

console.log("--- && AND ---"); // ! takes first falthy value or last value if all of them truthy, looks for falthy..
// console.log(0 && "String");
// console.log(7 && "String");
// console.log("string" && 723 && null && "String");

// * practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("cheese", "garlic");

// * Rest Pattern
// restaurant.orderPizza("mushrooms", "onion", "spinach", "olives");
// restaurant.orderPizza("cheese");

// const arr = [1, 2, ...[3, 4]]; // ! SPREAD - on right side of = operator
// const [a, b, ...others] = [1, 2, 3, 4, 5]; // ! REST - on left side of = operator

// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// * Rest with Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// * Rest with Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 7, 8, 9);
// add(5, 2, 3, 4, 1, 7, 8, 9);

// const x = [23, 5, 7];

// add(...x);

// * Spread Operator
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const arr = [7, 8, 9];
// const arrSpread = [1, 2, ...arr];

// console.log(arrSpread);
// console.log(...arrSpread);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// * (...) with Objects
// const newRestaurant = {
//   foundedIn: 1987,
//   ...restaurant,
//   founder: "Giuseppe Mondolini",
// };

// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Viva Roma!!";

// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// * copying array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// * joining arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// * Iterables: arrays, strings, maps, sets..but NOT objects!
// const str = "Jonas";
// const letters = [...str, " ", "S."];
// console.log(letters);
// console.log(...str);

// * Destructuring Objects

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainInd: 2,
//   starterInd: 2,
// });
// restaurant.orderDelivery({
//   time: "22:30", // * default value
//   address: "Via del Sole, 21",
//   mainInd: 2, // * default value
//   starterInd: 3,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// * default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// * mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 9, b: 8, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// * nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// * Destructuring Arrays

// * default values
// let [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// * nested destructuring
// const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// * recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

// * switching variables
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);
