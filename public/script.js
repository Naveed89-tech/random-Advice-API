"use strict";
const diceBtn = document.querySelector(".dice");
const quoteEle = document.querySelector(".quote");
const quoteNumber = document.querySelector(".number");

diceBtn.addEventListener("click", generateQuote);
async function generateQuote() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://api.adviceslip.com/advice", config);
  const data = await res.json();

  quoteEle.innerHTML = data.slip.advice;
  quoteNumber.innerHTML = data.slip.id;
}
