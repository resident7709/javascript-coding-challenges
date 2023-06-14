// * 005.EXPORT & IMPORT (ES6 Modules)

// * Importing module
// import { addToCart, totalPrice as price, qty } from "./shoppingCart.js";
// addToCart("bread", 5);

// console.log(price, qty);
console.log("Importing module");

// import * as ShoppingCart from "./shoppingCart.js";

// ShoppingCart.addToCart("almond milk", 1);

// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, qty } from "./shoppingCart.js";
// console.log(price);

import add, { cart } from "./shoppingCart.js";

// add("pizza", 2);
// add("milk", 5);
// add("cheese", 3);

// console.log(cart);

// * 006.Top-Level await(ES2022)
// console.log("start fetching");

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();

// console.log(data);
// console.log("something else");

// const getLastPost = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();

// console.log(lastPost);

// lastPost.then(last => console.log(last)); // * not very clean

// const lastPost2 = await getLastPost();

// console.log(lastPost2);

// * 007.The Module Pattern
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totlaPrice = 237;
//   const totlaQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totlaPrice,
//     totlaQuantity,
//   };
// })();

// ShoppingCart2.addToCart("Adrenaline", 1);
// ShoppingCart2.addToCart("pizza", 3);

// console.log(ShoppingCart2);

// * 008.CommonJS Modules
// * export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost ${shippingCost})`
//     );
//   }; // * for node.js

// * import
// const { addToCart } = require("./shoppingCart.js");

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    { product: "meat", quantity: 5 },
    { product: "pizza", quantity: 15 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);

console.log(stateDeepClone);
