const sketchContainer = document.querySelector(".sketch__container");

function makeGrid(numberOfRows = 16, numberOfCols = 16) {
  sketchContainer.style.setProperty("--grid-rows", numberOfRows);
  sketchContainer.style.setProperty("--grid-cols", numberOfCols);
  for (let i = 0; i < numberOfCols * numberOfRows; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    sketchContainer.appendChild(div);
  }
}

makeGrid();
