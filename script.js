// build grid
const grid = document.querySelector('#grid');
for (var i = 0; i < 16; i++) {
    // build row of grid
    const row = document.createElement('div');
    row.setAttribute('class', 'row')
    // build each square in row
    for (var j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('id', `square${i},${j}`);
        square.setAttribute('onmouseover' , 'mOver(this)')
        row.appendChild(square);      
    }
    grid.appendChild(row)
}

function mOver(obj) {
    obj.setAttribute('style', 'background: pink');
}

//reset button click
btn.addEventListener('click', function(e) {
    // change background of each square to white
    for (var i = 0; i < 16; i++){
        for (var j = 0; j < 16; j++){
            square = document.getElementById(`square${i},${j}`);
            square.setAttribute('style', 'background: white');
        }
    }  ;

    prompt("How many square per side to make the new grid? (max. 100)")
});
    // clear grid
    // send popup
        // ask size of new grid
            // max 100 
            // number of pixels is constant, size of squares is not
            