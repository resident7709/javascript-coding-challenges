"use strict";

// * Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// * WORKING WITH STRINGS
const airline = "TAP Air Portugal";
const plane = "A320";

// console.log(plane[0]);
// console.log("B737"[0]);
// console.log(airline.length);
// console.log("B737".length);
// * Methods
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// * Fix Capitalization
// const passenger = "jOnAS"; // * => Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

const checkPassenger = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};

checkPassenger("jONAS");

// * User email check

// console.log(airline.indexOf("r"));
// console.log(airline.indexOf("Portugal"));
// console.log(airline.lastIndexOf("r"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.indexOf(" ") + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -2));

// const checkMiddleSeat = function (seat) {
// * B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the middle seat..");
//   else console.log("You got lucky!!");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// * Boxing..
// console.log(new String("Lola"));
// console.log(typeof new String("Lola"));
// console.log(typeof new String("Lola").slice(1));

// * Data needed for first part of the section
// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openingHours = {
// * ES6 Enhanced Object Literals
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 12 + 12,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
// * ES6 Enhanced Object Literals
//   openingHours,
// * ES6 Enhanced Object Literals, no function word needed..
//   order(starterInd, mainInd) {
//     return [this.starterMenu[starterInd], this.mainMenu[mainInd]];
//   },

//   orderDelivery({ starterInd = 1, mainInd = 0, time = "20:00", address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterInd]} and ${this.mainMenu[mainInd]} will be delivered to ${address}
//       at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza(mainIngr, ...otherIngrs) {
//     console.log(mainIngr);
//     console.log(otherIngrs);
//   },
// };

// * MAPS Iteration
// const question = new Map([
//   ["question", "..best progLanguage in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript!!"],
//   ["correct answer", 3],
//   [true, "Correct!!"],
//   [false, "Not correct.."],
// ]);

// console.log(question);

// * Convert Object to Map
// console.log(Object.entries(openingHours));

// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// * Quiz app
// console.log(question.get("question"));

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }

// const answer = +prompt("Your answer");

// console.log(question.get(question.get("correct answer") === answer));
// * так тоже работает..
// answer === 3
// ? console.log(question.get(true))
// : console.log(question.get(false));

// * Convert Map into Array
// console.log([...question]);
// console.log(question.entries()); // MapIterator
// console.log([...question.keys()]);
// console.log(question.values()); // MapIterator

// * MAPS
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are closed");

// rest.delete(2);
// rest.clear();
// const arr = [1, 2]; // ! because reference type..
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest.get(arr));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest);
// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// console.log(rest.has("categories"));
// console.log(rest.size);

// * SETS
// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);

// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// ordersSet.clear();

// for (const order of ordersSet) console.log(order);

// console.log(ordersSet);
// console.log(new Set("Lola"));
// console.log(new Set());
// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));

// * Set example
// const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(["waiter", "chef", "waiter", "manager", "chef", "waiter"]).size
// );
// console.log(new Set("Lola").size);

// * Looping Objects

// * Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// * Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// * Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we are open at ${open} and close at ${close}`);
// }

// * Optional Chaining Operator
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// * WITH optional chaining operator
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On day ${day} = ${open}`);
// }

// * Methods optional chaining operator + nullish coalescing operator
// console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist!");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist!");

// * Arrays optional chaining
// const users = [{ name: "John", email: "hello@john.com" }];
// console.log(users[0]?.name ?? "User array empty..");

// * for of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (let i = 0; i < menu.length; i++) {
//   console.log("for:", menu[i]);
// }

// for (const item of menu) console.log("for of:", item);
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// console.log(menu.entries());

// * Modern Operators

// * Logical Assignment Operators
// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Paolo Rossi",
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// * OR Assignment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// * Nullish Assignment Operator (null or undefined)
// rest1.numGuests ??= 10; // ! 0 - truthy
// rest2.numGuests ??= 10; // ! undefined - falthy
// * AND Assignment Operator
// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);

// * Nullish Coalescing Operator (??)
// console.log("--- ?? NCO ---");

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// * Nullish: null and undefined (NOT 0 or "")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// * use ANY data type, return ANY data type, short-circuiting
// console.log("--- || OR ---"); // ! takes first truthy value or last value if all of them falthy, looks for truthy..
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

// console.log("--- && AND ---"); // ! takes first falthy value or last value if all of them truthy, looks for falthy..
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
