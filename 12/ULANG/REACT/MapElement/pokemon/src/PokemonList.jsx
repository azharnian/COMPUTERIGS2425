import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Fetch the first 100 Pokémon from the Pokédex API
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        const results = response.data.results;

        // Fetch details for each Pokémon
        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const pokeDetail = await axios.get(pokemon.url);
            return pokeDetail.data;
          })
        );

        setPokemon(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemon();
  }, []);

  const pokemonListStyle ={
    display : "flex",
    flexWrap : "wrap",
    gap : "5rem",
    alignItem : "center",
    justifyContent : "center"
  };

  return (
    <div className="pokemon-list" style={pokemonListStyle}>
      {pokemon.map((poke, index) => (
        <div key={index} className="pokemon-item">
          <img src={poke.sprites.front_default} alt={poke.name} />
          <p>{poke.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
