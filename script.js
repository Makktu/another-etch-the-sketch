"use strict";

function underlineActiveColor(underlineThis) {
    // first, clear all of any underline
    blackBrush.style.cssText = "margin-left: 0%; transition: margin-left 0.2s;";
    redBrush.style.cssText = "margin-left: 0%; transition: margin-left 0.2s;";
    yellowBrush.style.cssText =
        "margin-left: 0%; transition: margin-left 0.2s;";
    greenBrush.style.cssText = "margin-left: 0%;2transition: margin-left 0.2s;";
    blueBrush.style.cssText = "margin-left: 0%; transition: margin-lef2 0.2s;";
    eraserBrush.style.cssText =
        "margin-left: 0%; transition: margin-left 0.2s;";
    // last, underline the active one that called the function
    underlineThis.style.cssText =
        "margin-left: 100%; transition: margin-left 0.5s;";
}

function showMessages() {
    brushToggle === 1 ? (togStatus = "ON") : (togStatus = "OFF");
    brushToggle === 1
        ? (messageSpace.style.cssText =
              "margin-left: 80%; color: white; transition: all .5s ease-out;")
        : (messageSpace.style.cssText = "margin-left: 20%; transition: .25s;");
    messageSpace.innerText = `Brush: ${togStatus}`;
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

let gridLinesToggle = 1; // ? grid is ON

let togStatus = "ON"; // ? variable to handle status of grid

const messageSpace = document.querySelector(".messages");
messageSpace.addEventListener("click", () => {
    brushToggle === 0 ? (brushToggle = 1) : (brushToggle = 0);
    showMessages();
});

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
    gridLinesToggle = 0;
    gridOn.style.cssText = "opacity: 0.5; text-decoration: none;";
    gridOff.style.cssText = "opacity: 1; text-decoration: underline";
    makeGrid();
});

const gridOff = document.querySelector(".grid-off");
gridOff.style.opacity = 0.4;
gridOff.addEventListener("click", function () {
    gridOn.style.cssText = "opacity: 0.5; text-decoration: none;";
    gridOff.style.cssText = "opacity: 1; text-decoration: underline";

    gridLinesToggle = 0;
    makeGrid();
});

const gridOn = document.querySelector(".grid-on");
gridOn.addEventListener("click", function () {
    if (gridSize !== 128) {
        gridOff.style.cssText = "opacity: 0.5; text-decoration: none";
        gridOn.style.cssText = "opacity: 1; text-decoration: underline";
        gridLinesToggle = 1;
        makeGrid();
    } else {
        alert("Cannot have grid lines with size 128x128");
    }
});

const blackBrush = document.querySelector(".black");
blackBrush.addEventListener("click", function () {
    brushColor = "black";
    underlineActiveColor(blackBrush);

    showMessages();
});
const redBrush = document.querySelector(".red");
redBrush.addEventListener("click", function () {
    brushColor = "red";
    underlineActiveColor(redBrush);

    showMessages();
});
const yellowBrush = document.querySelector(".yellow");
yellowBrush.addEventListener("click", function () {
    brushColor = "yellow";
    underlineActiveColor(yellowBrush);

    showMessages();
});
const greenBrush = document.querySelector(".green");
greenBrush.addEventListener("click", function () {
    brushColor = "green";
    underlineActiveColor(greenBrush);

    showMessages();
});
const blueBrush = document.querySelector(".blue");
blueBrush.addEventListener("click", function () {
    brushColor = "blue";
    underlineActiveColor(blueBrush);

    showMessages();
});
const eraserBrush = document.querySelector(".eraser");
eraserBrush.addEventListener("click", function (e) {
    brushColor = "white";
    underlineActiveColor(eraserBrush);
    showMessages();
});

// * MAKE THE GRID

underlineActiveColor(blackBrush);
showMessages();
makeGrid();
