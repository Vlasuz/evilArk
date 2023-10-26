import React, {useEffect, useState} from 'react'
import {NavLink, useLocation} from "react-router-dom";

interface IProfileSidebarProps {

}

export const ProfileSidebar: React.FC<IProfileSidebarProps> = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const location = useLocation()
    const mobileWidth = window.innerWidth < 600

    const routes: any = [
        {
            link: "/profile",
            text: "Profile",
            icon: "#profile"
        },
        {
            link: "/bonuses",
            text: "My bonuses",
            icon: "#bonuses"
        },
        {
            link: "/purchases",
            text: "My purchases",
            icon: "#cart"
        },
        {
            link: "/inventory",
            text: "Inventory",
            icon: "#inventory"
        },
    ]

    const thisRoute = routes.filter((item: any) => mobileWidth ? item.link === location.pathname : item)[0]

    return (
        <div className="inner__menu menu-inner">
            <div className="menu-inner__dropdown dropdown-menu-inner">
                <button onClick={_ => setIsSidebarOpen(prev => !prev)}
                        className={'dropdown-menu-inner__button menu-inner__item' + (isSidebarOpen ? " active" : "")}>
                    <NavLink to={thisRoute?.link} className="menu-inner__link link-menu-inner">
                        <span className="link-menu-inner__image link-menu-inner__image_profile">
                            <svg className="delivery__arrow">
                                <use xlinkHref={thisRoute?.icon}/>
                            </svg>
                        </span>
                        <span className="link-menu-inner__text">
                            {thisRoute?.text}
                        </span>
                    </NavLink>
                </button>
                <ul className={"dropdown-menu-inner__list" + (isSidebarOpen ? " visible" : "")}>

                    {
                        routes.filter((item: any, index: number) => mobileWidth ? item.link !== location.pathname : index !== 0).map((item: any) =>
                            <li key={item.link} className="dropdown-menu-inner__list-item menu-inner__item">
                                <NavLink to={item.link} className="menu-inner__link link-menu-inner">
                                    <span className="link-menu-inner__image link-menu-inner__image_bonuses">
                                        <svg className="delivery__arrow">
                                            <use xlinkHref={item.icon}/>
                                        </svg>
                                    </span>
                                    <span className="link-menu-inner__text">
                                        {item.text}
                                    </span>
                                </NavLink>
                            </li>
                        )
                    }

                </ul>
            </div>
        </div>
    )
}
