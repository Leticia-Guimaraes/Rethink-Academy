// function total(arr) {
// // ...
// }
// console.log(total([1,2,3])); // 6

function total(arr) {
  return arr.reduce((acc, curr) => acc + Number(curr.toString()), 0).toString();
}

console.log(total([1, 2, 3]));
