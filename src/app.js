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
    countdownElement.innerHTML = "Now!";
    generateHtmlCard(generateAndCompareRandomValuesForCard());
    countdownValue = 10;
  }
}
//cada segundo llamaremos a la función startCountdown()
setInterval(startCountdown, 1000);
//Esta funcion espera un numero dado, cuando lo recibe devuelve el contenido del array en la posicion dada
function giveResultSymbol(randomSymbol) {
  const symbols = ["HEART", "SPADE", "DIAMOND", "CLUB"];
  return symbols[randomSymbol];
}
//Esta funcion comparara el numero de la carta y devolvera una imagen, si es necesario.
function compareNumberAndGiveImageOrNumber(randomCardValue, randomSymbol) {
  switch (randomCardValue) {
    case 1:
      return `<img src="../src/assets/img/cards/${randomSymbol}_A.png" id="special-card" class="nobility " alt="As of ${randomSymbol}" />`;
    case 11:
      return `<img src="../src/assets/img/cards/JACK_OF_${randomSymbol}.png" id="special-card" class="nobility" alt="Jack of ${randomSymbol}" />`;
    case 12:
      return `<img src="../src/assets/img/cards/QUEEN_OF_${randomSymbol}.png" id="special-card" class="nobility" alt="Queen of ${randomSymbol}" />`;
    case 13:
      return `<img src="../src/assets/img/cards/KING_OF_${randomSymbol}.png" id="special-card" class="nobility" alt="King of ${randomSymbol}" />`;
    default:
      return randomCardValue;
  }
}
//Cabe recalcar que en resultsArray en la posicion 0 guardamos el valor de la carta, en la posición 1 el simbolo.
function generateHtmlCard(resultsArray) {
  if (isNaN(resultsArray[0])) {
    document.querySelector("#card").innerHTML = resultsArray[0];
  } else {
    document.querySelector("#card").innerHTML = `
    <img src="../src/assets/img/${resultsArray[1]}.png" class=" symbol top-left" />
    <div><h1>${resultsArray[0]}</h1></div>
    <img src="../src/assets/img/${resultsArray[1]}.png" class="symbol bottom-right" />
  `;
  }
}
//Esta funcion generará valores aleatorios y los comparará para establecer: El simbolo de la carta y el valor.
function generateAndCompareRandomValuesForCard() {
  const randomSymbol = Math.round(Math.random() * 3);
  //Esto esta de esta manera para evitar el caso del 0
  const randomCardValue = Math.round(Math.random() * 12) + 1;
  let symbolResult = giveResultSymbol(randomSymbol);
  //Si el valor es un 1,11,12,13 devolverá una imagen, caso contrario, un numero.
  let valueResult = compareNumberAndGiveImageOrNumber(
    randomCardValue,
    symbolResult
  );
  return [valueResult, symbolResult];
}
//Esta es la funcion para establecer un ancho y un alto en la carta
function resizeCard() {

  let newHeight = parseInt(document.getElementById("floatingHeight").value);
  let newWidth = parseInt(document.getElementById("floatingWidth").value);
  let card = document.getElementById("card");
  card.style.height = newHeight + "px";
  card.style.width = newWidth + "px";
  //Si en el html se ha creado una imagen con el id "special-card" tambien modificaremos esta imagen.
  let image = document.getElementById("special-card");
  if (image) {
    image.style.width = newWidth + "px";
    image.style.height = newHeight + "px";
  }

}
window.onload = function() {
  generateHtmlCard(generateAndCompareRandomValuesForCard());
};
window.generateCardButtonListener = function generateCardButtonListener() {
  generateHtmlCard(generateAndCompareRandomValuesForCard());
};
window.resizeCardButtonListener = function resizeCardButtonListener() {
  resizeCard();
};
