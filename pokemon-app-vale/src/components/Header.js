// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1 className="header-title">Valentina Pokémon App</h1>
      <h1 className="header-title">Internship 2024 hatchworks Test</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/profile">Profile</Link></li>
          <li className="nav-item"><Link to="/add">Add Pokémon</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
