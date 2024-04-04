import Navbar from './Navbar'
import unimetLogo from '/logo.svg'
import React, { useState } from 'react'
import firebase from '../services/firebase'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            
            <div className="fondo-login">
                <Navbar/>
                <div className="login">
                    <div className="card-con-logo">
                        <img src={unimetLogo} className="" alt="Unimet logo" />
                    
                        <div className="card">
                            <div className="card-body">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)}/>
                                    <label htmlFor="floatingInput">Correo Electronico</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                    <label htmlFor="floatingPassword">Contraseña</label>
                                </div>
                                <a className="btn btn-login" onClick={login}>Iniciar Sesion</a>
                                <a href="/register" className="btn-login-registro">Registrate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
    async function login(){
        var aux = 0
        try{
            await firebase.login(email, password)
        } catch(error){
            aux = 1
            alert(error.message)
        } 
        if (aux == 0) { window.location.href = '/dashboard';}
}
}

export default Login