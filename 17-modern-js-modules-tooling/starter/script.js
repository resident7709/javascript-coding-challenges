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

add("pizza", 2);
add("bananas", 5);
add("apples", 3);

console.log(cart);
