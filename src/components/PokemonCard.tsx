const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[1];
  const pokemonImg = pokemonList[1].imgSrc;

  return (
    <figure>
      {pokemonImg != null ? <img src = {pokemonImg} alt={pokemon.name}/> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;


