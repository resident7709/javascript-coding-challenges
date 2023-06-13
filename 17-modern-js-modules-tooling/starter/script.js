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

const getLastPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();

console.log(lastPost);

// lastPost.then(last => console.log(last)); // * not very clean

const lastPost2 = await getLastPost();

console.log(lastPost2);
