let str = ``;

const keys = document.querySelectorAll(`input.key`);
const displayInput = document.getElementById(`input-text-field`);
const symbols = document.querySelectorAll(`input.symbol`);
const AC = document.getElementById(`AC`);
const backspace = document.getElementById(`backspace`);
const equal = document.getElementById(`equal`);
const decimal = document.getElementById(`decimal`);

//global var
window = document.addEventListener(`keydown`, () => keyEvent(event));

// functions

function keyEvent(event) {
    console.log(event.keyCode);
    console.log(event.key);
    if (event.key >= 0 && event.key <= 9)
        numericOperation(event.key);
    if (event.key === `Backspace`)
        delSingle();
    if (event.key == `+` || event.key == `-` || event.key == `*` || event.key == `/`)
        operator(event.key);
    if (event.keyCode === 13)
        operate();
    if (event.keyCode === 46)
        allClear();
    if (event.key == `.`)
        decimalAppend();
}

// split a string 
function operate() {
    str = eval(str);
    update();
}

// advance this function later
function decimalAppend() {
    str += `.`;
    update();
}

const strClear = () => {
    str = ``;
}

const update = () => {
    displayInput.innerHTML = str;
    if (str === ``) displayInput.innerHTML = `0`;
}

const numericOperation = (value) => {
    //console.log(key.value);
    str += value;
    update();
}

const operator = (value) => {
    if (str[str.length - 1] == `+` ||
        str[str.length - 1] == `-` ||
        str[str.length - 1] == `*` ||
        str[str.length - 1] == `/`)
        return;
    else {
        str += value;
    }
    update();
}

// backspace
const delSingle = () => {
    str = str.substring(0, str.length - 1);
    update();
}

const allClear = () => {
    strClear();
    update();
    displayInput.innerHTML = `0`;
}

keys.forEach((key) => key.addEventListener(`click`, () => numericOperation(key.value)));

symbols.forEach((symbol) => symbol.addEventListener(`click`, () => operator(symbol.value)));

AC.addEventListener(`click`, allClear);

backspace.addEventListener(`click`, delSingle);

equal.addEventListener(`click`, operate);

decimal.addEventListener(`click`, decimalAppend);