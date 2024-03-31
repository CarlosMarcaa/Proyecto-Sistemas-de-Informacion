import { NavLink } from 'react-router-dom';
import './header.css';
import logo from "../../assets/LogoUnimet.svg"

export default function Header() {
    return (
        <>
            <div className='header'>
                <div className='row'>
                    <img src={logo} alt="logo" className='logo' />
                    <ul className='row row-list'>
                        <li><NavLink to="/" className="nav">Inicio</NavLink></li>
                        <li><NavLink to="/groups" className="nav">Agrupaciones</NavLink></li>
                        <li><NavLink to="/sports" className="nav">Selecciones Deportivas</NavLink></li>
                    </ul>
                </div>

                <div className='row'>
                    <ul className='row row-list'>
                        <li><NavLink to="/login" className="nav">Inicio de Sesión</NavLink></li>
                        <NavLink to="/register" className="nav"><button className='sign-up'>Registrarse</button></NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}