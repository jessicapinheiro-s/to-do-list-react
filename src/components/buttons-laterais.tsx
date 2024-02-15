import '../styles/style.css'
import { FaTrash } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";



export default function ButtonsLaterais() {
    return (
        <div className="bts-laterais">
                    <div className="container-bt-tarefa-concluida" id="container-bt-tarefa-concluida">
                    <FaTrash />
                    </div>
                    <div className="container-bt-excluir" id="container-bt-excluir">
                    <FaCheck />
                    </div>
                </div>
    )
}

