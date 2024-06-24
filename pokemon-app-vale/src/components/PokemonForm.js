// src/components/PokemonForm.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { PokemonContext } from '../context/PokemonContext';

function PokemonForm() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const { addPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPokemon({ name, url });
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2" gutterBottom>
        Add Pokémon
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="green" fullWidth>
          Add Pokémon
        </Button>
      </form>
    </Container>
  );
}

export default PokemonForm;