const clearCreate = document.getElementById(`clearbtn`);
const container = document.getElementById(`container`);
const sprayBtn = document.getElementById(`spray`);
const blackBtn = document.getElementById(`black-white`);
const colorfulBtn = document.getElementById(`colorful`);
const eraseBtn = document.getElementById(`erase`);

let sketchColor = () => {
    return `#222`;
};
createGrid(16);
let cells = document.querySelectorAll('div.GridCell');
mouseEventListener();
clearCreate.addEventListener(`click`, () => {
    clearAndTakeInput();
    cells = document.querySelectorAll(`div.GridCell`);
    mouseEventListener();
});

// clearing and taking input to create new grid
function clearAndTakeInput() {
    // converting it to number data type
    clearGrid();
    let number = +prompt(`Enter the number n to create n x n square grid`);
    while (number < 0)
        number = +prompt(`Enter the number n to create n x n square grid`);
    createGrid(number);
}

// clearing grid to resize
function clearGrid() {
    while (container.firstChild)
        container.removeChild(container.firstChild);
}

// creating new grid
function createGrid(number) {
    container.style.setProperty(`--grid-rows`, number);
    container.style.setProperty(`--grid-cols`, number);
    for (let i = 0; i < number ** 2; i++) {
        let cell = document.createElement(`div`);
        cell.className = `GridCell`;
        cell.innerHTML = `  `;
        container.appendChild(cell);
    }
}

eraseBtn.addEventListener(`click`, function() {
    sketchColor = () => { return `white` };
})

blackBtn.addEventListener(`click`, function() {
    sketchColor = () => {
        return `#222`;
    }
});

colorfulBtn.addEventListener(`click`, function() {
    sketchColor = () => {
        const color = `rgb(${randomColor(256)},` +
            `${randomColor(256)},` +
            `${randomColor(256)})`;
        return color;
    };
});

sprayBtn.addEventListener(`click`, function() {
    sketchColor = () => {
        return `spray`;
    }
});

function mouseEventListener() {
    cells.forEach((cell) => {
        let darkness = 1;
        cell.addEventListener(`mouseover`, () => {
            //console.log(cell);
            if (sketchColor() === `spray`) {
                if (darkness > 0.2)
                    darkness -= 0.12;
                cell.style.backgroundColor =
                    `rgb(${Math.floor(darkness * 255)}, ` +
                    `${Math.floor(darkness * 255)}, ` +
                    `${Math.floor(darkness * 255)})`;
            } else
                cell.style.backgroundColor = sketchColor();
        });
    });
}

// To generate number up to a number
function randomColor(num) {
    return Math.floor(Math.random() * num);
}