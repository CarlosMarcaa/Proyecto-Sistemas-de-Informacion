/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/*import { React, useState, useEffect } from "react";
 import { Link } from "react-router-dom";*/

import unimetLogo from '/logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={unimetLogo} className="logo" alt="Unimet logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Agrupaciones</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Selecciones Deportivas</a></li>
                </ul>

                <button className="d-flex btn" type="submit">
                    Inicio de Sesión
                </button>
                <button className="d-flex btn btn-registro" type="submit">
                    Registrarse
                </button>
                </div>
            </div>
        </nav>


    )
}

export default Navbar