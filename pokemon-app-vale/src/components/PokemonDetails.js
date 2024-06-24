// // src/components/PokemonDetails.js
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Typography, Button } from '@mui/material';
// import './PokemonDetails.css';

// function PokemonDetails() {
//   const { pokemonName } = useParams();
//   const [pokemon, setPokemon] = useState(null);
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//       .then(response => {
//         setPokemon(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });

//     axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`)
//       .then(response => {
//         const flavorTextEntries = response.data.flavor_text_entries;
//         const flavorText = flavorTextEntries.find(entry => entry.language.name === 'en');
//         setDescription(flavorText ? flavorText.flavor_text : 'No description available.');
//       })
//       .catch(error => {
//         console.error('Error fetching description:', error);
//       });
//   }, [pokemonName]);

//   if (!pokemon) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Container className="pokemon-details-container">
//       <Typography variant="h4" component="h2" gutterBottom>
//         {pokemon.name}
//       </Typography>
//       <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//       <Typography variant="body1" gutterBottom>
//         {description}
//       </Typography>
//       <Button variant="contained" color="primary" component={Link} to="/">
//         Back to List
//       </Button>
//     </Container>
//   );
// }

// export default PokemonDetails;


// src/components/PokemonDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Button, CircularProgress } from '@mui/material';
import './PokemonDetails.css';

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
        const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
        const flavorTextEntries = speciesResponse.data.flavor_text_entries;
        const flavorText = flavorTextEntries.find(entry => entry.language.name === 'en');
        setDescription(flavorText ? flavorText.flavor_text : 'No description available.');
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [name]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error loading Pokémon details. Please try again later.</div>;
  }

  if (!pokemon) {
    return <div>Pokémon not found</div>;
  }

  return (
    <Container className="pokemon-details-container">
      <div className="pokemon-details">
        <Typography variant="h4" component="h2" gutterBottom>
          {pokemon.name}
        </Typography>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <Typography variant="body1">Height: {pokemon.height}</Typography>
        <Typography variant="body1">Weight: {pokemon.weight}</Typography>
        <Typography variant="body1">Base Experience: {pokemon.base_experience}</Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Back to List
        </Button>
      </div>
    </Container>
  );
}

export default PokemonDetails;