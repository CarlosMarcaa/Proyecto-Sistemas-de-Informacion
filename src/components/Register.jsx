/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/*import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";*/

import Navbar from './Navbar'
import unimetLogo from '/logo.svg'

const Register = () => {
    return (
        <>
            
            <div className="fondo-register">
                <Navbar/>
                
                <div className="register">
                    <div className="card-con-logo-registro">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                            <label htmlFor="floatingInput">Nombre</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                            <label htmlFor="floatingInput">Apellido</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                            <label htmlFor="floatingInput">Correo Electronico (Unimet)</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                            <label htmlFor="floatingPassword">Contraseña</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                            <label htmlFor="floatingPassword">Confirmar contraseña</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                <option selected>Género</option>
                                                <option value="1">Hombre</option>
                                                <option value="2">Mujer</option>
                                                <option value="3">Otro</option>
                                            </select>
                                            <label for="floatingSelect">Género</label>
                                        </div>
                                        
                                        <p>Fecha de nacimiento:</p>
                                        <div className="fecha_nacimiento_inputs">
                                            <div className="form-floating mb-3 form-control-dia">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                <label htmlFor="floatingInput">Día</label>
                                            </div>
                                            <div className="form-floating mb-3 form-select-mes">
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                    <option selected>Mes</option>
                                                    <option value="1">Enero</option>
                                                    <option value="2">Febrero</option>
                                                    <option value="3">Marzo</option>
                                                </select>
                                                <label for="floatingSelect">Mes</label>
                                            </div>
                                            <div className="form-floating mb-3 form-control-year">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                <label htmlFor="floatingInput">Año</label>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-login">Registrarse</a>
                                    </div>
                                </div>
                                <div className="col-md-5 imagen-derecha">
                                    <img src={unimetLogo} className="" alt="Unimet logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                


            </div>

        </>
    )
}

export default Register