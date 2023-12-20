import React, {useEffect, useState} from 'react'
import {ProfileSidebar} from "../../components/profileSidebar/ProfileSidebar";
import {ProfileUser} from "./components/ProfileUser";
import {Footer} from "../../components/footer/Footer";
import {TopUp} from "../../components/topUp/TopUp";
import {PopupContext, topUpContext} from '../../context/topUpContext';
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {Translate} from "../../components/translate/Translate";
import {Popup} from "../../components/popup/Popup";

interface IProfileProps {

}

export const Profile: React.FC<IProfileProps> = () => {

    const [isTopUpOpen, setIsTopUpOpen] = useState<boolean>(false)
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

    return (
        <main className="profile">
            <topUpContext.Provider value={setIsTopUpOpen}>
                <PopupContext.Provider value={setIsPopupOpen}>

                    <Popup isOpen={isPopupOpen}/>
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

                </PopupContext.Provider>
            </topUpContext.Provider>
        </main>
    )
}
