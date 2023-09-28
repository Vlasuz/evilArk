import React, { useEffect } from 'react'

interface IHistoryDonateItemProps {

}

export const HistoryDonateItem:React.FC<IHistoryDonateItemProps> = () => {

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
                        09/11/2023
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
                        100$
                    </div>
                </div>
            </div>
        </div>
    )
}
