let grid = document.querySelector(".grid");
let gridSize = 16;
let resetBtn = document.querySelector(".reset");
let gridSizeBtn = document.querySelector(".gridSizeBtn");

// Generating the gridsize
setGrid(gridSize);
startHover();
startReset();
function setGrid(gridSize) {
    grid.innerHTML = "";
    for(let i = 1; i <= (gridSize*gridSize); i++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.height = (grid.clientHeight/gridSize) + "px";
        square.style.width = (grid.clientWidth/gridSize) + "px";
        square.style.backgroundColor = "#f4f4f4";
        square.style.border = "1px solid black";
        grid.appendChild(square);
    }
}

// Adding hovering effect
function startHover() {
        grid.addEventListener("mouseover", (event) => {
            if(event.target.classList.contains("square")) {
                event.target.style.backgroundColor = "red";
            }
        });
    };
  

// making the reset button functional


//making the grid size button functional
gridSizeBtn.addEventListener("click", () => {
    let size;
    size = Number(prompt("Enter the grid size you want, ex: enter 20 if you want a grid size of 20x20. Max Grid Size is 100"));
    console.log(size);
    if(size > 100) {
        alert("Grid size cannot be greater than 100");
        return;
    }
    grid.innerHTML = "";
    setGrid(size);
    startHover();
    startReset();
})

function startReset() {
    let squares;
    squares = document.querySelectorAll(".square")
    resetBtn.addEventListener("click", () => {
        squares.forEach((square) => {
            square.style.backgroundColor = "#f4f4f4";
        });
    });
}
    