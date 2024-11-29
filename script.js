const container = document.querySelector(".container");
const btn = document.querySelector("button");

// Function to create the grid
function createGrid(size) {
    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create individual grid squares
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-div");

        div.style.backgroundColor = generateRandomColor();
        div.style.opacity = 0;

        div.addEventListener("mouseenter", () => {
            let currentOpacity = parseFloat(div.style.opacity) || 0; 
            if (currentOpacity < 1) {
                div.style.opacity = currentOpacity + 0.1;
            }
        });

        container.appendChild(div);
    }

}

// Function to generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`; 
}

// Button click event
btn.addEventListener("click", () => {
    let userInput = prompt("Enter grid size (max 100):");
    let gridSize = parseInt(userInput);

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(gridSize); 
});


createGrid(16);
