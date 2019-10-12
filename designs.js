// add event listener When form gets submitted and call makeGrid() 
document.querySelector("#sizePicker").addEventListener("submit", function (e) {
    e.preventDefault();
    makeGrid();
});

function makeGrid() {
    // Define user input height and width.
    const pixelHeight = document.querySelector("#inputHeight").value;
    const pixelWidth = document.querySelector("#inputWidth").value;

    // Define table element.
    const pixelTable = document.querySelector("#pixelCanvas");

    // Clear the table when user re-submit height and width.
    // https://stackoverflow.com/questions/7271490/delete-all-rows-in-an-html-table#answer-44971572
    while (pixelTable.hasChildNodes()) {
        pixelTable.removeChild(pixelTable.lastChild);
    }

    // Loops dynamically to create the table based on user input.
    for (let row = 0; row < pixelHeight; row++) {
        let tr = document.createElement('tr');
        tr.id = 'rows' + row;
        pixelTable.appendChild(tr);
        for (let col = 0; col < pixelWidth; col++) {
            let td = document.createElement('td');
            td.id = 'rows' + row + 'cells' + col;
            pixelTable.lastChild.appendChild(td);
        }
    }
//all td 
    
    let tableCell=Array.from(document.querySelectorAll('td'));
    //each cell should have selcted color 

    tableCell.forEach(function(cell){
        cell.addEventListener('click',function(){
            this.style.backgroundColor=document.querySelector('#colorPicker').value;
        })
    })
}