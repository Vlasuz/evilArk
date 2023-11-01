import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import {IUser} from "../../../models";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";

interface IUserProps {

}

export const HeaderUser: React.FC<IUserProps> = () => {

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        toast.success('Вы успешно скопировали Steam ID')
        navigator.clipboard.writeText(`${userInfo.steam_id}`).then(r => setIsCopied(true))
    }

    return (
        <div className="header__balance balance-header active">
            <div className="balance-header__body" data-da="top-mobile-header, 1, 480">
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
                            <use xlinkHref="#wallet" />
                        </svg>
                    </NavLink>
                    <div className="top-up-balance-header__message">Top up your account</div>
                </div>
                <div className="balance-header__value">{userInfo.balance.toFixed(2)} EC</div>
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
