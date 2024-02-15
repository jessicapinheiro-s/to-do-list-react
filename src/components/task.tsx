import '../styles/style.css'
import { CiCalendarDate } from "react-icons/ci";


export default function Task(taskmessage: string, dataAtual: string, tipoTask: string) {
    return (
        <div className='task-card'>
            <p><CiCalendarDate /> {dataAtual}</p>
            <p>{taskmessage}</p>
            <p className='Tipo-Task'>{tipoTask}</p>
        </div>
    )
}

