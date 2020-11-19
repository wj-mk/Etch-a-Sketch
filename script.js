
// cells going outside grid for some values, I think it's when the inputed size leads to a non-integer quotient.
// tidy up populate grid function, especially CSS stuff, can the mouseOver function be gotten rid of?


const grid = document.querySelector('#grid');
let gridSize = 16; // default number of squares per row and column
populateGrid(gridSize);

btnReset.addEventListener('click', function() {
    resetGrid();
    promptNewGridSize();
    populateGrid(gridSize);
});

// functions
function populateGrid(size) {
    numSqs = `${48/size}vw`;
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.style.height = numSqs;
            square.style.width = numSqs;
            square.setAttribute('id', `square${i},${j}`);
            square.setAttribute('onmouseover' , 'mouseOver(this)')
            grid.appendChild(square);      
        }
    };
};

function mouseOver(obj) {
    obj.style.background = 'pink';
};

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
};

function promptNewGridSize() {
    while (true) {
        choice = prompt("Choose new grid size (min. 1, max. 100):");
        if (choice > 0 && choice <= 100) {
            gridSize = choice;
            break;
        }
        else if (choice == null) {
            break;
        };
    };
};