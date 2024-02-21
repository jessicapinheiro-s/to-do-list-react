import '../styles/style.css';
interface ListaTasksProps {
    children?: React.ReactNode;
}

function ListaTasks({ children }: ListaTasksProps) {
    return (
        <div className='container-task'>
                {children}
        </div>
    )
}
export { ListaTasks };
