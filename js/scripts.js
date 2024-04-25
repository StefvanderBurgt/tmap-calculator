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
    
    // New logic to handle multiple divisions: only execute up to the first division
    var divisionIndex = processedExpression.indexOf('/');
    if (divisionIndex !== -1) {
        // Check if there is another division after the first one
        var secondDivisionIndex = processedExpression.indexOf('/', divisionIndex + 1);
        if (secondDivisionIndex !== -1) {
            // If there's a second division, cut the expression up to the first division
            processedExpression = processedExpression.substring(0, secondDivisionIndex);
        }
    }
    
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

    try {
        var result = math.evaluate(expression);

        if (result > 100) {
            result += ' 🤡';
        }
        
        document.getElementById('display').value = result;
    } catch (error) {
        console.error("Error evaluating expression:", error);
    }
    document.getElementById('display').value = result;
}

// Add event listeners to buttons

window.onload = function() {
    var operators = document.getElementsByClassName('operator');

    for (var i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function() {
            appendToDisplay(this.value);
        });
    }

    document.getElementById('clear').addEventListener('click', function() {
        clearDisplay();
    });

    document.getElementById('delete').addEventListener('click', function() {
        backspace();
    });

    document.getElementById('clear').addEventListener('click', function() {
        removeMessage();
    });

    document.getElementById('calculate').addEventListener('click', function() {
        calculate();
    });
};