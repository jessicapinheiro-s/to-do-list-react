import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuLateral from './components/menu-Lateral';
import EntradaDados from './components/entrada-dados';

function App() {
  return (
    <div className="App">
      <MenuLateral></MenuLateral>
      <EntradaDados></EntradaDados>
    </div>
  );
}

export default App;
