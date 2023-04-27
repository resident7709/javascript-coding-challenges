// * Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [3, -2, -6, -1, 3, "error", 9, 13, 17, 15, 14, 9, 5];

const amplitutde = calcTempAmplitude(temperatures);

function calcTempAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
}

console.log(amplitutde);

// * merging two arrays

// const amplitutdeNew = calcTempAmplitudeNew([2, 4, 6], [8, 9, 5]);

// function calcTempAmplitudeNew(temps1, temps2) {
//   const temps = temps1.concat(temps2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//     console.log(min, max);
//   return max - min;
// }

// console.log(amplitutdeNew);

function measureKelvin() {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: +prompt("Degrees celcius:"),
    value: 10,
  };

  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
}

console.log(measureKelvin());

// * using a debugger

function calcTempAmplitudeBug(temps1, temps2) {
  const temps = temps1.concat(temps2);

  //   let max = 0; // ! bugged
  //   let min = 0; // ! bugged

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
}

const amplitutdeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// ! identify a bug
console.log(amplitutdeBug);
