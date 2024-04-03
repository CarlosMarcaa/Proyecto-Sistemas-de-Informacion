/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/*import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";*/

import Navbar from './Navbar'
import unimetLogo from '/logo.svg'

const RegisterC = () => {
    return (
        <>
            
            <div className="fondo-register">
                <Navbar/>
                
                <div className="register">
                    <div className="card-con-logo-registro">
                        <div className="card mb-3">
                            
                            <h3 className="bienvenida-culminacion-registro">Bienvenido Pedro Perez</h3>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                            <label htmlFor="floatingInput">Cedula</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                            <label htmlFor="floatingInput">Carnet</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                <option selected>Carrera</option>
                                                <option value="1">Ingenieria</option>
                                                <option value="2">Ingenieria</option>
                                                <option value="3">Ingenieria</option>
                                            </select>
                                            <label for="floatingSelect">Carrera</label>
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

export default RegisterC