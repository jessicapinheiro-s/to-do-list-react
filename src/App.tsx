import React, { useState } from 'react';
import EntradaDados from './components/entrada-dados';
import { ListaTasks } from './components/lista-tasks';
import ButtonsLaterais from './components/buttons-laterais';
import Task from './components/task';
import './styles/style.css';
interface  TaskProps{
      taskmessage: string;
      dataAtual: string;
      tipoTask: string;
 
}

function App() {

  const [taskMessage, setTaskMessage] = useState({} as TaskProps);

  const handleEnviarTask = (mensagem: any) => {
    setTaskMessage(mensagem); // Atualiza o estado com a mensagem recebida do input
  };
  console.log(taskMessage)
  return (
    <div className="App">
      <EntradaDados onEnviar={handleEnviarTask} />
      <ListaTasks>
        <Task childContent = {taskMessage} />
      </ListaTasks>
      <ButtonsLaterais></ButtonsLaterais>
    </div>
  );
}

export default App;
