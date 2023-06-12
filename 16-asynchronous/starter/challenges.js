"use strict";

// * CHALLENGE#2
const imgContainer = document.querySelector(".images");

const wait = secs => new Promise(resolve => setTimeout(resolve, secs * 1000));

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", () => reject(new Error("Image not found!!")));
  });
};

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

// *CHALLENGE#3
// * Part 1
const loadNPause = async () => {
  try {
    // Load image 1
    let img = await createImage("./img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";

    // Load image 2
    img = await createImage("./img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};

loadNPause();

// * Part 2

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

// * ICE CREAM STORE Example
const stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// * Callbacks
// const order = (fruit_name, call_production) => {
//   setTimeout(function () {
//     console.log(`${stocks.fruits[fruit_name]} was selected 🍓`);

//     call_production();
//   }, 2000);
// };

// const production = () => {
//   setTimeout(() => {
//     console.log("production has been started 🕒");
//     setTimeout(() => {
//       console.log("fruits has been chopped 🥝");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added ❄`);
//         setTimeout(() => {
//           console.log("start the machine ♨");
//           setTimeout(() => {
//             console.log(`ice cream placed on ${stocks.holder[1]} 🧁`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} as toppings 🍥`);
//               setTimeout(() => {
//                 console.log("serve ice cream 🍧");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order(0, production);

// * Promises
// let is_shop_open = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
//   .then(() => {
//     return (
//       order(0, () => console.log("production has been started"))
//         // step 3
//         .then(() => {
//           return order(2000, () => console.log("fruits has been chopped"));
//         })
//         // step 4
//         .then(() => {
//           return order(1000, () =>
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//           );
//         })
//         // step 5
//         .then(() => {
//           return order(1000, () => console.log("start the machine"));
//         })
//         // step 6
//         .then(() => {
//           return order(2000, () =>
//             console.log(`ice cream placed on ${stocks.holder[1]}`)
//           );
//         })
//         // step 7
//         .then(() => {
//           return order(3000, () =>
//             console.log(`${stocks.toppings[0]} as toppings`)
//           );
//         })
//         // Step 8
//         .then(() => {
//           return order(2000, () => console.log("serve ice cream"));
//         })
//     );
//   })
//   .catch(() => {
//     console.log("customer left");
//   })
//   .finally(() => {
//     console.log("end of the day");
//   });

// * Async/Await
// function toppings_choice() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping would you love?"));
//     }, 3000);
//   });
// }

// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");

//   await toppings_choice();

//   console.log("D");
//   console.log("E");
// }

// kitchen();

// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking orders");

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected`);

    await time(0);
    console.log("production has been started");

    await time(2000);
    console.log("fruits has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log("serve ice cream");
  } catch (error) {
    console.error("customer left..", new Error());
  } finally {
    console.log("..day ended, shop closed");
  }
}

// kitchen();
