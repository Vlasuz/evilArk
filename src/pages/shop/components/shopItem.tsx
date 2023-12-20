import React, {useContext, useEffect} from 'react'
import {useImages} from "../../../hooks/images";
import {IProduct} from "../../../models";
import {isOpenPopupContext} from "../Shop";
// @ts-ignore
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {useSelector} from 'react-redux';


interface IShopItemProps {
    data: IProduct
}

export const ShopItem: React.FC<IShopItemProps> = ({data}) => {

    const setActiveProduct: any = useContext(isOpenPopupContext)

    const handleOpenProduct = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setActiveProduct(data.id)
    }

    const category = useSelector((state: any) => state.toolkit.category)

    const timeToSale = data?.category?.filter(item => item?.server?.id === category?.id)[0]?.discount[0]?.sales_by ?? data?.sales_by ?? "2023-12-20 16:56:00";

    const getTimeLeftUTC = (saleTime: string) => {
        const saleDate = new Date(saleTime);
        const now = new Date();

        const difference = saleDate.getTime() - now.getTime();
        const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutesLeft = Math.floor((difference / 1000 / 60) % 60);

        return { daysLeft, hoursLeft, minutesLeft };
    };

    const { daysLeft, hoursLeft, minutesLeft } = getTimeLeftUTC(timeToSale);



    const isTimerExpired = (endTime: string) => {
        const currentTime = new Date().getTime();
        const endTimeMillis = new Date(endTime).getTime();

        return currentTime >= endTimeMillis;
    };

    const timerExpired = isTimerExpired(timeToSale);

    return (
        <div className="cards-categories__column">
            <a href={""} onClick={e => handleOpenProduct(e)}
               className="cards-categories__item item-cards-categories item-cards-categories_1">
                {/*<div className="item-cards-categories__body">*/}
                {/*</div>*/}
                <span className="item-cards-categories__name">
                        {data.name}
                    </span>
                <span className="item-cards-categories__image">
                        <LazyLoadImage src={data.icon} alt="PvP Simple Kit"/>
                    </span>
                <div className="item-cards-categories__bottom bottom-item-cards-categories">
                    <div className="bottom-item-cards-categories__row">
                        <div className="bottom-item-cards-categories__number">

                            {
                                !timerExpired && `Скидка: `
                            }

                            <b>
                                {!timerExpired && `${daysLeft}d:${hoursLeft < 10 ? "0" + hoursLeft : hoursLeft}h:${minutesLeft < 10 ? "0" + minutesLeft : minutesLeft}m`}
                            </b>

                        </div>
                        <div className="bottom-item-cards-categories__price">

                            {data?.price_without_sales !== data.price && <div
                                className="bottom-item-cards-categories__price_old">{data?.price_without_sales} EC</div>}
                            <div className="bottom-item-cards-categories__price_now">{data.price} EC</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
