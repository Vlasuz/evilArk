import React, {useContext, useEffect} from 'react'
import {useImages} from "../../../hooks/images";
import {IProduct} from "../../../models";
import {isOpenPopupContext} from "../Shop";
// @ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useSelector } from 'react-redux';


interface IShopItemProps {
    data: IProduct
}

export const ShopItem:React.FC<IShopItemProps> = ({data}) => {

    const setActiveProduct: any = useContext(isOpenPopupContext)

    const handleOpenProduct = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setActiveProduct(data.id)
    }
    
    const language = useSelector((state: any) => state.toolkit.language)

    const productName: any = {
        'en': data.name,
        'ru': data.name_en,
        'ua': data.name_ua,
    }

    return (
        <div className="cards-categories__column">
            <a href={""} onClick={e => handleOpenProduct(e)} className="cards-categories__item item-cards-categories item-cards-categories_1">
                <div className="item-cards-categories__body">
                    <span className="item-cards-categories__name">
                        {
                            productName[language]
                        }
                    </span>
                    <span className="item-cards-categories__image">
                        <LazyLoadImage src={data.icon} alt="PvP Simple Kit"/>
                    </span>
                </div>
                <div className="item-cards-categories__bottom bottom-item-cards-categories">
                    <div className="bottom-item-cards-categories__row">
                        <div className="bottom-item-cards-categories__number"></div>
                        <div className="bottom-item-cards-categories__price">
                            {data.price_without_sales !== data.price && <div
                                className="bottom-item-cards-categories__price_old">{data.price_without_sales} EC</div>}
                            <div className="bottom-item-cards-categories__price_now">{data.price} EC</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
