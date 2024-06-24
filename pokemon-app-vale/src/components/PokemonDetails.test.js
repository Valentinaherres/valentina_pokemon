// src/components/PokemonDetails.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import { PokemonProvider } from '../context/PokemonContext';

test('renders Pokémon details', async () => {
  render(
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
          <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
  );

  const backButton = screen.getByText(/Back to List/i);
  expect(backButton).toBeInTheDocument();
});