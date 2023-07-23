let expression = '';

function appendToDisplay(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    const result = Math.sqrt(eval(expression));
    expression = result.toString();
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
