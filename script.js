const container = document.querySelector(".container");

let gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.style.height = `${100 / gridSize}%`;
  squareDiv.style.width = `${100 / gridSize}%`;
  container.appendChild(squareDiv);
}
