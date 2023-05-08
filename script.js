function displayInput(input) {
    document.getElementById("display").innerText += input;
}

function clearDisplay() {
    document.getElementById("display").innerText = '';
}

function evalDisplay() {
    document.getElementById("display").innerText = eval(display.innerText);
}

function backspaceDisplay () {
    document.getElementById("display").innerText = display.innerText.slice(0,-1);
}