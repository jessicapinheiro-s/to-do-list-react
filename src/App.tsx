import React, { useState, useEffect } from 'react';
import EntradaDados from './components/entrada-dados';
import { ListaTasks } from './components/lista-tasks';
import Task from './components/task';
import './styles/style.css';
import { Session } from '@supabase/supabase-js';
import { supabase } from './supabaseClient';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/meuperfil';
import MenuLateral from './components/menu-lateral';
interface TaskProps {
  taskmessage: string;
  dataAtual: string;
  tipoTask: string;

}

function App() {
  const [taskMessage, setTaskMessage] = useState<TaskProps[]>([]);
  const [arrayTask, setArrayTask] = useState<TaskProps[]>([]);
  const [session, setSession] = useState<Session | null>(null)

  const supabaseSession = supabase;

  useEffect(() => {
    supabaseSession.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabaseSession.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleEnviarTask = (mensagem: any) => {
    setTaskMessage(mensagem);
    setArrayTask(prevArray => [...prevArray, mensagem]);
  };

  return (
    <div className="App">
      <EntradaDados onEnviar={handleEnviarTask} />
      <ListaTasks>
        {taskMessage != undefined ? <Task childContent={arrayTask} /> : null}
      </ListaTasks>
      
    </div>
  );
}

export default App;
