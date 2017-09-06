
// When size is submitted by the user, call makeGrid()
var sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit',function(){
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    // Grab canvas
    var pixelCanvas = document.getElementById('pixel_canvas');

    // Remove existing pixels
    pixelCanvas.innerHTML = '';

    // Grab values of grid height and width
    var gridHeight = document.getElementById('input_height').value;
    var gridWidth = document.getElementById('input_width').value;

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
            td.id = 'pixel-' + i + '-' + j;
            // Grab the <td> on DOM
            var td =  document.getElementById(td.id);
            td.addEventListener('click',function(){
                console.log(event.target)
                // Grab current color value
                var currentColor = document.getElementById('colorPicker').value;
                // Chage the color of the clicked element
                event.target.style.backgroundColor = currentColor
            })
        }
    }
}

