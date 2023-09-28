import React, { useEffect } from 'react'

interface IShopAccountProps {

}

export const ShopAccount:React.FC<IShopAccountProps> = () => {

    return (
        <div className="categories__info-panel info-panel-categories">
            <div className="info-panel-categories__row">
                <div className="info-panel-categories__user user-info-panel-categories">
                    <div className="user-info-panel-categories__image">
                        <img src="img/categories/user-icon.svg" alt="user-icon"/>
                    </div>
                    <div className="user-info-panel-categories__content">
                        <div className="user-info-panel-categories__name">Username</div>
                        <div className="user-info-panel-categories__id">SteamID: 2348769256795234</div>
                        <a href="" className="user-info-panel-categories__agreement">Service
                            Agreement</a>
                    </div>
                </div>
                <div className="info-panel-categories__balance balance-info-panel-categories">
                    <div
                        className="balance-info-panel-categories__balance-now balance-now-info-panel-categories">
                        <div className="balance-now-info-panel-categories__text">Balance:</div>
                        <div className="balance-now-info-panel-categories__value">120 EC</div>
                    </div>
                    <a href=""
                       className="balance-info-panel-categories__top-up top-up-info-panel-categories">
                        <span className="top-up-info-panel-categories__icon">
                            <img src="img/icons/wallet.svg" alt="wallet" />
                        </span>
                        <span className="top-up-info-panel-categories__text">Top up your account</span>
                    </a>
                    <a href=""
                       className="balance-info-panel-categories__bonuses bonuses-info-panel-categories">
                        <span className="bonuses-info-panel-categories__icon">
                            <img src="img/icons/gift.svg" alt="gift" />
                        </span>
                        <span className="bonuses-info-panel-categories__text">Bonuses</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
