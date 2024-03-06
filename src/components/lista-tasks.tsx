import '../styles/style.css';

import Task from './task';

interface TaskProps {
    childContent?: TaskPropsSecond[];
}
interface TaskPropsSecond {
    taskmessage?: string,
    dataAtual?: string,
    tipoTask?: string

}
function ListaTasks({ childContent }: TaskProps) {
    console.log(childContent);
    return (
        <div className='container-task'>
            <div className='list-tasks' >
                {
                    childContent?.map((f, key) => (
                        <Task TaskProperty={f} key={key} />
                    ))
                }
            </div>
        </div>
    )
}



export { ListaTasks };
