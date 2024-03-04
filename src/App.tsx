import React, { useState, useEffect } from 'react';
import EntradaDados from './components/entrada-dados';
import { ListaTasks } from './components/lista-tasks';
import Task from './components/task';
import './styles/style.css';
import { Session } from '@supabase/supabase-js';
import { supabase } from './supabaseClient';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { RouteHandler } from "../src/routers/roters";
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

  {handleEnviarTask}
  return (
    <div className="App">
      <RouteHandler/>
      
    </div>
  );
}

export default App;
