import './login.css';
import Header from '../header/header';
import logo from "../../assets/LogoUnimet.svg";
import { NavLink } from 'react-router-dom';
import { auth } from "../../services/firebase";
import { useState } from 'react';

export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const functionAuth = async (e) => {

    }
    return (
        <>
            <Header></Header>
            <div className='login'>
                <div className='column'>
                    <img src={logo} alt="logo" className='hero-logo' />

                    <div className='login-form-container'>
                        <form className="login-form" action="">
                            <label htmlFor='email'>Correo</label>
                            <input type="text" id="email" placeholder='user@email.some' />
                            <label className='label' htmlFor='email'>Contraseña</label>
                            <input type="password" id="password" placeholder='password' />
                            <NavLink className="forgort">¿Has olvidado tu contraseña?</NavLink>
                            <NavLink className="nav" to="/register"><button className='login-button'>Iniciar Sesión</button></NavLink>
                            <NavLink to="/register" className='register-link'>Regístrate</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}