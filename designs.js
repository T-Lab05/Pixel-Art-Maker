// Select color input

$('#pixel_canvas').on('click','td',function(event){
    // Get the value of colorPicker
    var currentColor = document.getElementById('colorPicker').value;
    // Make the event target the color
    event.target.style.backgroundColor = currentColor;
});

function makeGrid() {
    // Remove all <tr> elements which has been existed.
    $('tr').remove();

    // Grab height and width of grid
    var gridHeight = document.getElementById('input_height').value;
    var gridWidth = document.getElementById('input_width').value;
    console.log("Row  : " + gridHeight);
    console.log("column : " + gridWidth);

    // Grab canvas
    var pixelCanvas = document.getElementById('pixel_canvas');
    // Make <tr> as much as gridWidth
    for(var i = 1; i <= gridWidth; i++){
        // Create <tr> element
        var tr = document.createElement('tr');
        // Add id name with the value of i
        tr.id = "row-" + i;
        // Add the element to DOM
        pixelCanvas.append(tr);
        // Grab the elelment on DOM
        var targetRow = document.getElementById(tr.id);

        // Make <td> as much as gridHeight
        for(var j = 1; j <= gridHeight; j++) {
            // Create <td> element
            var td = document.createElement('td');
            // Add the element to DOM
            targetRow.append(td);
            // Add id name with the value of j
            td.id = "column-" + j;
        }
    }
}