"use strict";

// * CHALLENGE#4

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// * CHALLENGE#3
// todo: 1. Create an array 'events' of the different game events that happened (no duplicates)
// console.log("1. ==============================");
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// todo: 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// console.log("2. ==============================");
// gameEvents.delete(64);
// console.log(gameEvents);

// todo: 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log("3. =============================="); // ?
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${(time / gameEvents.size).toFixed(
//     2
//   )} minutes`
// );

// todo: 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL
// console.log("4. ==============================");
// ! Destructuring Again !
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// * CHALLENGE#2
// todo: 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// console.log("1. ==============================");
// * just for loop..
// for (let i = 0; i < game.scored.length; i++)
//   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// * for of..destructuring..
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// todo: 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// console.log("2. ==============================");
// const values = Object.values(game.odds);

// * Arrow function
// const getAverage = num => {
//   let sum = 0;
//   for (let i = 0; i < values.length; i++) {
//     sum += num[i] / num.length;
//   }
//   return +sum.toFixed(2);
// };

// console.log(getAverage(values));

// * for of..
// let sum = 0;
// for (const odd of values) sum += odd / values.length;

// console.log(+sum.toFixed(2));

// todo: 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25 Odd of victory Borrussia Dortmund: 6.5 Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names
// console.log("3. ==============================");
// * for of..destructuring..ternary operator..
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `${game[team]}`;

//   console.log(`Odd of victory ${teamStr}: ${odd}`);
// }

// todo: 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this: { Gnarby: 1, Hummels: 1, Lewandowski: 2 }
// console.log("BONUS. ==========================");
// const scorers = {};

// for (const player of game.scored)
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);

// console.log(scorers);

// * CHALLENGE#1
// todo: 1.Create one player array for each team (variables 'players1' and 'players2')..
// const [players1, players2] = game.players;
// console.log(players1, players2);

// todo: 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players..
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// todo: 3. Create an array 'allPlayers' containing all players of both teams (22 players)..
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// todo: 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'..
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// todo: 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// let {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// todo: 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// todo: Test data for 6 = First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.Then, call the function again with players from game.scored
// function printGoals(...players) {
//   console.log(`${players.length} goals were scored by ${players}`);
// }

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");
// printGoals(...game.scored); // ! Just Spread Operator !

// todo: 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// team1 < team2 && console.log("Bayern Munich is more likely to win!!");
// team1 > draw && console.log("Borussia Dortmund is more likely to win!!");
