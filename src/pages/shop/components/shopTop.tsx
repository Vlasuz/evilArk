import React, {useEffect, useState} from 'react'
import {useImages} from "../../../hooks/images";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {IServers, IUser, IUserDiscount} from "../../../models";
import {useSteamLogin} from "../../../hooks/steamLogin";
import axios from "axios";
import getCookies from "../../../functions/getCookie";
import {apiLink} from "../../../hooks/apiLink";
import {Translate} from "../../../components/translate/Translate";

interface IShopTopProps {

}

export const ShopTop: React.FC<IShopTopProps> = () => {
    const {sidebarHome, sidebarRolette} = useImages()

    const {auth_params} = useSteamLogin()

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)

    const [discount, setDiscount] = useState<IUserDiscount | undefined>()

    const category: IServers = useSelector((state: any) => state.toolkit.category)

    useEffect(() => {
        if(!Object.keys(userInfo).length) return;

        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.get(apiLink("api/users/discount")).then(({data}) => {
            if (category.name?.toLowerCase().includes("pve")) {
                setDiscount(data.data.filter((item: any) => item.is_pve && item)[0])
            } else {
                setDiscount(data.data.filter((item: any) => !item.is_pve && item)[0])
            }
        })
    }, [category])

    return (
        <div className="categories__panel panel-categories">
            <div className="panel-categories__row">
                <nav className="panel-categories__menu menu-panel-categories">
                    <ul className="menu-panel-categories__list">
                        <li className="menu-panel-categories__item">
                            <NavLink to={"/"} className="menu-panel-categories__link">
                                <span>
                                    <img src={sidebarHome} alt="home"/>
                                </span>
                                <span>
                                    <Translate>text_home</Translate>
                                </span>
                            </NavLink>
                        </li>
                        <li className="menu-panel-categories__item">
                            <NavLink to={"/roulette"} className="menu-panel-categories__link">
                                <span>
                                    <img src={sidebarRolette} alt="roulette"/>
                                </span>
                                <span>
                                    <Translate>text_roulette</Translate>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {Object.keys(userInfo).length ?
                    <div className="balance-info-panel-categories__balance-now balance-now-info-panel-categories">
                        <div className="balance-now-info-panel-categories__text">
                            <Translate>discount</Translate>:
                        </div>
                        {/*<div className="balance-now-info-panel-categories__value">-{discount?.discount}%</div>*/}
                        <div className="balance-now-info-panel-categories__value">
                            {discount?.discount ? "-"+discount?.discount+"%" : "0%"}
                        </div>
                    </div>
                    :
                    <div className="panel-categories__login login-panel-categories">
                        <div className="login-panel-categories__text">
                            <Translate>you_are_not_login</Translate>
                        </div>
                        <a href={"http://steamcommunity.com/openid/login?" + new URLSearchParams(auth_params).toString()}
                           className="login-panel-categories__btn">
                            <Translate>login_text</Translate>
                        </a>
                    </div>}
            </div>
        </div>
    )
}
