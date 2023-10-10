import React, { useEffect } from 'react'
import {IProduct} from "../../models";

interface IProductProps {
    isCanGet: boolean
    data?: IProduct
}

export const Product:React.FC<IProductProps> = ({isCanGet, data}) => {

    const handleGetInGame = () => {
        console.log('get in game', data)
    }

    return (
        <div className="purchases__column">
            <div className="purchases__item item-purchases">
                <div className="item-purchases__image-block">
                    <div className="item-purchases__image">
                        <img src={data?.icon} alt="PvP Simple Kit"/>
                    </div>
                </div>
                <div className="item-purchases__name">
                    {data?.name}
                </div>
                <div className="item-purchases__bottom">
                    <div className="item-purchases__number">
                        X<span>{data?.amount}</span>
                    </div>
                    <div className="item-purchases__line">

                    </div>
                    <div className="item-purchases__price">{data?.price} EC
                    </div>
                </div>
                {isCanGet && <button onClick={handleGetInGame} className="item-purchases__btn">
                    Get in game
                </button>}
            </div>
        </div>
    )
}
