const cart = [
  { name: "Pen", quantity: 10, price: 7.99, fragile: true },
  { name: "Printer", quantity: 1, price: 649.5, fragile: true },
  { name: "notebook", quantity: 4, price: 27.1, fragile: false },
  { name: "pencil", quantity: 3, price: 5.82, fragile: false },
  { name: "scissors", quantity: 1, price: 19.2, fragile: true },
];

const filterTheFragileItems = cart.filter((product) => product.fragile == true);

const getTheTotalValue = filterTheFragileItems.map(
  (product) => product.quantity * product.price
);

const getTheAverage = getTheTotalValue.reduce(
  (acc, el) => {
    const totalOfItems = acc.quantity + 1;
    const newTotalValue = acc.total + el;
    return {
      quantity: totalOfItems,
      total: newTotalValue,
      average: newTotalValue / totalOfItems,
    };
  },
  { quantity: 0, total: 0, average: 0 }
);

console.log(getTheAverage);
