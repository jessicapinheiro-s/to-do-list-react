import React, { useState } from 'react';
import EntradaDados from './components/entrada-dados';
import { ListaTasks } from './components/lista-tasks';
import ButtonsLaterais from './components/buttons-laterais';
import Task from './components/task';
import './styles/style.css';
interface TaskProps {
  taskmessage: string;
  dataAtual: string;
  tipoTask: string;

}

function App() {
  const [taskMessage, setTaskMessage] = useState<TaskProps[]>([]);
  const [arrayTask, setArrayTask] = useState<TaskProps[]>([]);

  const handleEnviarTask = (mensagem: any) => {
    setTaskMessage(mensagem);
    setArrayTask(prevArray => [...prevArray, mensagem]); 
  };

  return (
    <div className="App">
     <EntradaDados  onEnviar={handleEnviarTask}/>
      <ListaTasks>
        {taskMessage != undefined ? <Task childContent={arrayTask}/> : null}
      </ListaTasks>
      <ButtonsLaterais></ButtonsLaterais>
    </div>
  );
}

export default App;
