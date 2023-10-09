import React, { useEffect } from 'react'
import {useImages} from "../../../hooks/images";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setPage } from '../../../redux/toolkitSlice';
import {Translate} from "../../translate/Translate";

interface IMenuProps {

}

export const Menu:React.FC<IMenuProps> = () => {
    const {sidebarRolette, sidebarHome, sidebarShop} = useImages()

    const dispatch = useDispatch()
    const isChosenCategory = useSelector((state: any) => state.toolkit.category)

    return (
        <nav className="sidebar__menu menu-sidebar">
            <ul className="menu-sidebar__list">
                <li className="menu-sidebar__item">
                    <NavLink to={'/'} className="menu-sidebar__link">
                        <img src={sidebarHome} alt="home"/>
                        <span>
                            <Translate>text_home</Translate>
                        </span>
                    </NavLink>
                </li>
                <li className="menu-sidebar__item">
                    <NavLink to={isChosenCategory ? '/shop' : '/category'} onClick={_ => dispatch(setPage('/shop'))} className="menu-sidebar__link">
                        <img src={sidebarShop} alt="shop"/>
                        <span>
                            <Translate>text_shop</Translate>
                        </span>
                    </NavLink>
                </li>
                <li className="menu-sidebar__item">
                    <NavLink to={isChosenCategory ? '/roulette' : '/category'} onClick={_ => dispatch(setPage('/roulette'))} className="menu-sidebar__link">
                        <img src={sidebarRolette} alt="roulette"/>
                        <span>
                            <Translate>text_roulette</Translate>
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
