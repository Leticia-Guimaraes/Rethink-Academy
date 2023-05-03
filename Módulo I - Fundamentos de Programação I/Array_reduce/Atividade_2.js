// function stringConcat(arr) {
//     // ...
//     }
//     console.log(stringConcat([1,2,3])); // "123"

function stringConcat(arr) {
  return arr.reduce((acc, cur) => acc + cur, "");
}

console.log(stringConcat([1, 2, 3]));
