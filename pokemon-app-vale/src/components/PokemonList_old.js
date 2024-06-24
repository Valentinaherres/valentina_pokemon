// src/components/PokemonList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
