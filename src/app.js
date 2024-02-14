/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let countdownValue = 10;
function startCountdown() {
  // Esto mostrara el numero en el html
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdownValue;

  // eliminamos un numero
  countdownValue--;

  // Check if countdown reaches 0
  if (countdownValue < 0) {
    countdownElement.innerHTML = "Ahora!";
    let resultsArray = generateAndCompareRandomValuesForCard();
    generateHtmlCard(resultsArray);
    countdownValue = 10;
  }
}

setInterval(startCountdown, 1000);

function giveResultSymbol(randomSymbol) {
  const symbols = ["HEART", "SPADE", "DIAMOND", "CLUB"];
  return symbols[randomSymbol];
}

function compareNumberAndGiveImage(randomCardValue, randomSymbol) {
  switch (randomCardValue) {
    case 1:
      return `<img src="../src/assets/img/cards/${randomSymbol}_A.png" class="nobility" alt="As of ${randomSymbol}" />`;
    case 11:
      return `<img src="../src/assets/img/cards/JACK_OF_${randomSymbol}.png" class="nobility" alt="Jack of ${randomSymbol}" />`;
    case 12:
      return `<img src="../src/assets/img/cards/QUEEN_OF_${randomSymbol}.png" class="nobility" alt="Queen of ${randomSymbol}" />`;
    case 13:
      return `<img src="../src/assets/img/cards/KING_OF_${randomSymbol}.png" class="nobility" alt="King of ${randomSymbol}" />`;
    default:
      return randomCardValue;
  }
}
//Cabe recalcar que en resultsArray guardamos en la posicion 0  el valor de la carta, en la posición 1 el simbolo.
function generateHtmlCard(resultsArray) {
  if (isNaN(resultsArray[0])) {
    document.querySelector("#card").innerHTML = `

    <div>${resultsArray[0]}</div>

  `;
  } else {
    document.querySelector("#card").innerHTML = `

    <img
      src="../src/assets/img/${resultsArray[1]}.png"
      class=" symbol top-left"
    />

    <div><h1>${resultsArray[0]}</h1></div>

    <img
    src="../src/assets/img/${resultsArray[1]}.png"
      class="symbol bottom-right"
    />
  `;
  }
}

//Esta funcion generará valores aleatorios y los comparará para establecer: El simbolo de la carta y el valor.
function generateAndCompareRandomValuesForCard() {
  const randomSymbol = Math.round(Math.random() * 3);
  const randomCardValue = Math.round(Math.random() * 12) + 1;
  let symbolResult = giveResultSymbol(randomSymbol);
  //Si el valor es un 1,11,12,13 devolverá una imagen, caso contrario, un numero.
  let valueResult = compareNumberAndGiveImage(randomCardValue, symbolResult);
  return [valueResult, symbolResult];
}

window.onload = function() {
  //Definimos un array, en el resultado del array llamamos a la funcion que generara valores aleatorios de una carta
  const resultsArray = generateAndCompareRandomValuesForCard();
  //llamamos a la funcion que creara una carta nueva usando el DOM
  generateHtmlCard(resultsArray);
};
window.myEventListener = function myEventListener() {
  const resultsArray = generateAndCompareRandomValuesForCard();
  generateHtmlCard(resultsArray);
};
