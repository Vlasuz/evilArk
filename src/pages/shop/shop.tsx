import React, {useEffect, useState} from 'react'
import {Footer} from "../../components/footer/footer";
import {ShopTop} from "./components/shopTop";
import {ShopAccount} from "./components/shopAccount";
import {ShopFilter} from "./components/shopFilter";
import {ShopItem} from "./components/shopItem";
import {ShopItemMore} from "./components/shopItemMore";
import {IFilterShop} from "../../models";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../redux/toolkitSlice";

interface IShopProps {

}

export const Shop:React.FC<IShopProps> = () => {

    const [filter, setFilter] = useState<IFilterShop>({
            name: '',
            orderBy: {
                order: '',
                isFromLow: true
            },
            category: [],
    })
    const [shop, setShop] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const isChosenCategory = useSelector((state: any) => state.toolkit.category)

    useEffect(() => {
        console.log(filter)
    }, [filter])


    useEffect(() => {

        axios.get('http://13.51.206.222/api/products?server_id=1').then(({data}) => {
            setShop(data)
        })

        if(!isChosenCategory) {
            navigate('/category')
            dispatch(setPage(location.pathname))
        }

    }, [])


    return (
        <main className="categories">
            <section className="categories__main">
                <div className="categories__container container">
                    <div className="categories__body">
                        <h2 className="categories__title title-h2">Shop</h2>
                        <div className="categories__inner">
                            <ShopTop/>
                            {/*<ShopAccount/>*/}
                            <div className="categories__cards cards-categories">
                                <ShopFilter setFilter={setFilter} filter={filter}/>
                                <div className="cards-categories__body">
                                    <div className="cards-categories__row">
                                        <ShopItem/>

                                        {
                                            // shop.map((item: any) => <ShopItem/>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ShopItemMore/>
            </section>
            <Footer/>
        </main>
    )
}
