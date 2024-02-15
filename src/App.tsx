import React from 'react';
import EntradaDados from './components/entrada-dados';
import ListaTasks from './components/lista-tasks';
import ButtonsLaterais from './components/buttons-laterais';
import MinhaConta from './components/minha-conta';
import Task from './components/task';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <EntradaDados></EntradaDados>
      <ListaTasks></ListaTasks>
      <ButtonsLaterais></ButtonsLaterais>
    </div>
  );
}

export default App;
