const sketchContainer = document.querySelector(".sketch__container");
const rangeInput = document.getElementById("range");
const colorInput = document.getElementById("color");
const rangeLabel = document.querySelector("label[for='range']");

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
  if (e.buttons === 1) {
    this.style.backgroundColor = penColor;
  }
}

rangeInput.addEventListener("input", (e) => {
  makeGrid(e.target.value);
});

colorInput.addEventListener("change", (e) => {
  penColor = e.target.value;
  console.log(penColor);
});

window.onload = makeGrid();
