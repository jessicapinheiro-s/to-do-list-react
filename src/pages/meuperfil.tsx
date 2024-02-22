import '../styles/style.css'
import { CiCalendarDate } from "react-icons/ci";
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

interface propsInfoUser{
    email:string;
    password: string;
}


export default function Login() {
    const [infoUser, setInfo] = useState({} as propsInfoUser);
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    
    const handleLogin = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        const { error } = await supabase.auth.signInWithPassword(infoUser)

        if (error) {
            alert(error.message)
        } else {
            alert('Check your email for the login link!')
        }
    }

    const handleInfoEmail=(event: any) =>{
        setEmail(event.target.value);
    }
    const handleInfoPassword=(event: any) =>{
        setPassword(event.target.value);
    }

    setInfo({
        email: userEmail,
        password: userPassword
    })

    return (
        <div className='info-cadastro' /*onClick={handleTask}*/>
            <form>
                <input type="email" value={userEmail} onChange={handleInfoEmail}/>
                <input type="password" value={userPassword} onChange={handleInfoPassword}/>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}