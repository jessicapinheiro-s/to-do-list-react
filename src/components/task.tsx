import '../styles/style.css'
import { CiCalendarDate } from "react-icons/ci";

interface  TaskProps{
    childContent:{
        taskmessage: string;
        dataAtual: string;
        tipoTask: string;
    }
   
}

export default function Task({ childContent }: TaskProps ) {

    const { taskmessage, dataAtual, tipoTask } = childContent;
    return (
        <div className='task-card'>
           <p><CiCalendarDate/>{dataAtual}</p>
           <p>{taskmessage}</p>
           <p className='tipo-Task'>{tipoTask}</p>
           
        </div>
    )
}

