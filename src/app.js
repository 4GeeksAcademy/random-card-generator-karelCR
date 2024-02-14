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

  // Si es 0 entonces llamamos a las funciones para generar una nueva carta
  if (countdownValue < 0) {
    countdownElement.innerHTML = "Ahora!";
    generateHtmlCard(generateAndCompareRandomValuesForCard());
    countdownValue = 10;
  }
}

setInterval(startCountdown, 1000);

function giveResultSymbol(randomSymbol) {
  const symbols = ["HEART", "SPADE", "DIAMOND", "CLUB"];
  return symbols[randomSymbol];
}

function compareNumberAndGiveImageOrNumber(randomCardValue, randomSymbol) {
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
  let valueResult = compareNumberAndGiveImageOrNumber(
    randomCardValue,
    symbolResult
  );
  return [valueResult, symbolResult];
}

function resizeCard() {
  // Get the input values
  var newHeight = parseInt(document.getElementById("floatingHeight").value);
  var newWidth = parseInt(document.getElementById("floatingWidth").value);

  // Get the image element
  var image = document.getElementById("card");

  // Set the new height and width
  image.style.height = newHeight + "px";
  image.style.width = newWidth + "px";
}

window.onload = function() {
  generateHtmlCard(generateAndCompareRandomValuesForCard());
};
window.myEventListener = function myEventListener() {
  generateHtmlCard(generateAndCompareRandomValuesForCard());
};
window.myEventListener2 = function myEventListener2() {
  resizeCard();
};
