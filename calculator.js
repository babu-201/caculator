const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const operation = document.getElementById('operation');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);
  const selectedOperation = operation.value;

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = 'Error: Please enter valid numbers!';
    return;
  }

  let result;
  switch (selectedOperation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        resultDiv.textContent = 'Error: Cannot divide by zero!';
        return;
      }
      result = num1 / num2;
      break;
  }

  resultDiv.textContent = `Result: ${result}`;
});
