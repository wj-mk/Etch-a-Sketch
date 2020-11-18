// tidy up code and general refactoring
// cells going outside grid for some values, I think it's when the inputed size leads to a non-integer quotient.


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
    for (var i = 0; i < size; i++) {
        // build row of grid
        const row = document.createElement('div');
        row.style.height = `${480/size}px`;
        // build each square in row
        for (var j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.style.height = `${480/size}px`;
            square.style.width = `${480/size}px`;
            square.setAttribute('id', `square${i},${j}`);
            square.setAttribute('onmouseover' , 'mouseOver(this)')
            row.appendChild(square);      
        }
        grid.appendChild(row)
    };
};

function mouseOver(obj) {
    obj.style.background = 'pink';
};

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
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