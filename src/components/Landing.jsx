/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/*import { React, useState, useEffect } from "react";
 import { Link } from "react-router-dom";*/

import Navbar from './Navbar'
import FotoInicio from '/foto_inicio.png'
import unimetLogo from '/logo.svg'

const Landing = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 header-l">
                        <div className="mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 className="mb-2">Conoce y conecta</h1>
                            <p className="lead fw-normal  mb-3">
                                Busca el grupo o selección que más se adapte a ti y postulate
                            </p>
                            <button className="d-flex btn" type="submit">
                                Buscar Grupo
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-8 header-r">
                        <img src={FotoInicio} className="foto-inicio" alt="Foto Inicio" />
                    </div>
                </div>
            </div>
            
            <div className="Text-inicio">
                <h3 className="lead texto-inicio">
                    Esta App nace en vista a la dificultad que posee la Universidad Metropolitana para promocionar
                     actividades extracurriculares debido a sus métodos de difusión limitados y falta de accesibilidad 
                     a la información, lo que impide la captación efectiva de nuevos estudiantes para estas actividades.
                </h3>
            </div>

            <div className="container">
                <div className="row mision-vision">
                    <div className="col-lg-4 mision">
                        <div className="mb-5 mb-lg-0 text-center text-lg-start">
                            <h2 className="mb-2">Misión</h2>
                            <p className="fw-normal  mb-3">
                            Crear un espacio accesible para los estudiantes, que sirva para difundir información sobre agrupaciones 
                            estudiantiles y fomente la participación en actividades que desarrollen habilidades blandas.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 imagen-central">
                        <img src={unimetLogo} className="logo-central" alt="Unimet logo" />
                    </div>
                    <div className="col-lg-4 vision">
                        <div className="mb-5 mb-lg-0 text-center text-lg-start">
                            <h2 className="mb-2">Visión</h2>
                            <p className="fw-normal  mb-3">
                            Establecer una plataforma de conexión entre estudiantes para enriquecer la experiencia universitaria,
                            promoviendo la interacción y el apoyo mutuo más allá del ámbito académico.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Landing