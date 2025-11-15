"use strict";

let currentPosition = 0;
const card = document.querySelector(".services__card");
const continer = document.querySelector(".services__card-container");
const leftScrollButton = document.getElementById("left-scroll-button");
const rightScrollBbutton = document.getElementById("right-scroll-button");

leftScrollButton.addEventListener("click", () => {
  continer.scrollBy({
    top: 0,
    left: currentPosition - card.clientWidth - 40,
    behavior: "smooth",
  });
});

rightScrollBbutton.addEventListener("click", () => {
  continer.scrollBy({
    top: 0,
    left: currentPosition + card.clientWidth + 40,
    behavior: "smooth",
  });
});

//Хотя нет, путь хардкод живёт

let currentPosition1 = 0;
const el = document.getElementById("main-container");
const leftScrollButton1 = document.getElementById("left-scroll-button1");
const rightScrollBbutton2 = document.getElementById("right-scroll-button2");

leftScrollButton1.addEventListener("click", () => {
  el.scrollBy({
    top: 0,
    left: currentPosition1 - el.clientWidth,
    behavior: "smooth",
  });
});

rightScrollBbutton2.addEventListener("click", () => {
  el.scrollBy({
    top: 0,
    left: currentPosition1 + el.clientWidth,
    behavior: "smooth",
  });
});

const telLink = document.querySelector(".discussion__link");
const telButton = document.querySelector(".discussion__button");
telButton.addEventListener("click", () => {
  telLink.click();
});

const contactsButtons = document.querySelectorAll(".contacts__card-button");

contactsButtons.forEach((el, i) => {
  el.addEventListener("click", () => {
    document.querySelectorAll(".contacts__card-link")[i].click();
  });
});
