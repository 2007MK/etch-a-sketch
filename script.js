let grid = document.querySelector(".grid");
let gridSize = 16;
let resetBtn = document.querySelector(".reset");
let gridSizeBtn = document.querySelector(".gridSizeBtn");
let randomBtn = document.querySelector(".randomBtn");
let isRandomMode = false;

resetBtn.addEventListener("click", () => {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.style.backgroundColor = "#f4f4f4";
    });
});
// Generating the gridsize
setGrid(gridSize);
startHover();
function setGrid(gridSize) {
    grid.innerHTML = "";
    let fragment = document.createDocumentFragment();
    for(let i = 1; i <= (gridSize*gridSize); i++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.height = (grid.clientHeight/gridSize) + "px";
        square.style.width = (grid.clientWidth/gridSize) + "px";
        square.style.backgroundColor = "#f4f4f4";
        square.style.border = "1px solid black";
        fragment.appendChild(square);
    }
    grid.appendChild(fragment);
};

// Adding hovering effect
function startHover() {
        grid.addEventListener("mouseover", (event) => {
            if(event.target.classList.contains("square")) {
                if(isRandomMode) {
                    event.target.style.backgroundColor = randomColor(); 
                } else {
                    event.target.style.backgroundColor = "red";
                }
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
});


function randomColor () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

randomBtn.addEventListener("click", () => {
    isRandomMode = !isRandomMode;
    startHover();
});