import '../styles/style.css'
import { CiCalendarDate } from "react-icons/ci";

interface TaskProps {
    childContent: das[];
}
interface das {
    taskmessage?: string,
    dataAtual?: string,
    tipoTask?: string

}

const task: React.FC<TaskProps> = ({ childContent }) => {
    return (
        <div>
            {childContent.map((f, index) => (
                <div className='task-card' key={index}>
                    <p><CiCalendarDate />{f.dataAtual}</p>
                    <p>{f.taskmessage}</p>
                    <p className='tipo-Task'>{f.tipoTask}</p>
                </div>
            ))}
        </div>
    )
}
export default task;
/*export default function Task({ childContent }: TaskProps) {
    return (
       childContent.map(f => {
        <div className='task-card'>
        <p><CiCalendarDate />{f.dataAtual}</p>
        <p>{f.taskmessage}</p>
        <p className='tipo-Task'>{f.tipoTask}</p>

    </div>
       })
    )
}*/

