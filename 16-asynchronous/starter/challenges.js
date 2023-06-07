"use strict";

// * CHALLENGE#2
// const imgContainer = document.querySelector(".images");

// const wait = secs => new Promise(resolve => setTimeout(resolve, secs * 1000));

// const createImage = imgPath => {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement("img");
//     img.src = imgPath;

//     img.addEventListener("load", () => {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener("error", () => reject(new Error("Image not found!!")));
//   });
// };

// let currentImg;

// createImage("./img/img-1.jpg")
//   .then(img => {
//     currentImg = img;
//     console.log("Image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("./img/img-2.jpg");
//   })
//   .then(img => {
//     currentImg = img;
//     console.log("Image 2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch(err => console.error(err));

// * CHALLENGE#1
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
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

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// * Test data:
// * Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// * Coordinates 2: 19.037, 72.873
// * Coordinates 3: -33.933, 18.474
