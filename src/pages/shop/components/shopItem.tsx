import React, {useContext, useEffect} from 'react'
import {useImages} from "../../../hooks/images";
import {IProduct} from "../../../models";
import {isOpenPopupContext} from "../shop";

interface IShopItemProps {
    data: IProduct
}

export const ShopItem:React.FC<IShopItemProps> = ({data}) => {

    const setActiveProduct: any = useContext(isOpenPopupContext)

    const handleOpenProduct = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setActiveProduct(data.id)
    }

    return (
        <div className="cards-categories__column">
            <a href={""} onClick={e => handleOpenProduct(e)} className="cards-categories__item item-cards-categories item-cards-categories_1">
                <div className="item-cards-categories__body">
                    <span className="item-cards-categories__name">
                        {data.name}
                    </span>
                    <span className="item-cards-categories__image">
                        <img src={data.icon} alt="PvP Simple Kit"/>
                    </span>
                </div>
                <div className="item-cards-categories__bottom bottom-item-cards-categories">
                    <div className="bottom-item-cards-categories__row">
                        <div className="bottom-item-cards-categories__number">x{data.amount}</div>
                        <div className="bottom-item-cards-categories__price">{data.price} EC</div>
                    </div>
                </div>
            </a>
        </div>
    )
}