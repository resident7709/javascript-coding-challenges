"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

// * Modal Window
const openModal = e => {
  e.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// * Button Scrolling
btnScrollTo.addEventListener("click", () => {
  section1.scrollIntoView({ behavior: "smooth" });
});

// * Page Navigation (Event Delegation)
// todo: 1.addEventListener to common parent element
// todo: 2.determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", e => {
  e.preventDefault();
  // * Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// * Tabbed Component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// * Event Delegation
tabsContainer.addEventListener("click", e => {
  // * Matching strategy
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return; // * guard clause

  // * Remove active classes
  tabs.forEach(tb => tb.classList.remove("operations__tab--active"));
  tabsContent.forEach(c => c.classList.remove("operations__content--active"));

  // * Active tab
  clicked.classList.add("operations__tab--active"); // for parent element

  // * activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// * ============================================== * //
// * Tabbed Component
// tabs.forEach(tb => tb.addEventListener("click", () => console.log("tab")));

// * Page Navigation
// document.querySelectorAll(".nav__link").forEach(el => {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// * 007.
// const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);

// console.log(e.target.getBoundingClientRect());

// console.log("Current scroll (X/Y):", window.pageXOffset, window.pageYOffset);
// console.log(
//   "height/width viewport:",
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );
// * scrolling = current position + current scroll
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: "smooth",
// });
