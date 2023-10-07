import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

import api from '../../services/api'

import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'

export default function Login(){

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();
        
        const data = {
            userName,
            password,
        };

        try {
            const response = await api.post('auth/signin', data);
            localStorage.setItem('userName', userName);
            localStorage.setItem('accessToken', response.data.accessToken);

            navigate('/books')
        } catch (err) {
            alert('Login failed! Try agains!');
        }
    };

    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Erudio Logo"/>
                <form onSubmit={login}>
                    <h1>Acess your Acccount</h1>
                    <input
                     placeholder="UserName"
                     value={userName}
                     onChange={e => setUserName(e.target.value)}
                />
                <input 
                    type="password" placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                    <button className="button" type="submit">Login</button>
                </form>

            </section>

            <img src={padlock} alt="Login"/>
        </div>
    )
}