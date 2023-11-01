import React, { useEffect } from 'react'
import {NavLink, useLocation, useParams} from "react-router-dom";
import {Translate} from "../../translate/Translate";

interface IMenuProps {

}

export const HeaderMenu:React.FC<IMenuProps> = () => {

    const location = useLocation()

    const menus = [
        {
            title: <Translate>menu_servers</Translate>,
            link: "#servers"
        },
        {
            title: <Translate>menu_contacts</Translate>,
            link: "#contacts"
        },
        {
            title: <Translate>menu_faq</Translate>,
            link: "#faq"
        },
        {
            title: <Translate>menu_donates</Translate>,
            link: "#donates"
        },
        {
            title: <Translate>menu_news</Translate>,
            link: "#news"
        },
        {
            title: <Translate>menu_about</Translate>,
            link: "#about"
        },
    ]

    return (
        <nav className="header__menu menu-header">
            <ul className="menu-header__list">

                {
                    menus.map(item =>
                        <li key={item.link} className="menu-header__item">
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
