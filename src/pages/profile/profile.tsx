import React, {useEffect} from 'react'
import {ProfileSidebar} from "../../components/profileSidebar/profileSidebar";
import {ProfileUser} from "./components/profileUser";
import {Footer} from "../../components/footer/footer";

interface IProfileProps {

}

export const Profile: React.FC<IProfileProps> = () => {

    return (
        <main className="profile">
            <section className="profile__main">
                <div className="profile__container container">
                    <div className="profile__body">
                        <h2 className="profile__title title-h2">Profile</h2>
                        <div className="profile__inner inner">
                            <div className="inner__row">
                                <ProfileSidebar/>
                                <ProfileUser/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
