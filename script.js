const body = document.querySelector("body");
const container = document.querySelector(".container");
const gridInput = document.querySelector("#size");

let gridSize = 16;
let draw = false;

function handleDraw(e) {
  if (draw) {
    e.target.style.backgroundColor = "black";
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

createGrid(gridSize);
