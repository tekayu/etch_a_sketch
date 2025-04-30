const sketchPad = document.querySelector("div")

const createGrid = (grids) => {
    for (let i=0; i<grids; i++) {
        let grid = document.createElement("div");
        grid.setAttribute("id", `grid-${i}`)
        sketchPad.appendChild(grid)
    }
}

createGrid(16);