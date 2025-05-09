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
    e.target.style.background = `hsl(${Math.random() * 360}, 80%, 50%)`;
  }
});

//Every time one of the buttons is clicked, it removes the previous grid and calls the createGrids function again to create a new one
const sizeButtonsDiv = document.querySelector(".size-buttons");
sizeButtonsDiv.addEventListener("click", (e) => {
  if (e.target.matches(".small-density")) {
    while (containerDiv.hasChildNodes()) containerDiv.firstChild.remove();
    createGrids(16);
  } else if (e.target.matches(".medium-density")) {
    while (containerDiv.hasChildNodes()) containerDiv.firstChild.remove();
    createGrids(50);
  } else if (e.target.matches(".big-density")) {
    while (containerDiv.hasChildNodes()) containerDiv.firstChild.remove();
    createGrids(80);
  } else if (e.target.matches(".custom-grid")) {
    //Logic for the custom grid button and filters to the prompt answers
    let gridNumber;
    while (true) {
      gridNumber = prompt(
        "How many grids do you want? Enter a number between 1-100"
      );
      if (gridNumber === null) {
        //If user cancels, end the loop
        break;
      }
      gridNumber = parseInt(gridNumber);
      if (!isNaN(gridNumber) && gridNumber > 0 && gridNumber <= 100) {
        //If input is a number larger than 0 and smaller or equal to 100, remove all square divs and pass the number to the createGrids function, if not, ask again.
        while (containerDiv.hasChildNodes()) containerDiv.firstChild.remove();
        createGrids(gridNumber);
        break;
      }
    }
  }
});