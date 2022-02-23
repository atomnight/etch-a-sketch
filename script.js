

let size = document.getElementById("size");

const sizeButton = document.querySelector(".size-button");

const clearButton = document.querySelector(".clear-button");

const colorButton = document.querySelector(".color-button");

let color = document.getElementById('color');

const container = document.querySelector(".container");

function createSketch(sketchSize) {
    for (let i = 0; i < sketchSize; i++) {
        const row = document.createElement("div");

        //row.style.border = "5px black solid";
        row.style.height = "100%";
        row.style.alignSelf = "stretch"; 
        row.style.display = "flex"; 

        container.appendChild(row); 
        for (let j = 0; j < sketchSize; j++) {
            const rowItem = document.createElement("div");

            //rowItem.style.border = "5px aqua solid";
            rowItem.style.width = "100%";
            rowItem.style.alignSelf = "stretch";
            rowItem.style.background = "white";

            row.appendChild(rowItem); 
            rowItem.setAttribute("class","row-item")
        }
    }
}

sizeButton.addEventListener("click", changeSize);
    function changeSize() {
        container.innerHTML = "";
        let sketchSize = size.value; 
        createSketch(sketchSize);
}


clearButton.addEventListener("click", deleteSketch);
    function deleteSketch() {
        container.innerHTML = "";
}

// Listen to all clicks on the document
document.addEventListener('click', function (event) {

	// If the event target doesn't match bail
	if (!event.target.classList.contains('row-item')) return;

	// Otherwise, run your code...
    

    event.target.style.background = color.value;

}, false);
