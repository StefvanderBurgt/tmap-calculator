function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;

    // Controleren op ongeldige opeenvolgende bewerkingen en deze negeren
    expression = expression.replace(/\/{2,}/g, '/'); // Behoud alleen het eerste deelteken
    expression = expression.replace(/\*{2,}/g, '*'); // Behoud alleen het eerste vermenigvuldigingsteken
    expression = expression.replace(/\+{2,}/g, '+'); // Behoud alleen het eerste optellingsteken
    expression = expression.replace(/\-{2,}/g, '-'); // Behoud alleen het eerste aftrekkingsteken

    var result = eval(expression);
    if (result > 100) {
        result += ' 🤡';
    }
    document.getElementById('display').value = result;
}