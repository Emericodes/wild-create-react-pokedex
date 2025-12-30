interface PokemonProps {
    pokemon :{
	name: string;
	imgSrc?: string;
    };
}


function PokemonCard({ pokemon }: PokemonProps ) {
	if (pokemon.imgSrc) {
		return (
			<figure>
				<img src={pokemon.imgSrc} alt={pokemon.name} />
				<figcaption>{pokemon.name}</figcaption>
			</figure>
		);
	} else {
		return <p>????</p>;
	}
}

export default PokemonCard;
