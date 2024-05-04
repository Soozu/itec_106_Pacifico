let currentInput = ''; // variable to store the current input
let ans = ''; // variable to store the result of the previous calculation

function Button (value) {
    // If the user starts a new calculation immediately after getting the result
    if (ans && currentInput === ans) {
        updateDisplay(ans + value);
        return;
    }

    if (value === '=') {
        if (currentInput !== '') {
            calculate();
        }
        return;
    }
    // Button the value to the current input
    updateDisplay(currentInput + value);
}

function updateDisplay(value) {
    if (value === '') {
        document.getElementById('display').value = '0'; // Set display to '0' if it's blank
    } else {
        document.getElementById('display').value = value;
    }
    currentInput = value; // Update current input
}

function clearEntry() {
    updateDisplay('');
}

function backspace() {
    updateDisplay(currentInput.slice(0, -1)); // Remove the last number from current input
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    
    // If 'ans' is present in the input, replace it with the previous result
    // it's not working T-T
    displayValue = displayValue.replace('ans', ans);

    // Validate input
    if (!isValidInput(displayValue)) {
        clearEntry();
        alert('Invalid input');
        return;
    }
    
    try {
        var result = eval(displayValue); 
        if (!isFinite(result)) {
            throw new Error('Invalid expression');
        }
        updateDisplay(result);
        ans = result; // Store the result in 'ans' but it's not working at all. Couldn't obtain the result from the previous calculation.
    } catch (error) {
        clearEntry();
        alert('Error: ' + error.message);
    }
}

// Function to validate input
function isValidInput(input) {
    // Check for consecutive operators
    if (/[\+\-\*\/]{2,}/.test(input)) {
        return false;
    }
    // Check for multiple decimal points in a number
    if (/[0-9]+\.[0-9]+\./.test(input)) {
        return false;
    }
    // Check for leading operators
    if (/^[\+\-\*\/]/.test(input)) {
        return false;
    }
    return true;
}
