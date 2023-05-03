// Crie uma função para adicionar uma nova linguagem à chave
// "languages".

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const addALanguage = (language) => {
  programming.languages.push(language);
};

addALanguage("C");

console.log(programming);
