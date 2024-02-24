import '../styles/style.css'
import { IoMdAdd } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";

import React from 'react';

export default function EntradaDados({ onEnviar }: any) {
    const [option, setOption] = useState('');
    const [valorInput, setValorInput] = useState('');
    const dataAtual: string = new Date().toLocaleDateString();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValorInput(event.target.value);
    };

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(event.target.value);
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (valorInput === '') {
            alert('Campo vazio preencha corretamente');
        }

        const propsTask = {
            taskmessage: valorInput,
            dataAtual: dataAtual,
            tipoTask: option
        };

        // Chama a função onEnviar com as propsTask como argumento
        onEnviar(propsTask);

        // Limpa o valor do input
        setValorInput('');
    };
    return (
        <div className='container-input'>
            <div className="entrada-de-dados" >
                <input type="text" id="inTarefa" placeholder=" Tarefa" onChange={handleChange} value={valorInput}></input>
                <select name="" id="" value={option} onChange={handleChangeSelect}>
                    <option value="Diárias">Diárias</option>
                    <option value="Semanais">Semanais</option>
                    <option value="Mensais">Mensais</option>
                    <option value="Anuais">Anuais</option>
                </select>
                <button type='submit' id="btAdd" onClick={handleSubmit}><IoMdAdd /></button>
                <IoMdMenu className='icon-user' />
            </div>
        </div>
    )
}

