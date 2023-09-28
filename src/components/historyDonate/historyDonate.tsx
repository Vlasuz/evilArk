import React, { useEffect } from 'react'
import {HistoryDonateItem} from "./components/historyDonateItem";

interface IHistoryDonateProps {

}

export const HistoryDonate:React.FC<IHistoryDonateProps> = () => {

    return (
        <div className="profile__history history-profile">
            <div className="history-profile__title replenishment-bonuses__title">
                History of donations
            </div>
            <div className="history-profile__swiper swiper">
                <div className="history-profile__wrapper swiper-wrapper">
                    <HistoryDonateItem/>
                </div>
            </div>
        </div>
    )
}
