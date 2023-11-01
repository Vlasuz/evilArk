import React, {useEffect, useState} from 'react'
import {ProfileSidebar} from "../../components/profileSidebar/ProfileSidebar";
import {ProfileUser} from "./components/profileUser";
import {Footer} from "../../components/footer/footer";
import {TopUp} from "../../components/topUp/topUp";
import {topUpContext} from '../../context/topUpContext';
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {Translate} from "../../components/translate/Translate";

interface IProfileProps {

}

export const Profile: React.FC<IProfileProps> = () => {

    const [isTopUpOpen, setIsTopUpOpen] = useState(false)

    return (
        <main className="profile">
            <topUpContext.Provider value={setIsTopUpOpen}>

                <TopUp isOpen={isTopUpOpen}/>
                <section className="profile__main">
                    <div className="profile__container container">
                        <div className="profile__body">
                            <h2 className="profile__title title-h2">
                                <Translate>my_profile</Translate>
                            </h2>
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

            </topUpContext.Provider>
        </main>
    )
}
