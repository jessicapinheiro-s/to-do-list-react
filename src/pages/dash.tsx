import '../styles/style.css';

import EntradaDados from '../components/entrada-dados';
import {ListaTasks} from '../components/lista-tasks';

function DashTask (){
    return(
        <div>
            <EntradaDados />
            <ListaTasks/>
        </div>
    )
}

export default Object.assign({
    Page: <DashTask />,
  }) as {
    Page: React.ReactNode;
  };