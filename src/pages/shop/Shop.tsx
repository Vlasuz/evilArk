import React, {createContext, useEffect, useState} from 'react'
import {Footer} from "../../components/footer/footer";
import {ShopTop} from "./components/shopTop";
import {ShopAccount} from "./components/shopAccount";
import {ShopFilter} from "./components/shopFilter";
import {ShopItem} from "./components/shopItem";
import {ShopItemMore} from "./components/shopItemMore";
import {ICategory, IFilterShop, IProduct} from "../../models";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../redux/toolkitSlice";
import {apiLink} from "../../hooks/apiLink";
import ReactHtmlParser from "html-react-parser";
import {Translate} from "../../components/translate/Translate";
import {ShopStyled} from "./Shop.styled";

interface IShopProps {

}

export const isOpenPopupContext: any = createContext(null);

export const Shop: React.FC<IShopProps> = () => {

    const [filter, setFilter] = useState<IFilterShop>({
        name: '',
        orderBy: {
            order: '',
            isFromLow: true
        },
        category: [],
    })

    const [activeProduct, setActiveProduct] = useState('')
    const userInfo = useSelector((state: any) => state.toolkit.user)
    const [shop, setShop] = useState<IProduct[]>([])
    const category: ICategory = useSelector((state: any) => state.toolkit.category)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        asyncLoading()
    }, [category])

    const asyncLoading = async () => {
        await axios.get(apiLink('api/products?server_id=' + category.id)).then(({data}) => {
            setShop(data.data)
            setIsLoading(false)
        }).catch(er => console.log(er))
    }

    useEffect(() => {
        setIsLoading(true)
    }, [category])

    console.log(shop)
    return (
        <isOpenPopupContext.Provider value={setActiveProduct}>
            <ShopStyled>
                <main onClick={_ => activeProduct && setActiveProduct('')}
                      className={"categories" + (activeProduct ? " product-select" : "")}>
                    <section className="categories__main">
                        <div className="categories__container container">
                            <div className="categories__body">
                                <h2 className="categories__title title-h2">
                                    <Translate>text_shop</Translate>
                                </h2>
                                <div className="categories__inner">
                                    <ShopTop/>
                                    {!!Object.keys(userInfo).length && <ShopAccount userInfo={userInfo}/>}
                                    <div className="categories__cards cards-categories">
                                        <ShopFilter setFilter={setFilter} filter={filter}/>
                                        <div className="cards-categories__body">
                                            {!isLoading ? <div className="cards-categories__row">
                                                {
                                                    !!shop.length ? shop
                                                            ?.filter(item => item.name.toLowerCase().includes(filter.name.toLowerCase()))
                                                            ?.filter(item => filter.category.length ? item.category.some((cat, index) => filter.category.some(cat2 => cat2 === cat.id)) : item)
                                                            ?.sort((a: IProduct, b: IProduct) => filter?.orderBy?.order?.toLowerCase() === "price" ? (filter?.orderBy?.isFromLow ? +a.price - +b.price : +b.price - +a.price) : 1)
                                                            .map((item: IProduct, index: number) => <ShopItem key={index}
                                                                                                              data={item}/>) :
                                                        <p className={"NotFound"}>Not found</p>
                                                }
                                            </div> : <p className={"LoadingProducts"}>Loading...</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer/>
                </main>
                <ShopItemMore isActive={activeProduct}/>
            </ShopStyled>
        </isOpenPopupContext.Provider>
    )
}
