// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { PokemonContext } from '../context/PokemonContext';
// import './PokemonList.css';
// import SearchBar from './SearchBar'; // Asegúrate de tener este componente o retíralo si no lo estás usando

// function PokemonList() {
//   const { pokemonList, setPokemonList, favorites, addFavorite, removeFavorite, deletePokemon } = useContext(PokemonContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * 20}&limit=20`)
//       .then(response => {
//         setPokemonList(response.data.results);
//         setTotalPages(Math.ceil(response.data.count / 20));
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, [currentPage, setPokemonList]);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const isFavorite = (pokemonName) => {
//     return favorites.some(favorite => favorite.name === pokemonName);
//   };

//   const filteredPokemonList = pokemonList.filter(pokemon =>
//     pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="pokemon-list-container">
//       <h2>Pokémon List</h2>
//       <SearchBar setSearchQuery={setSearchQuery} />
//       <Link to="/add">Add Pokémon</Link>
//       <ul className="pokemon-list">
//         {filteredPokemonList.map(pokemon => (
//           <li key={pokemon.name}>
//             <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
//             <button onClick={() => deletePokemon(pokemon.name)}>Delete</button>
//             {isFavorite(pokemon.name) ? (
//               <button onClick={() => removeFavorite(pokemon.name)}>Remove from Favorites</button>
//             ) : (
//               <button onClick={() => addFavorite(pokemon)}>Add to Favorites</button>
//             )}
//           </li>
//         ))}
//       </ul>
//       <div className="pagination-controls">
//         <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
//       </div>
//       <h3>Favorite Pokémon</h3>
//       <ul className="favorites-list">
//         {favorites.map(pokemon => (
//           <li key={pokemon.name}>
//             <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
//             <button onClick={() => removeFavorite(pokemon.name)}>Remove from Favorites</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PokemonList;

// src/components/PokemonList.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import './PokemonList.css';
import SearchBar from './SearchBar';
import { CircularProgress, Button } from '@mui/material';

function PokemonList() {
  const { pokemonList, setPokemonList, favorites, addFavorite, removeFavorite, deletePokemon } = useContext(PokemonContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * 20}&limit=20`);
        setPokemonList(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 20));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, setPokemonList]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setLoading(true);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setLoading(true);
    }
  };

  const isFavorite = (pokemonName) => {
    return favorites.some(favorite => favorite.name === pokemonName);
  };

  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div className="pokemon-list-container">
      <h2>Pokémon List</h2>
      <SearchBar setSearchQuery={setSearchQuery} />
      <Link to="/add">Add Pokémon</Link>
      <ul className="pokemon-list">
        {filteredPokemonList.map(pokemon => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            <button onClick={() => deletePokemon(pokemon.name)}>Delete</button>
            {isFavorite(pokemon.name) ? (
              <button onClick={() => removeFavorite(pokemon.name)}>Remove from Favorites</button>
            ) : (
              <button onClick={() => addFavorite(pokemon)}>Add to Favorites</button>
            )}
          </li>
        ))}
      </ul>
      <div className="pagination-controls">
        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
      </div>
      <h3>Favorite Pokémon</h3>
      <ul className="favorites-list">
        {favorites.map(pokemon => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            <button onClick={() => removeFavorite(pokemon.name)}>Remove from Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;