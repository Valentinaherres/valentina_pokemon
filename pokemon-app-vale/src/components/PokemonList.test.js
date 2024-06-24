// src/components/PokemonList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PokemonList from './PokemonList';
import { PokemonProvider } from '../context/PokemonContext';

test('renders Pokémon list', async () => {
  render(
    <BrowserRouter>
      <PokemonProvider>
        <PokemonList />
      </PokemonProvider>
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/Add Pokémon/i);
  expect(linkElement).toBeInTheDocument();
});