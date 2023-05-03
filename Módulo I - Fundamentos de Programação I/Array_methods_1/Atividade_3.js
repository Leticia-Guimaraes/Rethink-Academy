// 3. Crie uma função que aceite uma array numérica como parâmetro e:
// a. retorne outra array com todos os valores concatenados na forma
// de uma string, e
// b. com um sinal de ponto inserido a cada 3 numerais.

const concatenateTheValues = (num) => {
  const values = num.join("");

  let result = "";

  for (let i = 0; i < values.length; i++) {
    result += values[i];
    if ((i + 1) % 3 === 0 && i !== values.length - 1) {
      result += ".";
    }
  }

  return result;
};

console.log(concatenateTheValues([1, 2, 3, 4, 5, 6, 7, 8]));
