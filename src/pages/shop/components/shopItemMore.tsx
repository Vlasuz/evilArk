import React, {createContext, useContext, useEffect, useState} from 'react'
import axios from "axios";
import {apiLink} from "../../../hooks/apiLink";
import {isOpenPopupContext} from "../shop";
import {useImages} from "../../../hooks/images";
import {IProduct, IProductSingle} from "../../../models";
import getCookies from "../../../functions/getCookie";
import {useDispatch, useSelector} from "react-redux";
import {changeUserBalance} from '../../../redux/toolkitSlice';
import {ShopItemMoreSelect} from "./shopItemMoreSelect";
import {toast} from "react-toastify";
import {notifications} from "../../../hooks/notifications";

interface IShopItemMoreProps {
    isActive: number | string
}

export const ProductModule: any = createContext(null)

export const ShopItemMore: React.FC<IShopItemMoreProps> = ({isActive}) => {
    const {arrowWhite} = useImages()

    const [product, setProduct] = useState<IProductSingle>()
    const [count, setCount] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [productModule, setProductModule]: any = useState("")

    const dispatch = useDispatch()
    const category = useSelector((state: any) => state.toolkit.category)

    useEffect(() => {
        isActive && axios.get(apiLink('api/products/' + isActive)).then(({data}) => {
            setProduct(data.data)
            setProductModule(data.data?.modules.length && data.data?.modules[0].id)
        })
    }, [isActive])

    const isActivePopup: any = useContext(isOpenPopupContext)

    const handleBuy = () => {
        setIsLoading(true)
        setError('')

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink('api/products/buy/' + product?.id), {
            "server_id": category,
            "amount": count,
            "module_id": productModule
        }).then(({data}) => {

            notifications(data.data.message)

            setIsLoading(false)
            if (!data.data.success) return;

            dispatch(changeUserBalance(product?.price && +product?.price * count))
        }).catch(er => {
            notifications(er.response.status)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        if (isActive) return;

        setIsLoading(false)
        setError('')
        setCount(1)
    }, [isActive])

    return (
        <ProductModule.Provider value={setProductModule}>
            <div className={"categories__select-product select-product" + (!!isActive ? " active" : "")}>
                <div className="select-product__body">
                    <button onClick={_ => isActivePopup(false)} className="select-product__btn-close">
                        <img src={arrowWhite} alt="arrow"/>
                    </button>
                    <div className="select-product__form">
                        <h4 className="select-product__title title-h4">Selected product</h4>
                        <div className="select-product__control-panel control-panel-select-product">
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
                                {!!product?.modules.length && <div className="characteristics-select-product__column">
                                    <ShopItemMoreSelect modules={product?.modules}/>
                                </div>}
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
                                     <button onClick={handleBuy} className={'bottom-select-product__btn' + (isLoading ? " loading" : "")}>Buy</button>
                                }

                                {
                                    <p className={'error'}>{error}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProductModule.Provider>
    )
}
