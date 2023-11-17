import React, {useEffect, useState} from 'react'
import {Footer} from '../../components/footer/footer'
import {ProfileSidebar} from "../../components/profileSidebar/ProfileSidebar";
import {Product} from "../../components/product/products";
import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";
import {Grid, Pagination} from 'swiper';

import "swiper/css/grid";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import getCookies from "../../functions/getCookie";
import {IProduct} from "../../models";
import {Translate} from "../../components/translate/Translate";

interface IInventoryProps {

}

export const Inventory: React.FC<IInventoryProps> = () => {

    const [isLoad, setIsLoad] = useState(false)
    const [inventory, setInventory] = useState<IProduct[]>([])

    useEffect(() => {
        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.get(apiLink('api/users/inventory')).then(({data}) => {
            setInventory(data.data)
            setIsLoad(true)
        }).catch(er => console.log("api/users/inventory", er))
    }, [])

    const [isHidePagination, setIsHidePagination] = useState(false)

    useEffect(() => {
        isLoad && setIsHidePagination(document.querySelectorAll('.purchases-slider__pagination span').length <= 1)
    }, [isLoad])

    return (
        <main className="inventory">
            <section className="inventory__main">
                <div className="inventory__container container">
                    <div className="inventory__body">
                        <h2 className="inventory__title title-h2">
                            <Translate>my_inventory</Translate>
                        </h2>
                        <div className="inventory__inner inner">
                            <div className="inner__row">
                                <ProfileSidebar/>
                                <div className="inner__content content-inner">
                                    <div className="content-inner__body">
                                        <div className="purchases__items">

                                            {isLoad && <Swiper
                                                slidesPerView={6}
                                                spaceBetween={37}
                                                slidesPerGroup={5}
                                                modules={[Grid, Pagination]}
                                                navigation={{
                                                    prevEl: ".purchases-slider__navigation .purchases-slider__btn_prev",
                                                    nextEl: ".purchases-slider__navigation .purchases-slider__btn_next",
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                    el: '.purchases-slider__navigation .purchases-slider__pagination'
                                                }}
                                                grid={{rows: 2, fill: "row"}}
                                                breakpoints={{
                                                    768: {
                                                        slidesPerView: 5,
                                                    },
                                                    700: {
                                                        slidesPerView: 4,
                                                    },
                                                    540: {
                                                        slidesPerView: 3,
                                                    },
                                                    320: {
                                                        spaceBetween: 15,
                                                        slidesPerView: 2,
                                                    }
                                                }}
                                            >
                                                {
                                                    inventory.map((item: IProduct, index: number) =>
                                                        <SwiperSlide key={index}>
                                                            <Product product={item} setInventory={setInventory}
                                                                     isCanGet={true}/>
                                                        </SwiperSlide>
                                                    )
                                                }
                                            </Swiper>}

                                        </div>
                                    </div>

                                    {!isHidePagination && <div className="purchases-slider__navigation">
                                        <div className="purchases-slider__btn purchases-slider__btn_prev"/>
                                        <div className="purchases-slider__pagination"/>
                                        <div className="purchases-slider__btn purchases-slider__btn_next"/>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
