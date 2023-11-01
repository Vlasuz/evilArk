import React, { useEffect } from 'react'
import {currencyList} from "../../../functions/currencyList";

interface IHistoryDonateItemProps {
    data: any
}

export const HistoryDonateItem:React.FC<IHistoryDonateItemProps> = ({data}) => {

    return (
        <div className="history-profile__column">
            <div
                className="history-profile__item item-history-profile">
                <div
                    className="item-history-profile__date date-item-history-profile">
                    <div
                        className="date-item-history-profile__label">
                        Date:
                    </div>
                    <div
                        className="date-item-history-profile__value">
                        {data.created_at.slice(0, data.created_at.indexOf(" ")).replaceAll("-", "/")}
                    </div>
                </div>
                <div
                    className="item-history-profile__amount amount-item-history-profile">
                    <div
                        className="amount-item-history-profile__label">
                        Replenishment amount:
                    </div>
                    <div
                        className="amount-item-history-profile__value">
                        {data.amount.real} {currencyList.filter((item: any) => item.currency === data.currency)[0].icon}
                    </div>
                </div>
            </div>
        </div>
    )
}
