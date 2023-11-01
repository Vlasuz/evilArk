import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {IServers, IUser} from "../../../models";
import {Calculator} from "../../../components/calculator/Calculator";
import {HistoryDonate} from "../../../components/historyDonate/historyDonate";
import {useNavigate} from "react-router-dom";
import setCookie from "../../../functions/setCookie";
import {setUser} from "../../../redux/toolkitSlice";
import axios from "axios";
import {apiLink} from "../../../hooks/apiLink";
import {Translate} from "../../../components/translate/Translate";

interface IProfileUserProps {

}

export const ProfileUser:React.FC<IProfileUserProps> = () => {

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const category: IServers = useSelector((state: any) => state.toolkit.category)

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

    return (
        <div className="inner__content content-inner">
            <div className="content-inner__body">
                <div className="profile__row">
                    <div className="profile__user user-profile">
                        <div className="user-profile__image" style={{borderColor: isCategoryPve ? userInfo?.level_pve?.color_number : userInfo?.level?.color_number}}>
                            <img src={userInfo.avatar} alt="user-icon.svg"/>
                        </div>
                        <div className="user-profile__body">
                            <div className="user-profile__name">{userInfo.name}</div>
                            <div className="user-profile__level" data-da="info-profile, 2, 600">
                                <Translate>level</Translate> <span>{isCategoryPve ? userInfo.level_pve?.name : userInfo.level?.name ?? "Newbie"}</span>
                            </div>
                        </div>
                        <button onClick={handleExit} className={"replenishment-bonuses__btn exit-button"}>

                        </button>
                    </div>
                    <div className="profile__info info-profile">
                        <div className="info-profile__id" data-da="user-profile__body, 2, 600">
                            SteamID: <span>{userInfo.steam_id}</span>
                        </div>
                        <div className="info-profile__balance balance-info-profile">
                            <div className="balance-info-profile__text">
                                <Translate>balance</Translate>
                            </div>
                            <div className="balance-info-profile__value">{userInfo.balance?.toFixed(2)} EC</div>
                        </div>
                        <button onClick={handleExit} className={"replenishment-bonuses__btn exit-button"}>
                            <Translate>exit_from_site</Translate>
                        </button>
                    </div>
                </div>

                <Calculator/>
                {donateHistory.length && <HistoryDonate data={donateHistory}/>}
            </div>
        </div>
    )
}
