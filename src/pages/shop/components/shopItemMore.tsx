import React, {createContext, useContext, useEffect, useState} from 'react'
import axios from "axios";
import {apiLink} from "../../../hooks/apiLink";
import {isOpenPopupContext} from "../Shop";
import {useImages} from "../../../hooks/images";
import {ICategory, IProduct, IProductSingle} from "../../../models";
import getCookies from "../../../functions/getCookie";
import {useDispatch, useSelector} from "react-redux";
import {changeUserBalance} from '../../../redux/toolkitSlice';
import {ShopItemMoreSelect} from "./shopItemMoreSelect";
import {toast} from "react-toastify";
import {notifications} from "../../../hooks/notifications";
import {Translate} from "../../../components/translate/Translate";
import {ShopItemTableItem} from "./ShopItemTableItem";
import ReactHtmlParser from "html-react-parser";

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
    const [isWantToBuy, setIsWantToBuy] = useState(false)

    const dispatch = useDispatch()
    const category: ICategory = useSelector((state: any) => state.toolkit.category)
    const language = useSelector((state: any) => state.toolkit.language)

    useEffect(() => {
        isActive && axios.get(apiLink('api/products/' + isActive)).then(({data}) => {
            setProduct(data.data)
            setProductModule(data.data?.modules.length && data.data?.modules[0].id)
        })
    }, [isActive])

    const isActivePopup: any = useContext(isOpenPopupContext)

    const handleClickButtonBuy = () => {
        setError('')
        setIsWantToBuy(true)
    }

    const handleBuy = () => {
        setIsLoading(true)
        setError('')

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink('api/products/buy/' + product?.id), {
            "server_id": category.id,
            "amount": count,
            "module_id": productModule
        }).then(({data}) => {

            notifications(data.data.message)

            setIsLoading(false)
            setIsWantToBuy(false)
            if (!data.data.success) return;

            dispatch(changeUserBalance(product?.price && +product?.price * count))
        }).catch(er => {
            notifications(er?.response?.status)
            setIsLoading(false)
            setIsWantToBuy(false)
        })
    }

    useEffect(() => {
        if (isActive) return;

        setIsLoading(false)
        setError('')
        setCount(1)
        setIsWantToBuy(false)
    }, [isActive])

    const isAnyoneHave = !!product?.damage || !!product?.durability || !!product?.food || !!product?.health || !!product?.movement_speed || !!product?.neuter || !!product?.oxygen || !!product?.stamina || !!product?.torpidity || !!product?.weight || product?.sex !== "product";

    const productName: any = {
        'ru': product?.name,
        'en': product?.name_en,
        'ua': product?.name_ua,
    }
    const productDescription: any = {
        'ru': product?.description,
        'en': product?.description_en,
        'ua': product?.description_ua,
    }

    return (
        <ProductModule.Provider value={setProductModule}>
            <div className={"categories__select-product select-product" + (!!isActive ? " active" : "")}>
                <div className="select-product__body">
                    <button onClick={_ => isActivePopup(false)} className="select-product__btn-close">
                        <img src={arrowWhite} alt="arrow"/>
                    </button>
                    <div className="select-product__form">
                        <h4 className="select-product__title title-h4">
                            <Translate>selected_product</Translate>
                        </h4>
                        <div className="select-product__control-panel control-panel-select-product">
                        </div>
                        <div className="select-product__about-product">
                            <div className="select-product__name">
                                {
                                    productName[language]
                                }
                            </div>
                            <div className="select-product__description">
                                {ReactHtmlParser(productDescription[language] ?? "")}
                            </div>
                        </div>

                        {!!product?.is_case && <div className="select-product__rare rare-select-product">
                            <div className="rare-select-product__options">
                                <div className="rare-select-product__title">
                                    Продукты в кейсе
                                </div>

                                {
                                    product?.case?.map((item: IProduct) =>
                                        <div key={item.id} className="rare-select-product__item">
                                            <div className="label-rare-select-product__row">
                                                <div className="label-rare-select-product__image">
                                                    <img src={item.icon} alt="organic"/>
                                                </div>
                                                <div className="label-rare-select-product__name">
                                                    {item.name}
                                                </div>
                                                <div className="label-rare-select-product__price">
                                                    <span>{item.price} EC</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>}

                        {isAnyoneHave && <div className="select-product__parameters parameters-select-product">
                            <div className="parameters-select-product__body">
                                {!!product?.damage && <ShopItemTableItem value={product?.damage} name={"damage"}/>}
                                {!!product?.durability &&
                                    <ShopItemTableItem value={product?.durability} name={"durability"}/>}
                                {!!product?.food && <ShopItemTableItem value={product?.food} name={"food"}/>}
                                {!!product?.health && <ShopItemTableItem value={product?.health} name={"health"}/>}
                                {!!product?.movement_speed &&
                                    <ShopItemTableItem value={product?.movement_speed} name={"movement speed"}/>}
                                {!!product?.neuter && <ShopItemTableItem value={product?.neuter} name={"neuter"}/>}
                                {!!product?.oxygen && <ShopItemTableItem value={product?.oxygen} name={"oxygen"}/>}
                                {!!product?.stamina && <ShopItemTableItem value={product?.stamina} name={"stamina"}/>}
                                {!!product?.torpidity &&
                                    <ShopItemTableItem value={product?.torpidity} name={"torpidity"}/>}
                                {!!product?.weight && <ShopItemTableItem value={product?.weight} name={"weight"}/>}
                                {product?.sex !== "product" &&
                                    <ShopItemTableItem value={product?.sex ?? ""} name={"sex"}/>}

                            </div>
                        </div>}

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
                                        <div className="characteristics-select-product__label">
                                            <Translate>quantity</Translate>
                                        </div>
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
                            {isWantToBuy && <h3>Вы подтверждаете покупку?</h3>}
                            <div className="bottom-select-product__row">
                                {
                                    !isWantToBuy && <button onClick={handleClickButtonBuy}
                                                            className={'bottom-select-product__btn'}>
                                        <Translate>buy_title</Translate>
                                    </button>
                                }

                                {
                                    isWantToBuy && <div style={{display: "flex"}}>
                                        <button onClick={handleBuy}
                                                className={'bottom-select-product__btn' + (isLoading ? " loading" : "")}>
                                            Да
                                        </button>
                                        <button style={{background: "dimgrey", marginLeft: "15px"}}
                                                onClick={_ => setIsWantToBuy(false)}
                                                className={'bottom-select-product__btn' + (isLoading ? " loading" : "")}>
                                            Нет
                                        </button>
                                    </div>
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
