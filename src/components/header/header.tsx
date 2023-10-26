import React, {useEffect, useState} from 'react'
import {useHeaderScroll} from "../../hooks/headerScroll";
import {HeaderMenu} from "./components/headerMenu";
import {Menu} from "../sidebar/components/menu";
import {Languages} from "./components/languages";
import {useImages} from "../../hooks/images";
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {User} from "./components/user";
import {Login} from "./components/login";
import {useSelector} from "react-redux";
import {IGeneralInfo} from "../../models";
import {Translate} from "../translate/Translate";
import logo from "../../assets/img/logo.svg";

interface IHeaderProps {

}

export const Header: React.FC<IHeaderProps> = () => {
    const {arrowWhite} = useImages()

    const {isFixed} = useHeaderScroll()

    const userInfo = useSelector((state: any) => state.toolkit.user)
    const generalInfo: IGeneralInfo = useSelector((state: any) => state.toolkit.generalInfo)

    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

    window.addEventListener('click', (e: any) => {
        if(!e.target.closest('.header-mobile') && !e.target.closest('.header__burger')) setIsOpenMobileMenu(false)
    })

    useEffect(() => {
        isOpenMobileMenu ? document.querySelector('body')?.classList.add('product-select') : document.querySelector('body')?.classList.remove('product-select')
    }, [isOpenMobileMenu])

    return (
        <>
            <div className={"header-mobile mobile-header" + (isOpenMobileMenu ? " active" : "")}>
                <div className="mobile-header__top top-mobile-header">
                    <button onClick={_ => setIsOpenMobileMenu(false)} className="top-mobile-header__btn">
                        <img src={arrowWhite} alt="arrow"/>
                    </button>
                    {!!Object.keys(userInfo).length && <div className="balance-header__body" data-da="top-mobile-header, 1, 480">
                        <div className="balance-header__bonuses bonuses-balance-header">
                            <NavLink to={'/bonuses'} className="bonuses-balance-header__icon">
                                <svg>
                                    <use xlinkHref="#bonuses">

                                    </use>
                                </svg>
                            </NavLink>
                            <div className="bonuses-balance-header__message">Bonuses</div>
                        </div>
                        <div className="balance-header__top-up top-up-balance-header">
                            <NavLink to={'/profile'} className="top-up-balance-header__icon">
                                <svg>
                                    <use xlinkHref="#wallet"/>
                                </svg>
                            </NavLink>
                            <div className="top-up-balance-header__message">Top up your account</div>
                        </div>
                        <div className="balance-header__value">{userInfo.balance.toFixed(2)} EC</div>
                    </div>}
                </div>
                <div className="mobile-header__body">
                    <div className="sidebar__body" data-da="mobile-header__body, 0, 992">
                        <Menu/>
                        <div className="sidebar__development">
                            <Translate>website_development</Translate>
                            <br/>
                            <a href="https://freelancehunt.com/freelancer/Vlasok.html" target={'_blank'}>Vlas Zubenko</a>
                        </div>
                    </div>
                    <HeaderMenu/>
                    <Languages/>
                </div>
            </div>
            <header className={"header" + (isFixed ? " fixed" : "")}>
                <div className="header__body">
                    <div className="header__inner">
                        <div className="header__row">
                            <NavLink to={'/'} className="sidebar__logo logo">
                                <img src={generalInfo.header_logo ? generalInfo.header_logo : logo} alt="logo"/>
                            </NavLink>
                            <div className="header__menu-block" data-da="mobile-header__body, 1, 1600">
                                <HeaderMenu/>
                            </div>

                            <Languages/>

                            {!!Object.keys(userInfo).length ? <User/> : <Login/>}
                            <div className="header__burger" onClick={_ => setIsOpenMobileMenu(true)}>
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
