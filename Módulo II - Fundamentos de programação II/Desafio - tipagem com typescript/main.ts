import { pokemons } from "./data";


type Pokemons = {
  name: String,
  type: string[],
  weight: number,
  height: number,
  id: number
};

type PokemonsTypes =
  | "grass"
  | "poison"
  | "fire"
  | "flying"
  | "water"
  | "bug"
  | "normal"
  | "electric"
  | "ground"
  | "fairy"
  | "fighting"
  | "psychic"
  | "rock"
  | "steel"
  | "ice"
  | "ghost"
  | "dark"
  | "dragon";

//Encontrar Pokemons
const findThePokemon = (name: string) =>
pokemons.find((pokemon) => pokemon.name === name);

//Listar Pokemons do mesmo tipo
const sameTypeOfPokemons = (type:PokemonsTypes) =>
pokemons.filter((pokemon) => pokemon.type.includes(type));


//Tradução dos tipos de Pokemons para português
const translateTheTypes = (pokemon: string) => 
pokemons.map((pokemon : Pokemons) => ({
  ...pokemon,
  type: pokemon.type.map((replace) =>
  replace === "normal"
  ? "normal"
  : replace === "fire"
  ? "fogo"
  : replace === "water"
  ? "agua"
  : replace === "grass"
  ? "grama"
  : replace === "flying"
  ? "voador"
  : replace === "fighting"
  ? "lutador"
  : replace === "poison"
  ? "veneno"
  : replace === "electric"
  ? "elétrico"
  : replace === "ground"
  ? "terra"
  : replace === "rock"
  ? "pedra"
  : replace === "psychic"
  ? "psíquico"
  : replace === "ice"
  ? "gelo"
  : replace === "bug"
  ? "inseto"
  : replace === "ghost"
  ? "fantasma"
  : replace === "steel"
  ? "ferro"
  : replace === "dragon"
  ? "dragão"
  : replace === "dark"
  ? "sombrio"
  : replace === "fairy"
  ? "fada"
  : replace
      
  ),
}));

console.log(findThePokemon("pikachu"));
console.log(sameTypeOfPokemons("fire"));
console.log(translateTheTypes(""));
