import React, {useEffect, useState} from 'react'
import {topUpContext} from "../../context/topUpContext";
import {TopUp} from "../../components/topUp/topUp";
import {ProfileSidebar} from "../../components/profileSidebar/ProfileSidebar";
import {ProfileUser} from "../profile/components/profileUser";
import {Footer} from "../../components/footer/footer";
import {Calculator} from "../../components/calculator/Calculator";
import {HistoryDonate} from "../../components/historyDonate/historyDonate";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {IServers, IUser} from "../../models";
import {useParams} from "react-router-dom";
import {UserStyled} from "./User.styled";
import {useSelector} from "react-redux";

interface IUserProps {

}

export const User: React.FC<IUserProps> = () => {

    const [userInfo, setUserInfo] = useState<IUser | undefined>()

    const {userId} = useParams()

    const category: IServers = useSelector((state: any) => state.toolkit.category)

    useEffect(() => {
        axios.get(apiLink("api/users/" + userId)).then(({data}) => {
            setUserInfo(data.data)
        }).catch(er => console.log(er))
    }, [])

    const isCategoryPve = category?.name?.toLowerCase().includes("pve")

    return (
        <UserStyled className="profile">
            <section className="profile__main">
                <div className="profile__container container">
                    <div className="profile__body">
                        <h2 className="profile__title title-h2">User page “{userInfo?.name}”</h2>
                        <div className="profile__inner inner">
                            <div className="inner__row">
                                <div className="inner__content content-inner">
                                    <div className="content-inner__body">
                                        <div className="profile__row">
                                            <div className="profile__user user-profile">
                                                <div className="user-profile__image" style={{borderColor: isCategoryPve ? userInfo?.level_pve?.color_number : userInfo?.level?.color_number}}>
                                                    <img src={userInfo?.avatar} alt="user-icon.svg"/>
                                                </div>
                                                <div className="user-profile__body">
                                                    <div className="user-profile__name">{userInfo?.name}</div>
                                                    <div className="user-profile__level" data-da="info-profile, 2, 600">
                                                        Level: <span>{isCategoryPve ? userInfo?.level_pve?.name : userInfo?.level?.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="profile__info info-profile">
                                                <div className="info-profile__id" data-da="user-profile__body, 2, 600">
                                                    SteamID: <span>{userInfo?.steam_id}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<HistoryDonate/>*/}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </UserStyled>
    )
}
