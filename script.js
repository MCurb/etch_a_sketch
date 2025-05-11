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
      columnDiv.appendChild(rowDiv);
    }
  }
}
createGrids(50);

let mouseDown = false;
window.onmousedown = () => mouseDown = true;
window.onmouseup = () => mouseDown = false;

//Event listener that gives a random color to the targeted square-div
containerDiv.addEventListener("mouseover", (e) => {
  if (e.target.matches(".square-divs") && mouseDown === true) {
    e.target.style.background = `hsl(${Math.random() * 360}, 80%, 50%)`;
  }
});
containerDiv.addEventListener("mousedown", (e) => {
  if (e.target.matches(".square-divs") && isErasing === false) {
    e.target.style.background = `hsl(${Math.random() * 360}, 80%, 50%)`;
  }
})

//Event listener to the buttons div, that catches when any button is clicked
const buttonsDiv = document.querySelector(".buttons");
buttonsDiv.addEventListener("click", (e) => {
  //If one of the grid size modifiers gets clicked, it will remove the previous grid and create a new one with a different size
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
    //Logic for the custom grid button that filters the prompt answers
    let gridNumber;
    while (true) {
      gridNumber = prompt(
        "How many grids do you want? Enter a number between 1-100"
      );
      //If user cancels, end the loop
      if (gridNumber === null) {
        break;
      }
      //Convert the answer to a number
      gridNumber = parseInt(gridNumber);
      //If input is a number larger than 0 and smaller or equal to 100, remove all square divs and pass the number to the createGrids function, if not, ask again.
      if (!isNaN(gridNumber) && gridNumber > 0 && gridNumber <= 100) {
        while (containerDiv.hasChildNodes()) containerDiv.firstChild.remove();
        createGrids(gridNumber);
        break;
      }
    }
    //Eraser Button logic
  } else if (e.target.matches(".eraser-btn")) {
    //If isErasing is false, set it to true and call the toggleBackground function through the event listener
    if (isErasing === false) {
      isErasing = true
      //Change btn background to active color
      eraserBtn.style.background = "hsl(53, 100%, 70%)"
      containerDiv.addEventListener("mouseover", toggleBackground);
    } else if (isErasing === true) {
      isErasing = false
      eraserBtn.style.background = "hsl(60, 100%, 96%)"
      containerDiv.addEventListener("mouseover", toggleBackground);
    }
    
  }
});

const eraserBtn = document.querySelector(".eraser-btn")
let isErasing = false

//If isErasing true, change the targeted square div to white, if not give it a random color
function toggleBackground(event) {
  if (isErasing === true && mouseDown === true) {
    event.target.style.background = "hsl(0, 0.00%, 84.70%)";
  } else if (isErasing === false && mouseDown === true) {
    event.target.style.background = `hsl(${Math.random() * 360}, 80%, 50%)`;
  }
}