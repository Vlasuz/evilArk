import React, {useEffect, useRef, useState} from 'react'
import {useHeaderScroll} from "../../hooks/headerScroll";
import {HeaderMenu} from "./components/HeaderMenu";
import {Menu} from "../sidebar/components/menu";
import {HeaderLanguages} from "./components/HeaderLanguages";
import {useImages} from "../../hooks/images";
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {HeaderUser} from "./components/HeaderUser";
import {HeaderLogin} from "./components/HeaderLogin";
import {useDispatch, useSelector} from "react-redux";
import {ICategory, IGeneralInfo, IServers, IUser} from "../../models";
import {Translate} from "../translate/Translate";
import logo from "../../assets/img/logo.svg";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {HeaderStyled} from "./Header.styles";
import {setCategory} from "../../redux/toolkitSlice";

interface IHeaderProps {

}

export const Header: React.FC<IHeaderProps> = () => {
    const {arrowWhite} = useImages()

    const {isFixed} = useHeaderScroll()

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const generalInfo: IGeneralInfo = useSelector((state: any) => state.toolkit.generalInfo)
    const category: IServers = useSelector((state: any) => state.toolkit.category)

    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
    const [categories, setCategories] = useState<IServers[]>([])
    const [isOpenSelectClusters, setIsOpenSelectClusters] = useState(false)

    const dispatch = useDispatch()

    window.addEventListener('click', (e: any) => {
        if(!e.target.closest('.header-mobile') && !e.target.closest('.header__burger')) setIsOpenMobileMenu(false)
    })

    useEffect(() => {
        isOpenMobileMenu ? document.querySelector('body')?.classList.add('product-select') : document.querySelector('body')?.classList.remove('product-select')
    }, [isOpenMobileMenu])

    useEffect(() => {
        axios.get(apiLink("api/servers")).then(({data}) => {
            setCategories(data.data)
        }).catch(er => console.log(er))
    }, [])

    useEffect(() => {
        setCategory(category)
    }, [category])

    const handleClusterChange = (item: string) => {
        dispatch(setCategory(JSON.parse(item)))
        setIsOpenSelectClusters(false)
    }

    return (
        <HeaderStyled>
            <div className={"header-mobile mobile-header" + (isOpenMobileMenu ? " active" : "")}>
                <div className="mobile-header__top top-mobile-header">
                    <button onClick={_ => setIsOpenMobileMenu(false)} className="top-mobile-header__btn">
                        <img src={arrowWhite} alt="arrow"/>
                    </button>
                    <div className="header__servers">
                        <div className="characteristics-select-product__dropdown dropdown">
                            <button onClick={_ => setIsOpenSelectClusters(prev => !prev)} className="dropdown__button">
                                {category.name}
                            </button>
                            <ul className={"dropdown__list" + (isOpenSelectClusters ? " visible" : "")}>
                                {categories.length && categories?.map(item => <li key={item.id} onClick={_ => item.name !== category.name && handleClusterChange(JSON.stringify(item))} className="dropdown__list-item" data-dropdown="module 2 - 125 lvl">{item.name}</li>)}
                            </ul>
                        </div>
                    </div>
                    {!!Object.keys(userInfo).length && <div className="balance-header__body" data-da="top-mobile-header, 1, 480">
                        <div className="balance-header__bonuses bonuses-balance-header">
                            <NavLink to={'/bonuses'} className="bonuses-balance-header__icon">
                                <svg>
                                    <use xlinkHref="#bonuses" />
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
                    <HeaderLanguages/>
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

                            <HeaderLanguages/>

                            <div className="characteristics-select-product__dropdown dropdown">
                                <button onClick={_ => setIsOpenSelectClusters(prev => !prev)} className="dropdown__button">
                                    {category.name}
                                </button>
                                <ul className={"dropdown__list" + (isOpenSelectClusters ? " visible" : "")}>
                                    {categories.length && categories?.map(item => <li key={item.id} onClick={_ => item.name !== category.name && handleClusterChange(JSON.stringify(item))} className="dropdown__list-item" data-dropdown="module 2 - 125 lvl">{item.name}</li>)}
                                </ul>
                            </div>

                            {!!Object.keys(userInfo).length ? <HeaderUser/> : <HeaderLogin/>}
                            <div className="header__burger" onClick={_ => setIsOpenMobileMenu(true)}>
                                <span/>
                                <span/>
                                <span/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </HeaderStyled>
    )
}
