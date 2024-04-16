import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {IServer, IUser} from "../../../models";
import {Calculator} from "../../../components/calculator/Calculator";
import {HistoryDonate} from "../../../components/historyDonate/historyDonate";
import {useNavigate} from "react-router-dom";
import setCookie from "../../../functions/setCookie";
import {setUser} from "../../../redux/toolkitSlice";
import axios from "axios";
import {apiLink} from "../../../hooks/apiLink";
import {Translate} from "../../../components/translate/Translate";
import {useUserBalance} from "../../../hooks/userBalance";
import {ProfileStyled} from "../Profile.styled";
import { Popup } from '../../../components/popup/Popup';
import {PopupContext, topUpContext} from "../../../context/topUpContext";
import {ProfilePromo} from "./ProfilePromo";

interface IProfileUserProps {

}

export const ProfileUser:React.FC<IProfileUserProps> = () => {

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const category: IServer = useSelector((state: any) => state.toolkit.category)
    const {bonusBalance, balance} = useUserBalance()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [donateHistory, setDonateHistory] = useState<any>([])

    const isCategoryPve = category?.name?.toLowerCase().includes("pve")

    const handleExit = () => {
        setCookie("access_token", '')
        dispatch(setUser({}))
        navigate('/')
    }

    useEffect(() => {
        axios.get(apiLink("api/deposits/history")).then(({data}) => {
            setDonateHistory(data.data)
        }).catch(er => console.log(er))
    }, [])

    const userStatusColor = isCategoryPve ? userInfo?.level?.filter(item => item.server.id === category.id)[0].color_PVE : userInfo?.level?.filter(item => item.server.id === category.id)[0]?.color
    const userStatusName = isCategoryPve ? userInfo.level?.filter(item => item.server.id === category.id)[0].level_name_PVE : userInfo.level?.filter(item => item.server.id === category.id)[0]?.level_name ?? "Newbie"

    const isPopupOpen: any = useContext(PopupContext)

    return (
        <ProfileStyled className="inner__content content-inner">

            <div className="content-inner__body">
                <div className="profile__row">
                    <div className="profile__user user-profile">
                        <div className="user-profile__name">{userInfo.name}</div>
                        <div className="user-profile__image" style={{borderColor: userStatusColor ?? "#000"}}>
                            <img src={userInfo.avatar} alt="user-icon.svg"/>
                        </div>
                        <div className="info-profile__id" data-da="user-profile__body, 2, 600">
                            SteamID: <span>{userInfo.steam_id}</span>
                        </div>
                        {userInfo.eos_id && <div className="info-profile__id" data-da="user-profile__body, 2, 600">
                            EOS ID: <span>{userInfo.eos_id}</span>
                        </div>}
                        <button onClick={_ => isPopupOpen(true)} className={"replenishment-bonuses__btn connect-to-asa"}>
                            <Translate>connect_asa</Translate>
                        </button>
                        <div className="user-profile__level" data-da="info-profile, 2, 600">
                            <Translate>level</Translate> <span>{userStatusName}</span>
                        </div>
                        <div className="info-profile__balance balance-info-profile">
                            <div className="balance-info-profile__text">
                                <Translate>balance</Translate>
                            </div>
                            <div className="balance-info-profile__value">
                                {balance} EC
                            </div>
                        </div>
                        <div className="info-profile__balance balance-info-profile">
                            <div className="balance-info-profile__text">
                                <Translate>balance_bonus</Translate>
                            </div>
                            <div className="balance-info-profile__value">
                                {bonusBalance} EC
                            </div>
                        </div>
                        {/*<button onClick={handleExit} className={"replenishment-bonuses__btn exit-button"}>*/}
                        {/*    <Translate>exit_from_site</Translate>*/}
                        {/*</button>*/}
                    </div>
                    <div className="right-block">
                        <button onClick={handleExit} className={"replenishment-bonuses__btn exit-button"}>
                            <Translate>exit_from_site</Translate>
                        </button>
                        <ProfilePromo/>
                        <Calculator/>
                    </div>
                </div>

                <HistoryDonate data={donateHistory.filter((item: any) => item?.server?.id === category?.id)}/>
            </div>
        </ProfileStyled>
    )
}
