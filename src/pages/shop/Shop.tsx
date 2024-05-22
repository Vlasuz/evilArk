import React, {createContext, useEffect, useState} from 'react'
import {Footer} from "../../components/footer/Footer";
import {ShopTop} from "./components/shopTop";
import {ShopAccount} from "./components/shopAccount";
import {ShopFilter} from "./components/shopFilter";
import {ShopItem} from "./components/shopItem";
import {ShopItemMore} from "./components/shopItemMore";
import {ICategory, IFilterShop, IProduct, IUser} from "../../models";
import axios from "axios";
import {useSelector} from "react-redux";
import {apiLink} from "../../hooks/apiLink";
import {Translate} from "../../components/translate/Translate";
import {ShopStyled} from "./Shop.styled";
import {toast} from "react-toastify";
import loading = toast.loading;
import getCookies from "../../functions/getCookie";

interface IShopProps {

}

export const isOpenPopupContext: any = createContext(null);
export const ProductProposeContext: any = createContext(null)

export const Shop: React.FC<IShopProps> = () => {

    const [filter, setFilter] = useState<IFilterShop>({
        searchTerm: "",
        category: "",
        orderBy: "",
        orderDirection: ""
    })

    const [activeProduct, setActiveProduct] = useState('')
    const [shop, setShop] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isCanUseFilter, setIsCanUseFilter] = useState(false);
    const [pagination, setPagination] = useState<any>([])

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const category: ICategory = useSelector((state: any) => state.toolkit.category)
    const language = useSelector((state: any) => state.toolkit.language)

    useEffect(() => {
        if(!isCanUseFilter) return
        setIsLoading(true)
        asyncLoading("")
    }, [filter])

    const asyncLoading = (url?: string) => {
        const axiosUrl = url ? url : apiLink(`api/products?user_id=${userInfo.id ?? ""}`)

        axios.post(`${axiosUrl}&language=${language}`, {
            server_id: category.id,
            ...filter
        }).then(({data}) => {

            setShop(data.data)
            setPagination(data.meta.links)
            setIsLoading(false)
            setIsCanUseFilter(true)

        }).catch(er => console.log(er))
    }

    useEffect(() => {
        setIsLoading(true)
    }, [category])

    useEffect(() => {
        if(!language) return;
        if(!userInfo?.id && getCookies("access_token")) return;

        asyncLoading("")
    }, [language, userInfo, category])

    const [productPropose, setProductPropose] = useState('')

    const handleClosePopup = () => {
        if(!activeProduct) return;

         setActiveProduct('')
        setProductPropose('')
    }

    const handleSwitchPage = (url: string) => {
        setIsLoading(true)
        asyncLoading(url)
    }

    return (
        <ProductProposeContext.Provider value={setProductPropose}>
            <isOpenPopupContext.Provider value={setActiveProduct}>
                <ShopStyled>
                    <main onClick={handleClosePopup}
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
                                            <ShopFilter filter={filter} setFilter={setFilter}/>
                                            <div className="cards-categories__body">
                                                {!isLoading ? <div className="cards-categories__row">
                                                        {
                                                            !!shop.length ? shop.map((item: IProduct, index: number) =>
                                                                    <ShopItem key={index} data={item}/>) :
                                                                <p className={"NotFound"}>Not found</p>
                                                        }
                                                    </div> :
                                                    <p className={"LoadingProducts"}><Translate>loading</Translate></p>}
                                            </div>
                                        </div>

                                        <div className="shop__pagination">

                                            {
                                                pagination.length > 3 && pagination?.map((pag: any, index: any) =>
                                                    <button key={pag.url + index} className={pag.active ? " _active" : ""}
                                                            onClick={_ => handleSwitchPage(pag.url)}>{pag.label}</button>
                                                )
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <Footer/>
                    </main>
                    <ShopItemMore isActive={activeProduct}/>
                    <ShopItemMore isActive={productPropose} isPropose={true}/>
                </ShopStyled>
            </isOpenPopupContext.Provider>
        </ProductProposeContext.Provider>
    )
}
