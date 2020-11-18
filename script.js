let gridSize = 16;

// build initial grid
const grid = document.querySelector('#grid');

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
            square.setAttribute('onmouseover' , 'mOver(this)')
            row.appendChild(square);      
        }
        grid.appendChild(row)
    };
};

// populate grid with squares
populateGrid(gridSize);

function mOver(obj) {
    obj.style.background = 'pink';
}

//reset button click
btn.addEventListener('click', function() {
    // reset grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    // obtain new grid size from user
    while (true) {
        choice = prompt("How many square per side to make the new grid? (max. 100)");

        console.log(choice)
        if (choice > 0 && choice <= 100) {
            gridSize = choice;
            break;
        }
        else if (choice == null) {
            break;
        }
    };

    populateGrid(gridSize)
});



// refactor code function to make grid
// refactor code function to reset grid
// tidy up code and general refactoring
// cells going outside grid for some values, I think it's when the inputed size leads to a non-integer quotient.