// * CHALLENGE#1
const array1 = [17, 21, 23];
const array2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = ""; // * arr to string!!

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log("... " + str);
}

printForecast(array1);
printForecast(array2);
