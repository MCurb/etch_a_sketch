const containerDiv = document.querySelector(".container");

function createGrids(gridSize) {
  //Create flex columns that will hold all the square divs
  for (let i = 0; i < gridSize; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.setAttribute(
      "style",
      "display: flex; flex-direction: column; flex: 1;"
    );
    containerDiv.appendChild(columnDiv);
    //Create a certain amount of divs for every time a column is created
    for (let i = 0; i < gridSize; i++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("square-divs");
      rowDiv.setAttribute(
        "style",
        "display: flex; flex: 1; background-color: rgb(216, 216, 216); opacity: 1; border: 0.1px solid gray;"
      );
      columnDiv.appendChild(rowDiv);
    }
  }
}
createGrids(50);

//Event listener that gives a random color to the targeted square-div
containerDiv.addEventListener("mouseover", (e) => {
  if (e.target.matches(".square-divs")) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${x}, ${y}, ${z})`;
    e.target.style.background = bgColor;
  }
});

//Every time one of the buttons is clicked, it removes the previous grid and calls the createGrids function again to create a new one
const sizeButtonsDiv = document.querySelector(".size-buttons")
sizeButtonsDiv.addEventListener("click", (e) => {
  if (e.target.matches(".small-density")) {
    while (containerDiv.hasChildNodes()) containerDiv.firstChild.remove()
      createGrids(16);
  } else if (e.target.matches(".medium-density")) {
    while (containerDiv.hasChildNodes()) containerDiv.firstChild.remove()
      createGrids(50);
  } else if (e.target.matches(".big-density")) {
    while (containerDiv.hasChildNodes()) containerDiv.firstChild.remove()
      createGrids(80);
  }
})