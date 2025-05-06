const containerDiv = document.querySelector(".container")

function createGrids() {
     //Create a lot of divs that change their height and width to fit the container perfectly, no matter how much of them
     let row = 16;
     let column = 16;
    for (let i = 0; i < column; i++) {
        const columnDiv = document.createElement("div")
        // columnDiv.textContent = i;
        columnDiv.setAttribute("style", "display: flex; flex-direction: column; flex: 1;")
        containerDiv.appendChild(columnDiv)
        for (let i = 0; i < row; i++) {
            const rowDiv = document.createElement("div")
            // rowDiv.textContent = i
            rowDiv.setAttribute("style", "display: flex; flex: 1; background-color: white; border: 1px solid black;")
            columnDiv.appendChild(rowDiv)
        }
    }
}
createGrids()