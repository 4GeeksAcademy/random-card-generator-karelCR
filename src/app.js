/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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
        return "Jack of hearts";
      case 2:
        return "Jack of spades";
      case 3:
        return "Jack of diamonds";
      case 4:
        return "Jack of clubs";
    }
  }

  function giveQueenSymbol(randomSymbol) {
    switch (randomSymbol) {
      case 1:
        return '<img src="../src/assets/img/queen-hearts-card.png" class="nobility" alt="Reina de corazones" />';
      case 2:
        return "Queen of spades";
      case 3:
        return "Queen of diamonds";
      case 4:
        return "Queen of clubs";
    }
  }

  function giveKingSymbol(randomSymbol) {
    switch (randomSymbol) {
      case 1:
        return "King of hearts";
      case 2:
        return "King of spades";
      case 3:
        return "King of diamonds";
      case 4:
        return "King of clubs";
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
};
