const containerDiv = document.querySelector(".container");

function createGrids() {
  //Create a lot of divs that change their height and width to fit the container perfectly, no matter how much of them
  let gridSize = 20;
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
        "display: flex; flex: 1; background-color: white; border: 1px solid black;"
      );
      columnDiv.appendChild(rowDiv);
    }
  }
}
createGrids();

const rowDivHover = document.querySelectorAll(".square-divs");

rowDivHover.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${x}, ${y}, ${z})`
    div.style.background = bgColor;
  });
});

// const newGridBtn = document.querySelector(".new-grid");
// newGridBtn.addEventListener("click", () => {
//   let gridSize = prompt("How many squares do you want");
//   createGrids(gridSize);
// });
