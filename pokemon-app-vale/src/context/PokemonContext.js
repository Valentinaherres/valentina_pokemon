// // src/context/PokemonContext.js
// import React, { createContext, useState } from 'react';

// export const PokemonContext = createContext();

// export const PokemonProvider = ({ children }) => {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   const addFavorite = (pokemon) => {
//     setFavorites([...favorites, pokemon]);
//   };

//   const removeFavorite = (pokemonName) => {
//     setFavorites(favorites.filter(pokemon => pokemon.name !== pokemonName));
//   };

//   return (
//     <PokemonContext.Provider value={{ pokemonList, setPokemonList, favorites, addFavorite, removeFavorite }}>
//       {children}
//     </PokemonContext.Provider>
//   );
// };


// src/context/PokemonContext.js
import React, { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (pokemon) => {
    setFavorites([...favorites, pokemon]);
  };

  const removeFavorite = (pokemonName) => {
    setFavorites(favorites.filter(pokemon => pokemon.name !== pokemonName));
  };

  return (
    <PokemonContext.Provider value={{ pokemonList, setPokemonList, favorites, addFavorite, removeFavorite }}>
      {children}
    </PokemonContext.Provider>
  );
};