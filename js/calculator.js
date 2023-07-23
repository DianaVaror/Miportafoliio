//Esta variable se utilizará para almacenar la expresión matemática ingresada por el usuario.
let expression = '';

//Esta funcion se ejecuta cada vez que el usuario hace clic en un botón numérico, de operación o cualquier otro botón que tenga un valor asignado
function appendToDisplay(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

//Esta funcion se ejecuta cuando el usuario hace clic en el botón "C". Su propósito es borrar la expresión actual y restablecer la calculadora a su estado inicial.

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

//La función calculate() se ejecuta cuando el usuario hace clic en el botón "=" para obtener el resultado de la expresión matemática ingresada.
//Dentro de la función, utilizamos un bloque try...catch para manejar posibles errores al evaluar la expresión matemática. La función eval() se utiliza para evaluar la cadena almacenada en la variable expression, que contiene la expresión matemática ingresada por el usuario.

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

//Esta funcion se ejecuta cuando el usuario hace clic en el botón "√" para calcular la raíz cuadrada del resultado de la expresión actual.

function calculateSquareRoot() {
  try {
    const result = Math.sqrt(eval(expression));
    expression = result.toString();
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
