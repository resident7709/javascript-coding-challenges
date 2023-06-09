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
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong..") {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// * 019.Consuming Promises with Async/Await
// * 020.try...catch
// * 021.Returning Values from Async Functions

// const getPosition = () =>
//   new Promise((resolve, reject) =>
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   );

// fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
//   console.log(res)
// );

// const whereAmI = async () => {
//   try {
// * Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

// * Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error("Some problem getting location data..");
//     const dataGeo = await resGeo.json();

// * Country data
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error("Some problem getting country..");
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You're in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);

// * reject promise
//     throw err;
//   }
// };

// console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log("3: Finished getting location"));

// * Immediately Invoked Function
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log("3: Finished getting location");
// })();

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   console.error(err.message);
// }

// * 021.Running Promises in Parallel
// const get3Countries = async function (c1, c2, c3) {
//   try {
// const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
// const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
// const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

// console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries("portugal", "russia", "china");

// * 023.Other Promise Combinators: race, allSettled, any
// * Promice.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/russia`),
    getJSON(`https://restcountries.com/v2/name/usa`),
  ]);
  console.log(res[0]);
})();

const timeout = sec => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request took too long!!"));
    }, sec * 1000);
  });
};

// * Promise.race
Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// * Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Success"),
]).then(res => console.log(res));

// * Promise.all
Promise.all([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Success"),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// * Promise.any [ES2021]
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Success"),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// * 016.Building a Simple Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Draw started..🔮");
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN!!🤩");
//     } else {
//       reject(new Error("Oops..🤭"));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// * Promisifying..
// const wait = secs => new Promise(resolve => setTimeout(resolve, secs * 1000));

// wait(2)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 seconds passed");
//     return wait(1);
//   })
//   .then(() => console.log("plus 1 more second.."));

// Promise.resolve("abc").then(x => console.log(x));
// Promise.reject(new Error("Error!!")).catch(x => console.error(x));

// * ====================================== * //

// const getPosition = () =>
//   new Promise((resolve, reject) =>
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   );

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Some problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}.`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(`${err.message} 💥`);
//     });
// };

// btn.addEventListener("click", whereAmI);

// * 015.Event Loop in Practice
// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved promise 1").then(res => console.log(res));
// Promise.resolve("Resolved promise 2").then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log("Test end");

// * 008.Promises and the Fetch API
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch("https://restcountries.com/v2/name/portugal");

// console.log(request);

// * 009.Consuming Promises
// * 010.Chaining Promises
// * 011.Handling Rejected Promises
// * 012.Throwing Errors Manually

// const getJSON = function (url, errorMsg = "Something went wrong..") {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found..(${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

// const neighbour = data[0].borders?.[0];
//       const neighbour = "fggghjkjk";

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found..(${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, "neighbour"))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong..💥💥💥 ${err.message}. Try again!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found..")
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error("No neighbour found!!");

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         "Country not found.."
//       );
//     })
//     .then(data => renderCountry(data, "neighbour"))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong..💥💥💥 ${err.message}. Try again!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", () => getCountryData("portugal"));

// getCountryData("australia");

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

// * 007.Callbacks
// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//     }, 1000);
//   }, 1000);
// }, 1000);
