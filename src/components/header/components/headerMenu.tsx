import React, { useEffect } from 'react'
import {NavLink, useLocation, useParams} from "react-router-dom";

interface IMenuProps {

}

export const HeaderMenu:React.FC<IMenuProps> = () => {

    const location = useLocation()

    const menus = [
        {
            title: "Servers",
            link: "#servers"
        },
        {
            title: "Contacts",
            link: "#contacts"
        },
        {
            title: "Faq",
            link: "#faq"
        },
        {
            title: "Donates",
            link: "#donates"
        },
        {
            title: "News",
            link: "#news"
        },
        {
            title: "About",
            link: "#about"
        },
    ]

    return (
        <nav className="header__menu menu-header">
            <ul className="menu-header__list">

                {
                    menus.map(item =>
                        <li key={item.title} className="menu-header__item">
                            {location.pathname === '/' ? <a href={item.link} className="menu-header__link">
                                {item.title}
                            </a> :
                                <NavLink to={"/"+item.link} className="menu-header__link">
                                    {item.title}
                                </NavLink>
                            }
                        </li>
                    )
                }

            </ul>
        </nav>
    )
}
