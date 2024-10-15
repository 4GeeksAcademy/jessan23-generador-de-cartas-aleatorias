/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generatecard() {
  // Arreglos con los palos y los valores de la carta
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

  // Inserta los valores generados en los elementos del DOM
  document.getElementsByClassName("top-suit")[0].textContent = randomSuit;
  document.getElementsByClassName("card-number")[0].textContent = randomValue;
  document.getElementsByClassName("bottom-suit")[0].textContent = randomSuit;

  // Cambia el color de la carta dependiendo del palo
  const cardElement = document.getElementsByClassName("card")[0]; // Accede al primer elemento con clase "card"
  if (randomSuit === "♥" || randomSuit === "♦") {
    cardElement.style.color = "red";
  } else {
    cardElement.style.color = "black";
  }
}

// Llamada a la función para generar la carta al cargar la página
window.onload = generatecard;
