import React, { useEffect } from 'react'

interface IShopItemMoreProps {

}

export const ShopItemMore:React.FC<IShopItemMoreProps> = () => {

    return (
        <div className="categories__select-product select-product">
            <div className="select-product__body">
                <a href="" className="select-product__btn-close">
                    <img src="img/icons/arrow-white.svg" alt="arrow"/>
                </a>
                <form action="#" className="select-product__form">
                    <h4 className="select-product__title title-h4">Selected product</h4>
                    <div className="select-product__control-panel control-panel-select-product">
                        <div
                            className="control-panel-select-product__row control-panel-select-product__row_no-authorization">
                            <a href=""
                               className="control-panel-select-product__btn control-panel-select-product__btn_close">
                                <img src="img/icons/close.svg" alt="close"/>
                            </a>
                        </div>
                    </div>
                    <div
                        className="select-product__about-product select-product__about-product_no-authorization">
                        <div className="select-product__name">PvP Simple Kit</div>
                        <div className="select-product__description">
                            Description. Ideological considerations of a higher order, as well as the
                            implementation of the planned targets, play an important role in shaping the
                            positions taken by the participants in relation to the tasks set.
                        </div>
                    </div>
                    <div
                        className="select-product__characteristics characteristics-select-product characteristics-select-product_no-authorization">
                        <div className="characteristics-select-product__row">
                            <div className="characteristics-select-product__column">
                                <div
                                    className="characteristics-select-product__item characteristics-select-product__item_select-product">
                                    <div className="characteristics-select-product__label">Select Product:</div>
                                    <div className="characteristics-select-product__dropdown dropdown">
                                        <div className='dropdown__button'>Module 1 - 125 lvl</div>
                                        <ul className="dropdown__list">
                                            <li className="dropdown__list-item"
                                                data-dropdown="module 1 - 125 lvl">
                                                Module 1 - 125 lvl
                                            </li>
                                            <li className="dropdown__list-item"
                                                data-dropdown="module 2 - 125 lvl">
                                                Module 2 - 125 lvl
                                            </li>
                                        </ul>
                                        <input type='text' name='form[]' value='module 1 - 125 lvl'
                                               className='dropdown__input-hidden'/>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="characteristics-select-product__column characteristics-select-product__column_quatity">
                                <div
                                    className="characteristics-select-product__item characteristics-select-product__item_quantity">
                                    <div className="characteristics-select-product__label">Quantity</div>
                                    <div className="characteristics-select-product__input-block">
                                        <button className="characteristics-select-product__minus">-</button>
                                        <input value="1" autoComplete='off' type='text' name='form[]'
                                               className='characteristics-select-product__input characteristics-select-product__input_quantity'/>
                                        <button className="characteristics-select-product__plus">+</button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="characteristics-select-product__column characteristics-select-product__column_price">
                                <div
                                    className="characteristics-select-product__item characteristics-select-product__price">
                                    <div className="characteristics-select-product__price">100 EC</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="select-product__bottom bottom-select-product bottom-select-product_no-authorization">
                        <div className="bottom-select-product__row">
                            <button type='submit' className='bottom-select-product__btn'>Buy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
