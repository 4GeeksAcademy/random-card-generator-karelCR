/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function generateCard() {
  function giveResultSymbol(randomSymbol) {
    switch (randomSymbol) {
      case 1:
        return HEART;
      case 2:
        return SPADE;
      case 3:
        return DIAMOND;
      case 4:
        return CLUB;
    }
  }
  function giveResultValue(randomCardValue, randomSymbol) {
    switch (randomCardValue) {
      case 11:
        return giveJackSymbol(randomSymbol);
      case 12:
        return giveQueenSymbol(randomSymbol);
      case 13:
        return giveKingSymbol(randomSymbol);
      default:
        return randomCardValue;
    }
  }

  function giveJackSymbol(randomSymbol) {
    switch (randomSymbol) {
      case 1:
        return '<img src="../src/assets/img/cards/JACK_OF_HEARTS.png" class="nobility" alt="Caballero de corazones" />';
      case 2:
        return '<img src="../src/assets/img/cards/JACK_OF_SPADES.png" class="nobility" alt="Caballero de corazones" />';
      case 3:
        return '<img src="../src/assets/img/cards/JACK_OF_DIAMONDS.png" class="nobility" alt="Caballero de corazones" />';
      case 4:
        return '<img src="../src/assets/img/cards/JACK_OF_CLUBS.png" class="nobility" alt="Caballero de corazones" />';
    }
  }

  function giveQueenSymbol(randomSymbol) {
    switch (randomSymbol) {
      case 1:
        return '<img src="../src/assets/img/cards/QUEEN_OF_HEARTS.png" class="nobility" alt="Reina de corazones" />';
      case 2:
        return '<img src="../src/assets/img/cards/QUEEN_OF_SPADES.png" class="nobility" alt="Reina de espadas" />';
      case 3:
        return '<img src="../src/assets/img/cards/QUEEN_OF_DIAMONDS.png" class="nobility" alt="Reina de diamantes" />';
      case 4:
        return '<img src="../src/assets/img/cards/QUEEN_OF_CLUBS.png" class="nobility" alt="Reina de treboles" />';
    }
  }

  function giveKingSymbol(randomSymbol) {
    switch (randomSymbol) {
      case 1:
        return '<img src="../src/assets/img/cards/KING_OF_HEARTS.png" class="nobility" alt="Rey de corazones" />';
      case 2:
        return '<img src="../src/assets/img/cards/KING_OF_SPADES.png" class="nobility" alt="Rey de corazones" />';
      case 3:
        return '<img src="../src/assets/img/cards/KING_OF_DIAMONDS.png" class="nobility" alt="Rey de corazones" />';
      case 4:
        return '<img src="../src/assets/img/cards/KING_OF_CLUBS.png" class="nobility" alt="Rey de corazones" />';
    }
  }

  const randomSymbol = Math.round(Math.random() * 3) + 1;
  const randomCardValue = Math.round(Math.random() * 11) + 2;
  const HEART = "../src/assets/img/heart.png";
  const SPADE = "../src/assets/img/spade.png";
  const DIAMOND = "../src/assets/img/diamond.png";
  const CLUB = "../src/assets/img/club.png";
  let symbolResult = giveResultSymbol(randomSymbol);
  let valueResult = giveResultValue(randomCardValue, randomSymbol);

  document.querySelector("#card").innerHTML = `

      <img
        src="${symbolResult}"
        class="symbol top-left"
      />

      <div><h1>${valueResult}</h1></div>

      <img
        src="${symbolResult}"
        class="bottom-right symbol"
      />
    
`;
}
window.onload = function() {
  generateCard();
};
window.myEventListener = function myEventListener() {
  generateCard();
};
