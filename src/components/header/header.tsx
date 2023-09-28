import React, {useEffect} from 'react'
import {useHeaderScroll} from "../../hooks/headerScroll";
import {Menu} from "./components/menu";
import {Languages} from "./components/languages";
import {useImages} from "../../hooks/images";
import arrowWhite from "assets/img/icons/arrow-white.svg";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {useLocation, useNavigate} from 'react-router-dom';
import setCookie from "../../functions/setCookie";
import getCookies from "../../functions/getCookie";
import {useSteamLogin} from "../../hooks/steamLogin";
import {User} from "./components/user";
import {Login} from "./components/login";
import {useSelector} from "react-redux";

interface IHeaderProps {

}

export const Header: React.FC<IHeaderProps> = () => {
    const {arrowWhite} = useImages()

    const {isFixed} = useHeaderScroll()

    const userInfo = useSelector((state: any) => state.toolkit.user)

    return (
        <>
            <div className="header-mobile mobile-header">
                <div className="mobile-header__top top-mobile-header">
                    <a href="" className="top-mobile-header__btn">
                        <img src={arrowWhite} alt="arrow"/>
                    </a>
                </div>
                <div className="mobile-header__body"></div>
            </div>
            <header className={"header" + (isFixed ? " fixed" : "")}>
                <div className="header__body">
                    <div className="header__inner">
                        <div className="header__row">
                            <div className="header__menu-block" data-da="mobile-header__body, 1, 1600">
                                <Menu/>
                            </div>
                            <Languages/>


                            {!!Object.keys(userInfo).length ? <User/> : <Login/>}
                            <div className="header__burger">
                                <span/>
                                <span/>
                                <span/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
