let display = document.getElementById('display');
let expression = '';

function appendInput(value) {
    expression += value;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        expression = eval(expression).toString();
    } catch (error) {
        expression = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.value = expression;
}
