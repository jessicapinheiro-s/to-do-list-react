import '../styles/style.css';
interface ListaTasksProps {
    children?: React.ReactNode;
}

function ListaTasks({ children }: ListaTasksProps) {
    return (
        <div className='container-task'>
            <div className="list-tasks">
                {children}
            </div>
        </div>
    )
}
export { ListaTasks };
