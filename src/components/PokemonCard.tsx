import "./PokemonCard.css"

interface PokemonCard{
	name: string;
	imgSrc?: string;
}

function PokemonCard({datapokemon}) {

	return (
		<figure>
			{datapokemon.imgSrc != null ? (
				<img src={datapokemon.imgSrc} alt={datapokemon.name} />
			) : (
				<p>???</p>
			)}
			<figcaption>{datapokemon.name}</figcaption>
		</figure>
	);
}
export default PokemonCard;
