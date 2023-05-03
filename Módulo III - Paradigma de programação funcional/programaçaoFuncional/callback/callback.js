const run = (fn, num1, num2) => fn(num1, num2);

const addInTheTerminal = (a, b) => console.log(a + b);
const subtractAtTheTerminal = (a, b) => console.log(a - b);

run(addInTheTerminal, 56, 38);
run(subtractAtTheTerminal, 182, 27);
