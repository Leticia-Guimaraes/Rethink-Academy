// Crie uma função para excluir uma chave do objeto.

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const deleteAKey = (object, key) => delete object[key];

deleteAKey(programming, "jokes");

console.log(programming);
