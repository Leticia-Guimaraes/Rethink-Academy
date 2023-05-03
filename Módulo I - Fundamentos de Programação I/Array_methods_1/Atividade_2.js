// 2. Crie uma função que, ao receber como parâmetros uma array e um
// número (opcional), cria uma outra array com os valores iniciais da
// array original de acordo com o número passado. Método: slice().

const sliceTheArray = (array, num) => {
  if (num === undefined) {
    return array.slice();
  }
  return array.slice(0, num);
};

console.log(sliceTheArray([7, 9, 0, -2], 3));
