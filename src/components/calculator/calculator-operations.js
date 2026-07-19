export function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

export function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

export function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

export function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    throw new Error("Cannot divide by zero");
  }

  return firstNumber / secondNumber;
}

export function calculate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
}
