import React, { useEffect } from 'react'
import {ProfileSidebar} from "../../components/profileSidebar/ProfileSidebar";
import {ProfileUser} from "../profile/components/ProfileUser";
import {Footer} from "../../components/footer/Footer";
import {PageNotFoundStyled} from "./pageNotFound.styled";
import {NavLink} from "react-router-dom";

interface IPageNotFoundProps {

}

export const PageNotFound:React.FC<IPageNotFoundProps> = () => {

    return (
        <PageNotFoundStyled className="notFound">
            <section className="notFound__main">
                <h1>404</h1>
                <h2>К сожалению страница не найдена</h2>
                <NavLink to={"/"}>Вернуться на главную</NavLink>
            </section>
            <div style={{marginTop: "auto", display: "block", height: "48vh"}}></div>
            <Footer/>
        </PageNotFoundStyled>
    )
}
