import React, { useState } from 'react'
import Navbar from './Navbar'
import unimetLogo from '/logo.svg'
import firebase from '../services/firebase'

const RegisterC = () => {

    const [id, setId] = useState('')
    const [idc, setIdc] = useState('')
    const [carrer, setCarrer] = useState('')

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
                                            <input type="text" className="form-control" id="floatingInput" placeholder="30123456" value={id} onChange={e => setId(e.target.value)}/>
                                            <label htmlFor="floatingInput">Cedula</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="20181110001" value={idc} onChange={e => setIdc(e.target.value)}/>
                                            <label htmlFor="floatingInput">Carnet</label>
                                        </div>

                                        <div class="form-floating mb-3">
                                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example" value={carrer} onChange={e => setCarrer(e.target.value)}>
                                                <option selected>Carrera</option>
                                                <option value="1">Ingenieria</option>
                                                <option value="2">Ingenieria</option>
                                                <option value="3">Ingenieria</option>
                                            </select>
                                            <label for="floatingSelect">Carrera</label>
                                        </div>
                                        <a href="#" className="btn btn-login" onClick={onRegister}>Registrarse</a>
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
    async function onRegister(){
        var aux = 0
        try{
           await firebase.register(id, idc, carrer)
        } catch(error){
            aux = 1
            alert(error.message)
        }
        if (aux == 0) { window.location.href = '/dashboard';}
    }   
}

export default RegisterC