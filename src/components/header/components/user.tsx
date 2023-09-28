import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import {IUser} from "../../../models";
import {NavLink} from "react-router-dom";

interface IUserProps {

}

export const User: React.FC<IUserProps> = () => {

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(`${userInfo.steam_id}`).then(r => setIsCopied(true))
    }

    return (
        <div className="header__balance balance-header active">
            <div className="balance-header__body" data-da="top-mobile-header, 1, 480">
                <div className="balance-header__bonuses bonuses-balance-header">
                    <a href="bonuses.html" className="bonuses-balance-header__icon">
                        <svg>
                            <use xlinkHref="#bonuses">

                            </use>
                        </svg>
                    </a>
                    <div className="bonuses-balance-header__message">Bonuses</div>
                </div>
                <div className="balance-header__top-up top-up-balance-header">
                    <a href="profile.html" className="top-up-balance-header__icon">
                        <svg>
                            <use xlinkHref="#wallet">

                            </use>
                        </svg>
                    </a>
                    <div className="top-up-balance-header__message">Top up your account</div>
                </div>
                <div className="balance-header__value">{userInfo.balance} EC</div>
            </div>
            <div onClick={handleCopy} className="balance-header__id">
                SteamID
                <span>
                    <svg><use xlinkHref={isCopied ? "#check" : "#copy"}/></svg>
                </span>
            </div>
            <NavLink to={'/profile'} className="balance-header__photo">
                <img src={userInfo.avatar} alt="user-icon"/>
            </NavLink>
        </div>
    )
}
