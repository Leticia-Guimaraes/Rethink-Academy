function promise(value, errorChance) {
  return new Promise((resolve, reject) => {
    randomNumber = Math.random();
    if (randomNumber < errorChance) {
      reject(`Ocorreu um erro: ${randomNumber}`);
    } else {
      resolve(`${value} ${randomNumber}`);
    }
  });
}

Promise.race([
  promise("Testando...", 0.1),
  promise("Testando...", 0.5),
  promise("Testando...", 0.2),
])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
