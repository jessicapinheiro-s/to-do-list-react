import '../styles/style.css'
import { CiCalendarDate } from "react-icons/ci";
import { FaTrash } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

interface TaskProps {
    TaskProperty: TaskProperty;
}
interface TaskProperty {
    taskmessage?: string,
    dataAtual?: string,
    tipoTask?: string
}

const Task: React.FC<TaskProps> = ({TaskProperty}) => {

    return (
        <div className='task-card' >
            <div className='content-task'>
                <p><CiCalendarDate />{TaskProperty.dataAtual}</p>
                <p className='nome-task'>{TaskProperty.taskmessage}</p>
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
                <p className={'tipo-Task' + (TaskProperty.tipoTask != undefined ? verificaCores(TaskProperty.tipoTask) : null)}>{TaskProperty.tipoTask}</p>

            </div>
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


