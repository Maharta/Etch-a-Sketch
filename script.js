const sketchContainer = document.querySelector(".sketch__container");
const rangeInput = document.getElementById("range");
const colorInput = document.getElementById("color");
const rangeLabel = document.querySelector("label[for='range']");
const eraserBtn = document.querySelector(".eraser");

let penColor = "#000000";

function makeGrid(gridNumber = 16) {
  sketchContainer.innerHTML = "";
  rangeLabel.textContent = `${gridNumber} x ${gridNumber}`;
  sketchContainer.style.setProperty("--grid-rows", gridNumber);
  sketchContainer.style.setProperty("--grid-cols", gridNumber);
  for (let i = 0; i < gridNumber * gridNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.addEventListener("mouseover", paint);
    div.addEventListener("click", paint);
    sketchContainer.appendChild(div);
  }
}

function paint(e) {
  console.log(e);
  if (e.buttons === 1 || e.pointerId === 1) {
    this.style.backgroundColor = penColor;
  }
}
function erase(e) {
  if (e.buttons === 1 || e.pointerId === 1) {
    this.style.backgroundColor = "#ffffff";
  }
}

eraserBtn.addEventListener("click", (e) => {
  const grids = document.querySelectorAll(".grid");
  e.target.classList.toggle("btn-on");
  if (e.target.classList.contains("btn-on")) {
    grids.forEach((grid) => {
      grid.removeEventListener("mouseover", paint);
      grid.removeEventListener("click", paint);
      grid.addEventListener("mouseover", erase);
      grid.addEventListener("click", erase);
    });
  } else {
    grids.forEach((grid) => {
      grid.removeEventListener("mouseover", erase);
      grid.removeEventListener("click", erase);
      grid.addEventListener("mouseover", paint);
      grid.addEventListener("click", paint);
    });
  }
});

rangeInput.addEventListener("input", (e) => {
  makeGrid(e.target.value);
});

colorInput.addEventListener("change", (e) => {
  penColor = e.target.value;
});

window.onload = makeGrid();
