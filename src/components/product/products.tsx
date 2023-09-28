import React, { useEffect } from 'react'

interface IProductProps {
    isCanGet: boolean
}

export const Product:React.FC<IProductProps> = ({isCanGet}) => {

    return (
        <div className="purchases__column">
            <div className="purchases__item item-purchases">
                <div className="item-purchases__image-block">
                    <div className="item-purchases__image ibg">
                        <img src="img/purchases/01.svg" alt="PvP Simple Kit"/>
                    </div>
                </div>
                <div className="item-purchases__name">PvP Simple
                    Kit
                </div>
                <div className="item-purchases__bottom">
                    <div className="item-purchases__number">
                        X<span>1</span>
                    </div>
                    <div className="item-purchases__line">

                    </div>
                    <div className="item-purchases__price">60 EC
                    </div>
                </div>
                {isCanGet && <a href="" className="item-purchases__btn">
                    Get in game
                </a>}
            </div>
        </div>
    )
}
