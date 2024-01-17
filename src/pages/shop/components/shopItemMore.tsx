import React, {createContext, useContext, useEffect, useState} from 'react'
import axios from "axios";
import {apiLink} from "../../../hooks/apiLink";
import {isOpenPopupContext, ProductProposeContext} from "../Shop";
import {useImages} from "../../../hooks/images";
import {ICategory, IProduct, IProductSingle, IUser} from "../../../models";
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
    isPropose?: boolean
    isInventory?: boolean
}

export const ProductModule: any = createContext(null)

export const ShopItemMore: React.FC<IShopItemMoreProps> = ({isActive, isPropose, isInventory}) => {
    console.log(isActive)

    const {arrowWhite} = useImages()

    const [product, setProduct] = useState<IProductSingle>()
    const [chosenProduct, setChosenProduct] = useState<IProductSingle | undefined>()
    const [count, setCount] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [productModule, setProductModule]: any = useState("")
    const [isWantToBuy, setIsWantToBuy] = useState(false)
    const [isShowDescription, setIsShowDescription] = useState(false)

    const [chosenProposalProducts, setChosenProposalProducts] = useState<IProduct[]>([])

    const dispatch = useDispatch()
    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const category: ICategory = useSelector((state: any) => state.toolkit.category)
    const language = useSelector((state: any) => state.toolkit.language)

    useEffect(() => {
        isActive && axios.get(apiLink(`api/products/${isActive}?user_id=${userInfo.id ?? ""}&language=${language}&is_inventory=${isInventory}`)).then(({data}) => {
            setProduct(data.data)
            setProductModule(data.data?.module?.length && data.data?.module[0].id)

            setChosenProduct(data.data?.module?.length && data.data?.module[0].products[0])
        })

        setChosenProposalProducts([])

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
        axios.post(apiLink(`api/products/buy`), {
            "server_id": category.id,
            "amount": count,
            "module_id": productModule,
            "isModule": product?.is_module,
            "ids": [chosenProduct?.id ?? product?.id, ...chosenProposalProducts.map(item => item.id)]
        }).then(({data}) => {

            console.log(data)

            notifications(data.data.message)

            setIsLoading(false)
            setIsWantToBuy(false)
            if (!data.data.success) return;

            dispatch(changeUserBalance({
                balance: !product?.is_price_bonus && product?.price && (chosenProduct?.price ? +chosenProduct?.price * count : +product?.price * count),
                balance_bonus: product?.is_price_bonus && product?.price && (chosenProduct?.price ? +chosenProduct?.price * count : +product?.price * count),
                cluster: category.id
            }))
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
        setIsShowDescription(false)
    }, [isActive])

    const isAnyoneHave = !!product?.damage || !!product?.durability || !!product?.food || !!product?.health || !!product?.movement_speed || !!product?.neuter || !!product?.oxygen || !!product?.stamina || !!product?.torpidity || !!product?.weight || (!!product?.sex && product?.sex !== "product");

    const [priceForPropose, setPriceForPropose] = useState(0)

    const handleChooseProposalProduct = (prod: IProduct) => {
        if (chosenProposalProducts.some(item => item.id === prod.id)) {
            setChosenProposalProducts(prev => prev.filter(item => item.id !== prod.id))
        } else {
            setChosenProposalProducts((prev: any) => [...prev, prod])
        }

    }

    useEffect(() => {
        const amount = chosenProposalProducts.reduce((sum, item) => {
            return sum + +(item.price || 0);
        }, 0)

        setPriceForPropose(amount)
    }, [chosenProposalProducts])

    const setProposeProduct: any = useContext(ProductProposeContext)

    const chosenProductPrice = chosenProduct?.price && (+chosenProduct?.price * +count + priceForPropose).toFixed(2)
    const defaultProductPrice = product?.price && (+product?.price * +count + priceForPropose).toFixed(2)

    const chosenProductSalesPrice = chosenProduct?.price_without_sales && (+chosenProduct?.price_without_sales * +count).toFixed(2)
    const defaultProductSalesPrice = product?.price_without_sales && (+product?.price_without_sales * +count).toFixed(2)

    const isHaveDefaultProductSales = product?.price_without_sales && product?.price_without_sales !== product?.price
    const isHaveChosenProductSales = chosenProduct?.price_without_sales && chosenProduct?.price_without_sales !== chosenProduct?.price

    return (
        <ProductModule.Provider value={setProductModule}>
            <div className={"categories__select-product select-product" + (!!isActive ? " active" : "")}>
                <div className="select-product__body">
                    <button onClick={_ => isPropose ? setProposeProduct("") : isActivePopup(false)} className="select-product__btn-close">
                        <img src={arrowWhite} alt="arrow"/>
                    </button>
                    <div className="select-product__form">
                        <h4 className="select-product__title title-h4">
                            {/*<Translate>selected_product</Translate>*/}
                            {chosenProduct?.name ?? product?.name}
                        </h4>
                        <div className="select-product__control-panel control-panel-select-product">
                        </div>
                        <div className="select-product__about-product">

                            <img width="250" height="250" src={chosenProduct?.icon ?? product?.icon} alt=""/>
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
                                    {!!product?.stamina &&
                                        <ShopItemTableItem value={product?.stamina} name={"stamina"}/>}
                                    {!!product?.torpidity &&
                                        <ShopItemTableItem value={product?.torpidity} name={"torpidity"}/>}
                                    {!!product?.weight && <ShopItemTableItem value={product?.weight} name={"weight"}/>}
                                    {!!product?.sex && product?.sex !== "product" &&
                                        <ShopItemTableItem value={product?.sex ?? ""} name={"sex"}/>}

                                </div>
                            </div>}

                        </div>

                        <div className="select-product__description">
                            {isShowDescription && ReactHtmlParser(product?.description ?? "")}
                            <button onClick={_ => setIsShowDescription(prev => !prev)}
                                    className={"show-more-description"}>
                                {isShowDescription ? <Translate>close_instruction</Translate> :
                                    <Translate>open_instruction</Translate>}
                            </button>
                        </div>

                        {!!product?.is_case && <div className="select-product__rare rare-select-product">
                            <div className="rare-select-product__options">
                                <div className="rare-select-product__title">
                                    <Translate>cases_products</Translate>
                                </div>

                                {
                                    product?.case?.map((item: IProduct) =>
                                        <div onClick={_ => setProposeProduct(item.id)} key={item.id} className="rare-select-product__item">
                                            <div className="label-rare-select-product__row">
                                                <div className="label-rare-select-product__image">
                                                    <img src={item.icon} alt="organic"/>
                                                </div>
                                                <div className="label-rare-select-product__name">
                                                    {item.name} <b>x{item?.size}</b>
                                                </div>
                                                {/*<div className="label-rare-select-product__price">*/}
                                                {/*    <span>{item.price} EC</span>*/}
                                                {/*    {item.price_without_sales !== item.price && <div*/}
                                                {/*        className="bottom-item-cards-categories__price_old">{item.price_without_sales} EC</div>}*/}
                                                {/*    <div className="bottom-item-cards-categories__price_now">{item.price} EC</div>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>}

                        {!isInventory &&
                            <>
                                <div
                                    className="select-product__characteristics characteristics-select-product characteristics-select-product_no-authorization">
                                    <div className="characteristics-select-product__row">
                                        {!!product?.module?.length && <div className="characteristics-select-product__column">
                                            <ShopItemMoreSelect setProduct={setChosenProduct}
                                                                modules={product?.module[0].products}/>
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
                                                <div className="characteristics-select-product__price">

                                                    {
                                                        isHaveDefaultProductSales && <div
                                                            className="bottom-item-cards-categories__price_old">
                                                            {defaultProductSalesPrice} EC
                                                        </div>
                                                    }
                                                    {
                                                        isHaveChosenProductSales && <div
                                                            className="bottom-item-cards-categories__price_old">
                                                            {chosenProductSalesPrice} EC
                                                        </div>
                                                    }

                                                    <div className="bottom-item-cards-categories__price_now">
                                                        {chosenProduct?.price ? chosenProductPrice : defaultProductPrice} {product?.is_price_bonus && "Bonus"} EC
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="select-product__bottom bottom-select-product bottom-select-product_no-authorization">
                                            {isWantToBuy && <h3><Translate>are_you_sure_to_buy</Translate></h3>}
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
                                                            <Translate>yes</Translate>
                                                        </button>
                                                        <button style={{background: "dimgrey", marginLeft: "15px"}}
                                                                onClick={_ => setIsWantToBuy(false)}
                                                                className={'bottom-select-product__btn' + (isLoading ? " loading" : "")}>
                                                            <Translate>no</Translate>
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
                                {!!product?.proposal?.length && <div className="proposal">
                                    <div className="characteristics-select-product__label">
                                        <Translate>proposal_title</Translate>
                                    </div>
                                    <ul>

                                        {
                                            product?.proposal.map(prop => {
                                                return (
                                                    <li>
                                                        <input
                                                            checked={chosenProposalProducts.some(item => item.id === prop.id)}
                                                            type="checkbox" id={`${prop.id}`}
                                                            onChange={_ => handleChooseProposalProduct(prop)}/>
                                                        <label htmlFor={`${prop.id}`}>
                                                            <p>{prop.name}</p>
                                                            <img src={prop.icon} alt=""/>
                                                            <p className={"price"}>
                                                                {prop.price} EC
                                                            </p>
                                                        </label>
                                                        <button onClick={_ => setProposeProduct(prop.id)} />
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>}
                            </>
                        }

                    </div>
                </div>
            </div>
        </ProductModule.Provider>
    )
}
