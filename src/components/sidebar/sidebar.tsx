import React, {useEffect} from 'react'
import {useImages} from "../../hooks/images";
import {NavLink} from "react-router-dom";
import {Menu} from "./components/menu";
import {useHeaderScroll} from "../../hooks/headerScroll";
import {IGeneralInfo} from "../../models";
import {useSelector} from "react-redux";
import {apiLink} from "../../hooks/apiLink";
// import logo from './../../assets/img/logo.png'

interface ISidebarProps {

}

export const Sidebar: React.FC<ISidebarProps> = () => {

    const {isFixed} = useHeaderScroll()
    const generalInfo: IGeneralInfo = useSelector((state: any) => state.toolkit.generalInfo)

    return (
        <aside className={"sidebar" + (isFixed ? " header-fixed" : "")}>
            <NavLink to={'/'} className="sidebar__logo logo" data-da="header__row, 0, 992">
                <img src={apiLink(generalInfo.header_icon)} alt="logo"/>
            </NavLink>
            <div className="sidebar__body" data-da="mobile-header__body, 0, 992">
                <Menu/>
                <div className="sidebar__development">
                    Website development<br/>
                    <a href="https://freelancehunt.com/freelancer/Vlasok.html" target={'_blank'}>Vlas Zubenko</a>
                </div>
            </div>
        </aside>
    )
}
