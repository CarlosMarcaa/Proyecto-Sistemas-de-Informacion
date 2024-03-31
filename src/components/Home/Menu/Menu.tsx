import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import logo from "../../../assets/LogoUnimet.svg";
import { LogoBarrasNuevasIcon } from './LogoBarrasNuevasIcon.js';
import classes from './Menu.module.css';
import { TablerSearchIcon } from './TablerSearchIcon.js';
import {Link, NavLink } from "react-router-dom";
// @ts-ignore
import { Login } from '../../login/login.jsx';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 40:80 */
export const Menu: FC<Props> = memo(function Menu(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.menuDe}>
        <div className={classes.frame3}>
          <NavLink to="/login" className={classes.inicioDeSesion}>Inicio de Sesión</NavLink>
        </div>
        <div className={classes.frame4}>
          <NavLink to="/register" className={classes.register}>Registrarse</NavLink>
        </div>
      </div>
      <div className={classes.menuIz}>
        <div className={classes.frame1}>
          <NavLink to="/" className={classes.in}>Inicio</NavLink>
        </div>
        <div className={classes.frame2}>
          <NavLink to="/groups" className={classes.agrupaciones}>Agrupaciones</NavLink>
        </div>
        <div className={classes.frame5}>
          <NavLink to="/sports" className={classes.seleccionesDeportivas}>Selecciones Deportivas</NavLink>
        </div>
      </div>
      <div className={classes.logoBarrasNuevas}>
        <img src={logo} alt="logo" className='hero-logo' />
      </div>
    </div>
  );
});
