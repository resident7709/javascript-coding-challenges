"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
        </article>
        `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

// * 008.Promises and the Fetch API
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch("https://restcountries.com/v2/name/portugal");

// console.log(request);

// * 009.Consuming Promises
// * 010.Chaining Promises
// * 011.Handling Rejected Promises

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, "neighbour"))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong..💥💥💥 ${err.message}. Try again!!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("portugal");
});

getCountryData("dhghddhdd");

// const getCountryAndNeighbour = function (country) {
// * AJAX Call country 1
//   const request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
// * render country 1
//     renderCountry(data);

// * get neighbour country
//     const neighbour = data.borders?.[0];

// const [neighbour] = data.borders;

// if(!neighbour) return;

// * AJAX Call country 2
//     const request2 = new XMLHttpRequest();

//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbour("portugal");
// getCountryAndNeighbour("russia");
// getCountryAndNeighbour("indonesia");

// * 005.Our First AJAX Call: XMLHttpRequest
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);

//     const html = `
//       <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)}</p>
//           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//       </article>
//       `;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("portugal");
// getCountryData("russia");
// getCountryData("indonesia");

// * 007.Callback Hell
// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//     }, 1000);
//   }, 1000);
// }, 1000);
