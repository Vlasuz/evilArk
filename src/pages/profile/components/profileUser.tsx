import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import {IUser} from "../../../models";
import {Calculator} from "../../../components/calculator/calculator";
import {HistoryDonate} from "../../../components/historyDonate/historyDonate";

interface IProfileUserProps {

}

export const ProfileUser:React.FC<IProfileUserProps> = () => {

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)

    return (
        <div className="inner__content content-inner">
            <div className="content-inner__body">
                <div className="profile__row">
                    <div className="profile__user user-profile">
                        <div className="user-profile__image green">
                            <img src={userInfo.avatar} alt="user-icon.svg"/>
                        </div>
                        <div className="user-profile__body">
                            <div className="user-profile__name">User nickname</div>
                            <div className="user-profile__level" data-da="info-profile, 2, 600">
                                Level: <span>{userInfo.level?.name ?? "Newbie"}</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile__info info-profile">
                        <div className="info-profile__id" data-da="user-profile__body, 2, 600">
                            SteamID: <span>{userInfo.steam_id}</span>
                        </div>
                        <div className="info-profile__balance balance-info-profile">
                            <div className="balance-info-profile__text">Balance:</div>
                            <div className="balance-info-profile__value">{userInfo.balance} EC</div>
                        </div>
                    </div>
                </div>

                <Calculator/>
                <HistoryDonate/>
            </div>
        </div>
    )
}
