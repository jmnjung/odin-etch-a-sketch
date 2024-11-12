const body = document.querySelector("body");
const container = document.querySelector(".container");
const gridInput = document.querySelector("#size");
const rainbowBtn = document.querySelector("#rainbow");
const clearBtn = document.querySelector("#clear");

let gridSize = 16;
let draw = false;
let rainbow = false;

function getRandomColor() {
  const getRandomValue = () => Math.floor(Math.random() * 256);
  return `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
}

function handleDraw(e) {
  if (!draw) {
    return;
  } else if (rainbow) {
    e.target.style.backgroundColor = getRandomColor();
    e.target.style.opacity = 1;
  } else if (e.target.style.backgroundColor !== "black") {
    e.target.style.backgroundColor = "black";
    e.target.style.opacity = "0.1";
  } else {
    const currOpacity = parseFloat(e.target.style.opacity);
    const finalOpacity = Math.min(currOpacity + 0.1, 1);
    e.target.style.opacity = `${finalOpacity}`;
  }
}

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.style.height = `${100 / size}%`;
    squareDiv.style.width = `${100 / size}%`;
    squareDiv.addEventListener("mouseenter", handleDraw);
    container.appendChild(squareDiv);
  }
}

function deleteGrid() {
  while (container.firstChild) {
    container.firstChild.removeEventListener("mouseenter", handleDraw);
    container.removeChild(container.firstChild);
  }
}

function clearGrid() {
  const squares = document.querySelectorAll(".container > div");
  squares.forEach((square) => {
    square.style.opacity = "";
    square.style.backgroundColor = "";
  });
}

body.addEventListener("mousedown", () => {
  draw = true;
});

body.addEventListener("mouseup", () => {
  draw = false;
});

gridInput.addEventListener("change", () => {
  gridSize = Math.min(gridInput.max, Math.max(gridInput.min, gridInput.value));
  gridInput.value = gridSize;
  deleteGrid();
  createGrid(gridSize);
});

rainbowBtn.addEventListener("click", () => {
  rainbow = !rainbow;
  if (rainbow) {
    rainbowBtn.style.backgroundColor = "#e0e0e0";
  } else {
    rainbowBtn.style.backgroundColor = "white";
  }
});

clearBtn.addEventListener("click", clearGrid);

createGrid(gridSize);
