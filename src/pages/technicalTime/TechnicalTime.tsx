import React, {useEffect, useState} from 'react'
import {NavLink, useNavigate} from "react-router-dom";
import {Footer} from "../../components/footer/footer";
import {PageNotFoundStyled} from "../pageNotFound/pageNotFound.styled";
import {TechnicalTimeStyled} from "./TechnicalTime.styled";
import setCookie from "../../functions/setCookie";

interface ITechnicalTimeProps {
    setIsTechnicalTime: any
}

export const TechnicalTime: React.FC<ITechnicalTimeProps> = ({setIsTechnicalTime}) => {

    const [isAdmin, setIsAdmin] = useState(false)
    const [adminInput, setAdminInput] = useState("")
    const navigate = useNavigate()

    const handleInputField = (e: any) => {
        setAdminInput(e.target.value)

        if (e.target.value === "aaadddmin11123") {
            setIsTechnicalTime(false)
            setCookie("isAdmin", true)
            navigate('/')
        }

    }

    return (
        <TechnicalTimeStyled>
            <h1>Технические <button onClick={_ => setIsAdmin(prev => !prev)}>работы</button></h1>
            <h2>К сожалению сайт на данный момент на технических работах, в скором времени мы возобновим работу сайта.
                Администрация просит прощения за неудобство</h2>

            {isAdmin && <input type="text" value={adminInput} onChange={handleInputField}/>}
        </TechnicalTimeStyled>
    )
}
