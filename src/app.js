/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generatecard() {
  const suits = ["♦", "♥", "♠", "♣"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  document.getElementsByClassName("top-suit")[0].textContent = randomSuit;
  document.getElementsByClassName("card-number")[0].textContent = randomValue;
  document.getElementsByClassName("bottom-suit")[0].textContent = randomSuit;

  const cardElement = document.getElementsByClassName("card")[0];
  if (randomSuit === "♥" || randomSuit === "♦") {
    cardElement.style.color = "red";
  } else {
    cardElement.style.color = "black";
  }
}

window.onload = function() {
  generatecard();
  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", generatecard);
  }
};
