// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { PokemonProvider } from './context/PokemonContext';
// import PokemonList from './components/PokemonList';
// import PokemonDetails from './components/PokemonDetails';
// import PokemonForm from './components/PokemonForm';
// import UserProfile from './components/UserProfile';
// import Login from './components/Login';
// import Header from './components/Header';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';

// function App() {
//   return (
//     <I18nextProvider i18n={i18n}>
//       <Router>
//         <PokemonProvider>
//           <Header />
//           <Routes>
//             <Route path="/" element={<PokemonList />} />
//             <Route path="/pokemon/:name" element={<PokemonDetails />} />
//             <Route path="/add" element={<PokemonForm />} />
//             <Route path="/profile" element={<UserProfile />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </PokemonProvider>
//       </Router>
//     </I18nextProvider>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import PokemonForm from './components/PokemonForm';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Header from './components/Header';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
//<Router basename="/valentina_pokemon/pokemon-app-vale">

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router basename="/valentina_pokemon/pokemon-app-vale">
        <PokemonProvider>
          <Header />
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
            <Route path="/add" element={<PokemonForm />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </PokemonProvider>
      </Router>
    </I18nextProvider>
  );
}

export default App;