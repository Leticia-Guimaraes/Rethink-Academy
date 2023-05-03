// Importação
import { pokemons } from "./data.js";

//Encontrar Pokemon pelo nome
const findThePokemon = (name) =>
  pokemons.find((pokemon) => pokemon.name === name);

//Listar Pokemons do mesmo tipo
const sameTypeOfPokemons = (type) =>
  pokemons.filter((pokemon) => pokemon.type.includes(type));

//Tradução dos tipos de Pokemons para português
const translateTheTypes = () => {
  const typesIntoPortuguese = {
    normal: "normal",
    fire: "fogo",
    water: "água",
    grass: "grama",
    flying: "voador",
    fighting: "lutador",
    poison: "veneno",
    electric: "elétrico",
    ground: "terra",
    rock: "pedra",
    psychic: "psíquico",
    ice: "gelo",
    bug: "inseto",
    ghost: "fantasma",
    steel: "ferro",
    dragon: "dragão",
    dark: "sombrio",
    fairy: "fada",
  };

  pokemons.forEach(
    (pokemon) =>
      (pokemon.type = pokemon.type.map((type) => typesIntoPortuguese[type]))
  );
};

//Impressões
console.log(findThePokemon("pikachu"));

console.log(sameTypeOfPokemons("fire"));

translateTheTypes();
console.log(pokemons);
