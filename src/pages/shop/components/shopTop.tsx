import React, {useEffect} from 'react'
import {useImages} from "../../../hooks/images";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {IUser} from "../../../models";
import {useSteamLogin} from "../../../hooks/steamLogin";

interface IShopTopProps {

}

export const ShopTop: React.FC<IShopTopProps> = () => {
    const {sidebarHome, sidebarRolette} = useImages()

    const {auth_params} = useSteamLogin()

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)

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
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="menu-panel-categories__item">
                            <NavLink to={"/roulette"} className="menu-panel-categories__link">
                                <span>
                                    <img src={sidebarRolette} alt="roulette"/>
                                </span>
                                <span>Roulette</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {Object.keys(userInfo).length ?
                    <div className="balance-info-panel-categories__balance-now balance-now-info-panel-categories">
                        <div className="balance-now-info-panel-categories__text">Discount:</div>
                        <div className="balance-now-info-panel-categories__value">-15%</div>
                    </div> :
                    <div className="panel-categories__login login-panel-categories">
                        <div className="login-panel-categories__text">You need to be logged</div>
                        <a href={"http://steamcommunity.com/openid/login?" + new URLSearchParams(auth_params).toString()} className="login-panel-categories__btn">Login</a>
                    </div>}
            </div>
        </div>
    )
}
