const sketchPad = document.querySelector("section")

const createRow = (grids) => {
    for (let i=0; i<grids; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "square");
        div.style.width = `${100 / grids}%`
        sketchPad.appendChild(div);
    }
}

const createGrid = (cols) => {
    for (let i=0; i<cols; i++) {
        createRow(cols);
    }
}


createGrid(16);