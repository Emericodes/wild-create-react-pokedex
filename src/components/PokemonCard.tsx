import  '../components/PokemonCard.css';

interface PokemonCard{
	name: string;
	imgSrc?: string;
}

function PokemonCard({datapokemon}) {

	return (
		<figure className ="card">
			{datapokemon.imgSrc != null ? (
				<img className ="card-img" src={datapokemon.imgSrc} alt={datapokemon.name} />
			) : (
				<p>???</p>
			)}
			<figcaption>{datapokemon.name}</figcaption>
		</figure>
	);
}
export default PokemonCard;
