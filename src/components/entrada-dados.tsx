import '../styles/style.css'
import { IoMdAdd } from "react-icons/io";
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import MenuLateral from './menu-lateral';
import React from 'react';
import { ListaTasks } from './lista-tasks';

interface TaskPropsObj {
    taskmessage: string;
    dataAtual: string;
    tipoTask: string;
  
  }
  


export default function EntradaDados() {
    const [option, setOption] = useState('');
    const [menu, setMenuAberto] = useState('');
    const [valorInput, setValorInput] = useState('');
    const dataAtual: string = new Date().toLocaleDateString();
    const [arrayTask, setArrayTask] = useState<TaskPropsObj[]>([]);
    
    const categoriasTask = [
        "Selecione um tipo",
        "Diárias",
        "Semanais",
        "Mensais",
        "Anuais"
    ]

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValorInput(event.target.value);
    };

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(event.target.value);
    };
    const handleMenu = () => {
        menu === '' ? setMenuAberto('aberto') : setMenuAberto('');
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (valorInput === '' || option === '') {
            alert('Campo vazio preencha corretamente');
            return;
        }else{

            const propsTask = {
                taskmessage: valorInput,
                dataAtual: dataAtual,
                tipoTask: option
            };
    
            
            setArrayTask(prevArray => [...prevArray, propsTask]);
       
            // Limpa o valor do input
            setValorInput('');
    
        }
       

    };
    return (
        <div className='container-input'>
            <div className="entrada-de-dados" >
                <input type="text" id="inTarefa" placeholder=" Tarefa" onChange={handleChange} value={valorInput}></input>
                <select name="" id="" value={option} onChange={handleChangeSelect}>
                    {
                        categoriasTask.map(categoria => (
                            <option key={categoria} value={categoria}>{categoria}</option>
                        ))
                    }
                </select>
                <button type='submit' id="btAdd" onClick={handleSubmit}><IoMdAdd /></button>
                <IoMdMenu className='icon-user' onClick={handleMenu} />
                {
                    menu != '' ? <MenuLateral funcCloseMenu = {handleMenu}/> : null
                }
                <ListaTasks childContent={arrayTask}/>
            </div>
        </div>
    )
}


