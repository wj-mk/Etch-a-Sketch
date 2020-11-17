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
        square.setAttribute('id', `square${i}${j}`);
        square.setAttribute('onmouseover' , 'mOver(this)')
        row.appendChild(square);      
    }
    grid.appendChild(row)
}

function mOver(obj) {
    obj.setAttribute('style', 'background: pink');
}