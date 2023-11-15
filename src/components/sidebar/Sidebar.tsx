import React, {useEffect} from 'react'
import {useImages} from "../../hooks/images";
import {NavLink} from "react-router-dom";
import {Menu} from "./components/menu";
import {useHeaderScroll} from "../../hooks/headerScroll";
import {IGeneralInfo} from "../../models";
import {useSelector} from "react-redux";
import {apiLink} from "../../hooks/apiLink";
import logo from './../../assets/img/logo.svg'
import {Translate} from "../translate/Translate";
import {SidebarStyled} from "./Sidebar.styled";

interface ISidebarProps {

}

export const Sidebar: React.FC<ISidebarProps> = () => {

    const {isFixed} = useHeaderScroll()
    const generalInfo: IGeneralInfo = useSelector((state: any) => state.toolkit.generalInfo)

    return (
        <SidebarStyled className={"sidebar" + (isFixed ? " header-fixed" : "")}>
            <NavLink to={'/'} className="sidebar__logo logo" data-da="header__row, 0, 992">
                <img src={generalInfo.header_logo ? generalInfo.header_logo : logo} alt="logo"/>
            </NavLink>
            <div className="sidebar__body" data-da="mobile-header__body, 0, 992">
                <Menu/>
                <div className="sidebar__development">
                    <Translate>website_development</Translate>
                    <br/>
                    <a href="https://freelancehunt.com/freelancer/Vlasok.html" target={'_blank'}>Vlas Zubenko</a>
                </div>
            </div>
        </SidebarStyled>
    )
}
