// src/components/SearchBar.js
import React from 'react';

function SearchBar({ setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      onChange={handleChange}
    />
  );
}

export default SearchBar;