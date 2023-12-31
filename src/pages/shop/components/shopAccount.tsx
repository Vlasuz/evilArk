import React, { useEffect } from 'react'
import {IUser} from "../../../models";
import {useImages} from "../../../hooks/images";
import {NavLink} from "react-router-dom";
import {Translate} from "../../../components/translate/Translate";
import {useUserBalance} from "../../../hooks/userBalance";

interface IShopAccountProps {
    userInfo: IUser
}

export const ShopAccount:React.FC<IShopAccountProps> = ({userInfo}) => {
    const {wallet, gift} = useImages()
    const {bonusBalance, balance} = useUserBalance()

    return (
        <div className="categories__info-panel info-panel-categories">
            <div className="info-panel-categories__row">
                <div className="info-panel-categories__user user-info-panel-categories">
                    <div className="user-info-panel-categories__image">
                        <img src={userInfo.avatar} alt="user-icon"/>
                    </div>
                    <div className="user-info-panel-categories__content">
                        <div className="user-info-panel-categories__name">
                            {userInfo.name}
                        </div>
                        <div className="user-info-panel-categories__id">SteamID: {userInfo.steam_id}</div>
                    </div>
                </div>
                <div className="info-panel-categories__balance balance-info-panel-categories">
                    <div
                        className="balance-info-panel-categories__balance-now balance-now-info-panel-categories">
                        <div className="balance-now-info-panel-categories__text">
                            <Translate>balance</Translate>
                        </div>
                        <div className="balance-now-info-panel-categories__value">{balance} EC</div>
                    </div>
                    <div
                        className="balance-info-panel-categories__balance-now balance-now-info-panel-categories">
                        <div className="balance-now-info-panel-categories__text">
                            <Translate>balance_bonus</Translate>
                        </div>
                        <div className="balance-now-info-panel-categories__value">{bonusBalance} EC</div>
                    </div>
                    <NavLink to={"/profile"}
                       className="balance-info-panel-categories__top-up top-up-info-panel-categories">
                        <span className="top-up-info-panel-categories__icon">
                            <img src={wallet} alt="wallet" />
                        </span>
                        <span className="top-up-info-panel-categories__text">
                            <Translate>top_up_your_account</Translate>
                        </span>
                    </NavLink>
                    <NavLink to={"/bonuses"}
                       className="balance-info-panel-categories__bonuses bonuses-info-panel-categories">
                        <span className="bonuses-info-panel-categories__icon">
                            <img src={gift} alt="gift" />
                        </span>
                        <span className="bonuses-info-panel-categories__text">
                            <Translate>bonuses_title</Translate>
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
