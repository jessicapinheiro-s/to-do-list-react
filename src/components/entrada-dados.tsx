import '../styles/style.css'
import { IoMdAdd } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { useState } from 'react';
import React from 'react';
import Task from './task';

export default function EntradaDados() {
    const [task,setTask] = useState();
    return (
        <div className='container-input'>
            <div className="entrada-de-dados">
                <input type="text" id="inTarefa" placeholder=" Tarefa"></input>
                <select name="" id="">
                    <option value="">Diárias</option>
                    <option value="">Semanais</option>
                    <option value="">Mensais</option>
                    <option value="">Anuais</option>
                </select>
                <button id="btAdd"><IoMdAdd /></button>
                <FaCircleUser  className='icon-user'/>
            </div>
        </div>
    )
}

