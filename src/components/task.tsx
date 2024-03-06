import '../styles/style.css'
import { CiCalendarDate } from "react-icons/ci";
import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
interface TaskProps {
    childContent: das[];
}
interface das {
    taskmessage?: string,
    dataAtual?: string,
    tipoTask?: string

}

const Task: React.FC<TaskProps> = ({ childContent }) => {
    
    return (
        <div className='list-tasks' >
            {childContent.map((f, key) => (
                <div className='task-card' key={key}>
                    <div className='content-task'>
                        <p><CiCalendarDate />{f.dataAtual}</p>
                        <p className='nome-task'>{f.taskmessage}</p>
                    </div>

                    <div className="bts-laterais">
                        <div className="container-bt-tarefa-concluida" id="container-bt-tarefa-concluida">
                            <FaTrash />
                        </div>
                        <div className="container-bt-excluir" id="container-bt-excluir">
                            <FaCheck />
                        </div>
                    </div>
                    <div className='task-type'>
                        <p className={'tipo-Task' + (f.tipoTask != undefined ? verificaCores(f.tipoTask) : null)}>{f.tipoTask}</p>

                    </div>
                </div>
            ))}
        </div>
    )
}

function verificaCores(item: string) {
    if (item === 'Diárias') {
        return ' diarias';
    } else if (item === 'Semanais') {
        return ' semanais';

    } else if (item === 'Mensais') {
        return ' mensais';

    } else if (item === 'Anuais') {
        return ' anuais';

    } else {
        return '';

    }
}
export default Task;


