"use strict";

// * 006.Styles, Attributes, Classes

// * 005.Selecting, Creating, Deleting Elements

// * Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section"); // * NodeList

document.getElementById("section--1");

document.getElementsByClassName("btn");
const allButtons = document.getElementsByTagName("button"); // * HTMLCollection

// console.log(allSections);
// console.log(allButtons);

// * Creating and inserting elements
// insertAdjacentHTML()

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "we use cookies..";
message.innerHTML =
  "We use cookies for more profitable lifestyle..😃<button class='btn btn--close-cookie'>Got It..</button>";

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
header.after(message);

// * Deleting elements
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  //   message.parentElement.removeChild(message); // * vanilla way
  message.remove();
});
