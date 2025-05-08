const containerDiv = document.querySelector(".container");

function createGrids(gridSize) {
  //Create a lot of divs that change their height and width to fit the container perfectly, no matter how much of them
  for (let i = 0; i < gridSize; i++) {
    const columnDiv = document.createElement("div");
    // columnDiv.textContent = i;
    columnDiv.setAttribute(
      "style",
      "display: flex; flex-direction: column; flex: 1;"
    );
    containerDiv.appendChild(columnDiv);
    for (let i = 0; i < gridSize; i++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("square-divs");
      // rowDiv.textContent = i
      rowDiv.setAttribute(
        "style",
        "display: flex; flex: 1; background-color: white; border: 0.1px solid gray;"
      );
      columnDiv.appendChild(rowDiv);
    }
  }
}
createGrids(50);

containerDiv.addEventListener("mouseover", (e) => {
  if (e.target.matches(".square-divs")) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${x}, ${y}, ${z})`;
    e.target.style.background = bgColor;
  }
});

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