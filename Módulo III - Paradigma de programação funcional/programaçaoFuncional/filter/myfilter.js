const cart = [
  { name: "Pen", quantity: 10, price: 7.99 },
  { name: "Printer", quantity: 0, price: 649.5 },
  { name: "notebook", quantity: 4, price: 27.1 },
  { name: "pencil", quantity: 3, price: 5.82 },
  { name: "scissors", quantity: 1, price: 19.2 },
];

const filter = (product) => product.quantity >= 3;

Array.prototype.myFilter = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

const greaterThanTwo = cart.myFilter(filter);
console.log(greaterThanTwo);
