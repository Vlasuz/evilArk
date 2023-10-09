import React, { useEffect } from 'react'
import {NavLink} from "react-router-dom";

interface IMenuProps {

}

export const Menu:React.FC<IMenuProps> = () => {

    return (
        <nav className="header__menu menu-header">
            <ul className="menu-header__list">
                <li className="menu-header__item">
                    <a href="" className="menu-header__link">Inicio</a>
                </li>
                <li className="menu-header__item">
                    <a href="" className="menu-header__link">conocenos</a>
                </li>
                <li className="menu-header__item">
                    <a href="/#contacto" className="menu-header__link">contacto</a>
                </li>
                <li className="menu-header__item">
                    <a href="" className="menu-header__link">server</a>
                </li>
                <li className="menu-header__item">
                    <NavLink to={'/faq'} className="menu-header__link">faq</NavLink>
                </li>
                <li className="menu-header__item">
                    <a href="#donaciones" className="menu-header__link">donaciones</a>
                </li>
                <li className="menu-header__item">
                    <a href="" className="menu-header__link">casino</a>
                </li>
                <li className="menu-header__item">
                    <a href="" className="menu-header__link">tienda</a>
                </li>
                <li className="menu-header__item">
                    <a href="" className="menu-header__link">mapas</a>
                </li>
            </ul>
        </nav>
    )
}
