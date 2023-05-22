"use strict";

// * 012.DOM Traversing
// const h1 = document.querySelector("h1");

// * Going downwards: children
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = "red";
// h1.lastElementChild.style.color = "yellow";

// * Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// h1.closest("h1").style.background = "var(--gradient-primary)";

// * Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) {
//     el.style.transform = "scale(0.5)";
//   }
// });

// * 011. Event Delegation
// * 009.Event Propagation: Bubbling and Capturing
// * 010...in Practice
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("link", e.target, e.currentTarget);
//   console.log(this === e.currentTarget);

// * stop propagation
//   e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("container", e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("nav", e.target, e.currentTarget);
// });

// * 008.Types of Events & Event Handlers
// const h1 = document.querySelector("h1");

// const clH1 = () => {
//   console.log("hi!!");
// };

// h1.addEventListener("mouseenter", clH1);
// h1.onmouseleave = e => console.log("by!!"); // * old school way
// setTimeout(() => h1.removeEventListener("mouseenter", clH1), 3000);

// * 005.Selecting, Creating, Deleting Elements

// * Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section"); // * NodeList

// document.getElementById("section--1");

// document.getElementsByClassName("btn");
// const allButtons = document.getElementsByTagName("button"); // * HTMLCollection

// console.log(allSections);
// console.log(allButtons);

// * Creating and inserting elements
// insertAdjacentHTML()

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.textContent = "we use cookies..";
// message.innerHTML =
//   "We use cookies for more profitable lifestyle..😃<button class='btn btn--close-cookie'>Got It..</button>";

// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// * Deleting elements
// document.querySelector(".btn--close-cookie").addEventListener("click", () => {
//   message.parentElement.removeChild(message); // * vanilla way
//   message.remove();
// });

// * 006.Styles, Attributes, Classes

// * Styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).height);

// * Attributes
// const logo = document.querySelector(".nav__logo");

// * standard
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = "Cool logo..";

// * non-standard
// console.log(logo.getAttribute("react-dev"));
// console.log(logo.getAttribute("src"));

// logo.setAttribute("tech", "react");

// const link = document.querySelector(".nav__link--btn");

// console.log(link.href);
// console.log(link.getAttribute("href"));

// * data attributes
// console.log(logo.dataset.versionNumber);

// * Classes
// logo.classList.add("_", "---"); // multi values allowed
// logo.classList.remove("_");
// logo.classList.toggle("_");
// logo.classList.contains("_");

// logo.className = "new-class-name"; // !! воздействует на сущесвующие классы..
