import React, {useContext, useEffect} from 'react'
import {Translate} from "../../../components/translate/Translate";
import {ShopItemMoreSelect} from "../../shop/components/shopItemMoreSelect";
import {isOpenPopupContext} from '../Roulette';
import {IProduct} from "../../../models";

interface IRouletteCaseInfoProps {
    isActive: any
    activeCase: any
}

export const RouletteCaseInfo: React.FC<IRouletteCaseInfoProps> = ({isActive, activeCase}) => {

    const setIsActive: any = useContext(isOpenPopupContext)

    return (

        <div className={"categories__select-product select-product" + (!!isActive ? " active" : "")}>
            <div className="select-product__body">
                <button onClick={_ => setIsActive(false)} className="select-product__btn-close">
                    {/*<img src={arrowWhite} alt="arrow"/>*/}
                </button>
                <div className="select-product__form">
                    <h4 className="select-product__title title-h4">
                        {activeCase?.name}
                    </h4>
                    <div className="select-product__control-panel control-panel-select-product">
                    </div>
                    <div className="select-product__about-product">

                        <div className="rare-select-product__options">
                            <div className="rare-select-product__title">
                                Предметы в кейсе "{activeCase?.name}":
                            </div>

                            {
                                activeCase?.products?.map((item: IProduct) =>
                                    <div key={item.id} className="rare-select-product__item">
                                        <div className="label-rare-select-product__row">
                                            <div className="label-rare-select-product__image">
                                                <img src={item.icon} alt="organic"/>
                                            </div>
                                            <div className="label-rare-select-product__name">
                                                {item.name}
                                            </div>
                                            {/*<div className="label-rare-select-product__price">*/}
                                            {/*    <span>{item.name}</span>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>

                    <div
                        className="select-product__characteristics characteristics-select-product characteristics-select-product_no-authorization">

                    </div>
                </div>
            </div>
        </div>

    )
}
