const cart = [
  { name: "Pen", quantity: 10, price: 7.99 },
  { name: "Printer", quantity: 0, price: 649.5 },
  { name: "notebook", quantity: 4, price: 27.1 },
  { name: "pencil", quantity: 3, price: 5.82 },
  { name: "scissors", quantity: 1, price: 19.2 },
];

Array.prototype.myMap = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this);
    newArray.push(result);
  }

  return newArray;
};

const getProducts = cart.myMap((product) => product.name);
console.log(getProducts);
