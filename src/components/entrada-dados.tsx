import Button from "./button";

export default function EntradaDados (){
    return(
        <div>
            <div className="subContainer">
                <div className="entrada-de-dados">
                    <input type="text" id="inTarefa" placeholder=" Tarefa"></input>
                    <button id="btAdd">+</button>
                </div>
                <div className="list-tasks">
                    <ul id="lista"></ul>
                </div>
            </div>
            <div className="bts-laterais">
                <div className="container-bt-tarefa-concluida" id="container-bt-tarefa-concluida">
                    <i className='bx bx-check'></i>
                </div>
                <div className="container-bt-excluir" id="container-bt-excluir">
                    <i className='bx bxs-trash-alt'></i>
                </div>
            </div>
        </div>
    )
}

