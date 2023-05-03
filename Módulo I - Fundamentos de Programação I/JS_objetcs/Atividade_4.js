// Crie uma função para adicionar uma nova chave.

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const addAKey = (object, key, value) => {
  object[key] = value;
};

addAKey(programming, "isFun", true);

console.log(programming);
