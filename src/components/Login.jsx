/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/*import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";*/

import Navbar from './Navbar'
import unimetLogo from '/logo.svg'

const Login = () => {
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
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label htmlFor="floatingInput">Correo Electronico</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label htmlFor="floatingPassword">Contraseña</label>
                                </div>
                                <a href="#" className="btn btn-login">Iniciar Sesion</a>
                                <a href="#" className="btn-login-registro">Registrate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login