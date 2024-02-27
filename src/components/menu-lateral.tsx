import '../styles/style.css';
import { IoClose } from "react-icons/io5";


function MenuLateral({funcCloseMenu}: any ) {
    const closeMenu = <IoClose className='close-Menu-icon' onClick={funcCloseMenu}/>;
    const categoriasTask = [
        "Diárias",
        "Semanais",
        "Mensais",
        "Anuais",
        "Minha Conta",
        closeMenu
    ]
    return (
        <div className={'menu-lateral'}>
            <nav  >
                <ul>
                    {
                        categoriasTask.map(categoria => (
                            <li key={categoria.toString()}>{categoria}</li>
                        ))
                    }
                </ul>
            </nav>
        </div>

    )
}


export default MenuLateral;


