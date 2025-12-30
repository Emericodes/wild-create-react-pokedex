import "./navbar.css";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}



function NavBar({ setPokemonName , pokemonList }: NavBarProps) {
    const pokemonClick = (name:string) => {
        setPokemonName(name);
    if (name === "pikachu" ){
        alert ("pika pikachu !!!")
    }
};
      return (
   <nav>
        {pokemonList.map((onePokemonFromTheList) => (
          <button
            className="button-pokemon-name"
            key={onePokemonFromTheList.name}
            type="button"
            onClick={() => pokemonClick (onePokemonFromTheList.name)}
          >
            {onePokemonFromTheList.name}
          </button>
        ))}
      </nav>
      )
}
export default NavBar;