function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function preprocessExpression(expression) {
    var processedExpression = expression.replace(/(\+{2,}|-{2,}|\/{2,}|\*{2,})/g, (match) => match.charAt(0));
    if (expression !== processedExpression) {
        document.getElementById('message').className = "active";
    }
    return processedExpression;
}
function removeMessage() {
    var message = document.getElementById('message');
    message.classList.remove('active');
}

function calculate() {
    var expression = document.getElementById('display').value;
    expression = preprocessExpression(expression);
    var result = eval(expression);
    if (result > 100) {
        result += ' 🤡';
    }
    document.getElementById('display').value = result;
}