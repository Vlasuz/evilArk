import React, { useEffect } from 'react'
import {useImages} from "../../../hooks/images";

interface IShopItemProps {

}

export const ShopItem:React.FC<IShopItemProps> = () => {
    const {servers_2} = useImages()

    return (
        <div className="cards-categories__column">
            <a href=""
               className="cards-categories__item item-cards-categories item-cards-categories_1">
                <div className="item-cards-categories__body">
                    <span className="item-cards-categories__name">PvP Simple Kit</span>
                    <span className="item-cards-categories__image">
                        <img src={servers_2} alt="PvP Simple Kit"/>
                    </span>
                </div>
                <div
                    className="item-cards-categories__bottom bottom-item-cards-categories">
                    <div className="bottom-item-cards-categories__row">
                        <div className="bottom-item-cards-categories__number">x1</div>
                        <div className="bottom-item-cards-categories__price">60 EC</div>
                    </div>
                </div>
            </a>
        </div>
    )
}
