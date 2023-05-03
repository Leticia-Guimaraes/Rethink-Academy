// 5. Crie uma função, que utilize map(), que receba uma array de objetos.
// Uma das propriedades de cada objeto é a propriedade age. A função
// deve retornar outra array com 3 dados:
// a. a menor idade;
// b. a maior idade, e
// c. a diferença entre elas.

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const ageData = (arr) => {
  const ages = arr.map((obj) => obj.age);
  const minAge = Math.min(...ages);
  const maxAge = Math.max(...ages);
  const diffAge = maxAge - minAge;
  return [minAge, maxAge, diffAge];
};

console.log(ageData(input));
