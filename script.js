// build initial grid
const grid = document.querySelector('#grid');

let sqNum = 16; // number of squares per row
let sqLen = 480 / sqNum; // length of side of square

// populate grid with squares
for (var i = 0; i < sqNum; i++) {
    // build row of grid
    const row = document.createElement('div');
    row.style.height = `${sqLen}px`;
    // build each square in row
    for (var j = 0; j < sqNum; j++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.style.height = `${sqLen}px`;
        square.style.width = `${sqLen}px`;
        square.setAttribute('id', `square${i},${j}`);
        square.setAttribute('onmouseover' , 'mOver(this)')
        row.appendChild(square);      
    }
    grid.appendChild(row)
}

function mOver(obj) {
    obj.style.background = 'pink';
}

//reset button click
btn.addEventListener('click', function(e) {
    // change background of each square to white
    for (var i = 0; i < sqNum; i++){
        for (var j = 0; j < sqNum; j++){
            square = document.getElementById(`square${i},${j}`);
            square.style.background = 'white';
        }
    }  ;

    prompt("How many square per side to make the new grid? (max. 100)")
});

// standard size grid, but adaptive square size to fit grid
// refactor code function to make grid
// refactor code function to reset grid