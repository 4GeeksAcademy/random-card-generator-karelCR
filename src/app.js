/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let countdownValue = 10;
function startCountdown() {
  // Display the countdown in the specified HTML element
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdownValue;

  // Decrease the countdown value
  countdownValue--;

  // Check if countdown reaches 0
  if (countdownValue < 0) {
    countdownElement.innerHTML = "Ahora!";
    generateCard();
    countdownValue = 10;
  }
}

setInterval(startCountdown, 1000);
function giveResultSymbol(randomSymbol) {
  const symbols = ["HEART", "SPADE", "DIAMOND", "CLUB"];
  return symbols[randomSymbol];
}

function compareCardValueAndGiveImageValue(randomCardValue, randomSymbol) {
  switch (randomCardValue) {
    case 11:
      return `<img src="../src/assets/img/cards/JACK_OF_${randomSymbol}.png" class="nobility" alt="Jack de ${randomSymbol}" />`;
    case 12:
      return `<img src="../src/assets/img/cards/QUEEN_OF_${randomSymbol}.png" class="nobility" alt="Queen de ${randomSymbol}" />`;
    case 13:
      return `<img src="../src/assets/img/cards/KING_OF_${randomSymbol}.png" class="nobility" alt="Rey de ${randomSymbol}" />`;
    default:
      return randomCardValue;
  }
}
function generateCard() {
  const randomSymbol = Math.round(Math.random() * 3);
  const randomCardValue = Math.round(Math.random() * 13);
  let symbolResult = giveResultSymbol(randomSymbol);
  let valueResult = compareCardValueAndGiveImageValue(
    randomCardValue,
    symbolResult
  );
  console.log("Este es el symbolResult: " + symbolResult, randomSymbol);
  if (
    randomCardValue === 11 ||
    randomCardValue === 12 ||
    randomCardValue === 13
  ) {
    document.querySelector("#card").innerHTML = `

    <div><h1>${valueResult}</h1></div>

  `;
  } else {
    document.querySelector("#card").innerHTML = `

    <img
      src="../src/assets/img/${symbolResult}.png"
      class="myClass symbol top-left"
    />

    <div><h1>${valueResult}</h1></div>

    <img
    src="../src/assets/img/${symbolResult}.png"
      class="myClass bottom-right symbol"
    />
  `;
  }
}
window.onload = function() {
  generateCard();
};
window.myEventListener = function myEventListener() {
  generateCard();
};
