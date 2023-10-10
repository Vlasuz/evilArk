import React, { useEffect } from 'react'
import {ProfileSidebar} from "../../components/profileSidebar/profileSidebar";
import {ProfileUser} from "../profile/components/profileUser";
import {Footer} from "../../components/footer/footer";

interface IPageNotFoundProps {

}

export const PageNotFound:React.FC<IPageNotFoundProps> = () => {

    return (
        <main className="profile">
            <section className="profile__main">
                <div className="profile__container container">
                    <div className="profile__body">
                        <h2 className="profile__title title-h2">404</h2>

                    </div>
                </div>
            </section>
            <div style={{marginTop: "auto", display: "block", height: "48vh"}}></div>
            <Footer/>
        </main>
    )
}
