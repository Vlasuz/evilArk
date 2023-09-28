import React, {useEffect} from 'react'
import {NavLink} from "react-router-dom";

interface IProfileSidebarProps {

}

export const ProfileSidebar: React.FC<IProfileSidebarProps> = () => {

    return (
        <div className="inner__menu menu-inner">
            <div className="menu-inner__dropdown dropdown-menu-inner">
                <button className='dropdown-menu-inner__button menu-inner__item'>
                    <NavLink to={"/profile"} className="menu-inner__link link-menu-inner">
                        <span className="link-menu-inner__image link-menu-inner__image_profile">
                            <svg className="delivery__arrow">
                                <use xlinkHref="#profile" />
                            </svg>
                        </span>
                        <span className="link-menu-inner__text">Profile</span>
                    </NavLink>
                </button>
                <ul className="dropdown-menu-inner__list">
                    <li className="dropdown-menu-inner__list-item menu-inner__item">
                        <NavLink to={'/bonuses'} className="menu-inner__link link-menu-inner">
                            <span
                                className="link-menu-inner__image link-menu-inner__image_bonuses">
                                <svg className="delivery__arrow">
                                    <use xlinkHref="#bonuses"/>
                                </svg>
                            </span>
                            <span className="link-menu-inner__text">My bonuses</span>
                        </NavLink>
                    </li>
                    <li className="dropdown-menu-inner__list-item menu-inner__item">
                        <NavLink to={"/purchases"} className="menu-inner__link link-menu-inner">
                            <span className="link-menu-inner__image link-menu-inner__image_cart">
                                <svg className="delivery__arrow">
                                    <use xlinkHref="#cart"/>
                                </svg>
                            </span>
                            <span className="link-menu-inner__text">My purchases</span>
                        </NavLink>
                    </li>
                    <li className="dropdown-menu-inner__list-item menu-inner__item">
                        <NavLink to={'/inventory'} className="menu-inner__link link-menu-inner">
                            <span className="link-menu-inner__image link-menu-inner__image_inventory">
                                <svg className="">
                                    <use xlinkHref="#inventory" />
                                </svg>
                            </span>
                            <span className="link-menu-inner__text">Inventory</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
