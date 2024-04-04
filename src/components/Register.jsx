import Navbar from './Navbar'
import unimetLogo from '/logo.svg'
import React, { useState } from 'react'
import firebase from '../services/firebase'

const Register = () => {

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [gender, setGender] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

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
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={name} onChange={e => setName(e.target.value)}/>
                                            <label htmlFor="floatingInput">Nombre</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={lastname} onChange={e => setLastname(e.target.value)}/>
                                            <label htmlFor="floatingInput">Apellido</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)}/>
                                            <label htmlFor="floatingInput">Correo Electronico (Unimet)</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                            <label htmlFor="floatingPassword">Contraseña</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={confirmpassword} onChange={e => setConfirmpassword(e.target.value)}/>
                                            <label htmlFor="floatingPassword">Confirmar contraseña</label>
                                        </div>

                                        <div class="form-floating mb-3">
                                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example" value={gender} onChange={e => setGender(e.target.value)}>
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
                                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={day} onChange={e => setDay(e.target.value)}/>
                                                <label htmlFor="floatingInput">Día</label>
                                            </div>

                                            <div class="form-floating mb-3 form-select-mes">
                                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example" value={month} onChange={e => setMonth(e.target.value)}>
                                                    <option selected>Mes</option>
                                                    <option value="1">Enero</option>
                                                    <option value="2">Febrero</option>
                                                    <option value="3">Marzo</option>
                                                    <option value="4">Abril</option>
                                                    <option value="5">Mayo</option>
                                                    <option value="6">Junio</option>
                                                    <option value="7">Julio</option>
                                                    <option value="8">Agosto</option>
                                                    <option value="9">Septiembre</option>
                                                    <option value="10">Octubre</option>
                                                    <option value="11">Noviembre</option>
                                                    <option value="12">Diciembre</option>
                                                </select>
                                                <label for="floatingSelect">Mes</label>
                                            </div>
                                            <div className="form-floating mb-3 form-control-year">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={year} onChange={e => setYear(e.target.value)}/>
                                                <label htmlFor="floatingInput">Año</label>
                                            </div>
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
           await firebase.register(name, lastname, email, password)
        } catch(error){
            aux = 1
            alert(error.message)
        }
        if (aux == 0) { window.location.href = '/registerc';}
    }   
}

export default Register