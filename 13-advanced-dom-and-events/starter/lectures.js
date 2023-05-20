"use strict";

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

// * 006.Styles, Attributes, Classes

// * Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).height);

// * Attributes
const logo = document.querySelector(".nav__logo");

// * standard
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

logo.alt = "Cool logo..";

// * non-standard
// console.log(logo.getAttribute("react-dev"));
// console.log(logo.getAttribute("src"));

logo.setAttribute("tech", "react");

const link = document.querySelector(".nav__link--btn");

// console.log(link.href);
// console.log(link.getAttribute("href"));

// * data attributes
// console.log(logo.dataset.versionNumber);

// * Classes
logo.classList.add("_", "---"); // multi values allowed
logo.classList.remove("_");
logo.classList.toggle("_");
logo.classList.contains("_");

logo.className = "new-class-name"; // !! воздействует на сущесвующие классы..
