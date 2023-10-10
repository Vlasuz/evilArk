import React, {useContext, useEffect, useState} from 'react'
import axios from "axios";
import {apiLink} from "../../../hooks/apiLink";
import {isOpenPopupContext} from "../shop";
import {useImages} from "../../../hooks/images";
import {IProduct} from "../../../models";
import getCookies from "../../../functions/getCookie";
import {useDispatch, useSelector} from "react-redux";
import {changeUserBalance} from '../../../redux/toolkitSlice';

interface IShopItemMoreProps {
    isActive: number | string
}

export const ShopItemMore: React.FC<IShopItemMoreProps> = ({isActive}) => {
    const {arrowWhite} = useImages()

    const [product, setProduct] = useState<IProduct>()
    const [count, setCount] = useState(1)
    const [isBought, setIsBought] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    const category = useSelector((state: any) => state.toolkit.category)

    useEffect(() => {
        isActive && axios.get(apiLink('api/products/' + isActive)).then(({data}) => {
            setProduct(data.data)
        })
    }, [isActive])

    const isActivePopup: any = useContext(isOpenPopupContext)

    const handleBuy = () => {
        setIsLoading(true)
        setError('')

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink('api/products/buy/' + product?.id), {
            "server_id": category,
            "amount": count
        }).then(({data}) => {
            setError(data.data.message)
            setIsLoading(false)
            if (!data.data.success) return;

            setIsBought(true)
            dispatch(changeUserBalance(product?.price && +product?.price * count))
        }).catch(er => {
            console.log(er)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        if (isActive) return;

        setIsLoading(false)
        setError('')
        setCount(1)
        setIsBought(false)
    }, [isActive])

    return (
        <div className={"categories__select-product select-product" + (!!isActive ? " active" : "")}>
            <div className="select-product__body">
                <button onClick={_ => isActivePopup(false)} className="select-product__btn-close">
                    <img src={arrowWhite} alt="arrow"/>
                </button>
                <div className="select-product__form">
                    <h4 className="select-product__title title-h4">Selected product</h4>
                    <div className="select-product__control-panel control-panel-select-product">
                        {/*<div*/}
                        {/*    className="control-panel-select-product__row control-panel-select-product__row_no-authorization">*/}
                        {/*    <a href=""*/}
                        {/*       className="control-panel-select-product__btn control-panel-select-product__btn_close">*/}
                        {/*        <img src="img/icons/close.svg" alt="close"/>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                    <div
                        className="select-product__about-product select-product__about-product_no-authorization">
                        <div className="select-product__name">
                            {product?.name}
                        </div>
                        <div className="select-product__description">
                            {product?.description}
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
                                        <input readOnly type='text' name='form[]' value='module 1 - 125 lvl'
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
                                        <button className="characteristics-select-product__minus"
                                                onClick={_ => setCount(prev => prev > 1 ? prev - 1 : prev)}>-
                                        </button>
                                        <input readOnly value={count} autoComplete='off' type='text'
                                               className='characteristics-select-product__input characteristics-select-product__input_quantity'/>
                                        <button className="characteristics-select-product__plus"
                                                onClick={_ => setCount(prev => prev + 1)}>+
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="characteristics-select-product__column characteristics-select-product__column_price">
                                <div
                                    className="characteristics-select-product__item characteristics-select-product__price">
                                    <div
                                        className="characteristics-select-product__price">{product?.price && (+product?.price * count).toFixed(2)} EC
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="select-product__bottom bottom-select-product bottom-select-product_no-authorization">
                        <div className="bottom-select-product__row">
                            {
                                !isLoading ?
                                !isBought ?
                                    <button onClick={handleBuy} className='bottom-select-product__btn'>Buy</button> :
                                    <div className="bought-success">You have just bought "{product?.name}" successfully</div> : '...'
                            }

                            {
                                <p className={'error'}>{error}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
