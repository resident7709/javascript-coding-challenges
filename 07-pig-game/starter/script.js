"use strict";

// * State vars
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// * Starting conditions
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// * Btn - ROLL DICE
btnRoll.addEventListener("click", () => {
  if (playing) {
    // todo: generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // todo: display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // todo: check for rolled 1, if true, switch to the next player
    if (dice !== 1) {
      // * add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // * switch to next player
      switchPlayer();
    }
  }
});

// * Btn - HOLD
btnHold.addEventListener("click", () => {
  if (playing) {
    // todo: add current score to active's player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // todo: check if player's score >= 100
    if (scores[activePlayer] >= 100) {
      // todo: finish the game
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // todo: switch to the next player
      switchPlayer();
    }
  }
});

// * Btn - NEW GAME
btnNew.addEventListener("click", init);
