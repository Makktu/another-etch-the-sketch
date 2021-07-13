"use strict";

function whiteGrid() {
    for (let k = 0; k < gridSize; k++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add(`grid-off`);
            addRemoveLines(div);

            canvas.replaceChild(div, div);
        }
    }
}

function showMessages() {
    brushToggle === 1 ? (togStatus = "ON") : (togStatus = "OFF");
    brushColor !== "white"
        ? (messageSpace.innerText = `Brush: ${togStatus} / ${brushColor}`)
        : (messageSpace.innerText = `Brush: ${togStatus} / ERASER`);
}

const addRemoveLines = (div) => {
    gridLinesToggle === 1
        ? div.classList.add(`grid-lines`)
        : div.classList.remove(`grid-lines`);
};

const makeGrid = () => {
    canvas.innerHTML = "";

    for (let k = 0; k < gridSize; k++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add(`grid-square-${gridSize}`);
            addRemoveLines(div);
            div.addEventListener("mouseover", fillOrDelete);
            canvas.appendChild(div);
        }
    }
};

function fillOrDelete() {
    brushToggle === 1
        ? (this.style.backgroundColor = `${brushColor}`)
        : (this.style.backgroundColor = this.style.backgroundColor);
}

// * *************************************|
// * INITIALISE ALL VARIABLES AND CONTROLS|
// * *************************************|

let gridSize = 32; // ? sets initial grid size to medium (32x32 squares)

let brushToggle = 0; // ? start with brush OFF

let brushColor = "black";

let gridLinesToggle = 1;

let togStatus = "ON";

const messageSpace = document.querySelector(".messages");

const canvas = document.querySelector(".canvas");
canvas.addEventListener("click", () => {
    brushToggle === 0 ? (brushToggle = 1) : (brushToggle = 0);
    showMessages();
});

const smallBtn = document.querySelector(".small");
smallBtn.addEventListener("click", () => {
    gridSize = 16;
    makeGrid();
});

const mediumBtn = document.querySelector(".medium");
mediumBtn.addEventListener("click", () => {
    gridSize = 32;
    makeGrid();
});

const largeBtn = document.querySelector(".large");
largeBtn.addEventListener("click", () => {
    gridSize = 64;
    makeGrid();
});

const xlargeBtn = document.querySelector(".x-large");
xlargeBtn.addEventListener("click", () => {
    gridSize = 128;
    makeGrid();
});

const gridOff = document.querySelector(".grid-off");
gridOff.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "green";
    gridOn.style.backgroundColor = "black";
    gridLinesToggle = 0;
    whiteGrid();
});

const gridOn = document.querySelector(".grid-on");
gridOn.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "green";
    gridOff.style.backgroundColor = "black";
    gridLinesToggle = 1;
    makeGrid();
});

const blackBrush = document.querySelector(".black");
blackBrush.addEventListener("click", function () {
    brushColor = "black";
    showMessages();
});
const redBrush = document.querySelector(".red");
redBrush.addEventListener("click", function () {
    brushColor = "red";
    showMessages();
});
const yellowBrush = document.querySelector(".yellow");
yellowBrush.addEventListener("click", function () {
    brushColor = "yellow";
    showMessages();
});
const greenBrush = document.querySelector(".green");
greenBrush.addEventListener("click", function () {
    brushColor = "green";
    showMessages();
});
const blueBrush = document.querySelector(".blue");
blueBrush.addEventListener("click", function () {
    brushColor = "blue";
    showMessages();
});
const eraserBrush = document.querySelector(".eraser");
eraserBrush.addEventListener("click", function () {
    brushColor = "white";
    showMessages();
});

// * MAKE THE GRID

showMessages();
makeGrid();
