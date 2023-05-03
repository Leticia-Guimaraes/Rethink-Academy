// function getEvenNumbers(array) {
//   let evenNumbers = [];
//   for (let i of array) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }

const getEvenNumbers = (array) => {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) evenNumbers.push(i);
  }
  return evenNumbers;
};

console.log(getEvenNumbers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
