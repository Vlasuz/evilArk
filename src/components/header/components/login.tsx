import React, { useEffect } from 'react'
import {useSteamLogin} from "../../../hooks/steamLogin";
import {useImages} from "../../../hooks/images";

interface ILoginProps {

}

export const Login:React.FC<ILoginProps> = () => {
    const {headerSteam} = useImages()
    const {auth_params} = useSteamLogin()

    return (
        <div className="header__login login-header active">
            <a href={"http://steamcommunity.com/openid/login?" + new URLSearchParams(auth_params).toString()}
               className="login-header__icon">
                <img src={headerSteam} alt="login-icon"/>
            </a>
        </div>
    )
}
