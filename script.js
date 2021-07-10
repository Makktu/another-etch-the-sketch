"use strict";

const canvas = document.querySelector(".canvas");

const smallBtn = document.querySelector(".small");
smallBtn.addEventListener("click", () => {
    console.log("small");
});

const mediumBtn = document.querySelector(".medium");
mediumBtn.addEventListener("click", () => {
    console.log("medium");
});

const largeBtn = document.querySelector(".large");
largeBtn.addEventListener("click", () => {
    console.log("large");
});

const xlargeBtn = document.querySelector(".x-large");
xlargeBtn.addEventListener("click", () => {
    console.log("x-large");
});
