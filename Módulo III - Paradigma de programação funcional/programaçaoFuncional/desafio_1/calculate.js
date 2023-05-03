function calculate(num1) {
  return function (num2) {
    return function (fn) {
      return fn(num1, num2);
    };
  };
}

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

console.log(calculate(3)(7)(sum));
console.log(calculate(3)(7)(subtract));
console.log(calculate(3)(7)(multiply));
