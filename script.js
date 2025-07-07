let grid = document.querySelector(".grid");
let gridSize = 16;
let resetBtn = document.querySelector(".reset");
let gridSizeBtn = document.querySelector(".gridSizeBtn");
let randomBtn = document.querySelector(".randomBtn");
let isRandomMode = false;
let isDrawing = false;

document.body.addEventListener("mousedown", (e) => {
    if (e.button === 0) isDrawing = true; // only left button
});
document.body.addEventListener("mouseup", () => {
    isDrawing = false;
});


resetBtn.addEventListener("click", () => {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.style.backgroundColor = "#f4f4f4";
    });
});

setGrid(gridSize);
startHover();

// Generating the grid
function setGrid(gridSize) {
    grid.innerHTML = "";
    let fragment = document.createDocumentFragment();
    for(let i = 1; i <= (gridSize*gridSize); i++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.height = (grid.clientHeight/gridSize) + "px";
        square.style.width = (grid.clientWidth/gridSize) + "px";
        square.style.backgroundColor = "#f4f4f4";
        fragment.appendChild(square);
    }
    grid.appendChild(fragment);
};

function startHover() {
    // Draws when only one square is clicked
    grid.addEventListener("mousedown", (event) => {
        if (event.target.classList.contains("square")) {
            event.target.style.backgroundColor = isRandomMode ? randomColor() : "#CBE896";
        }
    });
    // keeps on drawing until the left button is clicked
    grid.addEventListener("mouseover", (event) => {
        if (isDrawing && event.target.classList.contains("square")) {
            event.target.style.backgroundColor = isRandomMode ? randomColor() : "#CBE896";
        }
    });
}


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
