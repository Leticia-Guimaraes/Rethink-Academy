const cart = [
  { name: "Pen", quantity: 10, price: 7.99 },
  { name: "Printer", quantity: 0, price: 649.5 },
  { name: "notebook", quantity: 4, price: 27.1 },
  { name: "pencil", quantity: 3, price: 5.82 },
  { name: "scissors", quantity: 1, price: 19.2 },
];

const getTotal = cart.map((product) => product.quantity * product.price);
const sum = (acc, el) => acc + el;

const totalValue = getTotal.reduce((acc, el) => acc + el);

console.log(totalValue);
