import { useState } from "react";
import '../styles/style.css';
import { useSupabaseClient } from "@supabase/auth-helpers-react";

function Cadastro() {
    //Definindo Estado
    const supabaseClient = useSupabaseClient();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //função que irá retornar algo
    const handleCadastro = async (event: any) => {
        event.preventDefault();
        ///tratandoDados();

        limparCampo();

        setLoading(true);
        const { error } = await supabaseClient.auth.signUp({ email, password});

        if (error) {
            alert(error.message);
        } else {
            alert('Check your email for the login link!');
        }
        setLoading(false);
    }
    const limparCampo = () => {
        setEmail('');
        setPassword('');
    }

    //função para criar, obter e remover dados do localStorage 
    /*function tratandoDados() {

        let listaUsers: UserProps[] = JSON.parse(localStorage.getItem('listaUsers') || '[]');

        listaUsers.push({
            email: email.toLocaleLowerCase().trimEnd().trimStart(),
            password: password.toLocaleLowerCase(),
        })

        localStorage.setItem('listaUsers', JSON.stringify(listaUsers));
        limparCampo();
    }*/


    return (
        <div className="container-form">
            <form className='modal-bg' onSubmit={handleCadastro}>
                <div className='logo-cadastro'>
                    <img src="" alt="" />
                </div>
                <div className='inputs-login-form'>

                    <input
                        type="email"
                        id='inEmail'
                        placeholder='email'
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />

                    <input
                        type="password"
                        id='inSenha'
                        placeholder='password'
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className='container-buttons'>
                    <button className={'button-cadastrar'}  disabled={loading}>
                        {loading ? <span>Loading</span> : <span>Cadastrar</span>}
                    </button>
                </div>
            </form>
        </div>

    )
}
export default Object.assign({
    Page: <Cadastro />,
  }) as {
    Page: React.ReactNode;
  };