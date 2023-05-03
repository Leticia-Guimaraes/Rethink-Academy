// //Utilizando function
// function sum(num1) {
//   return function (num2) {
//     return function (num3) {
//       return num1 + num2 + num3;
//     };
//   };
// }

//Utilizando Arrow Function
const sum = (num1) => (num2) => (num3) => num1 + num2 + num3;

const sumTheValues = sum(3)(4)(5);
console.log(sumTheValues);
