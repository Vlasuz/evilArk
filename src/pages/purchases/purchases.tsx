import React, {useEffect, useState} from 'react'
import {Footer} from '../../components/footer/footer'
import {ProfileSidebar} from "../../components/profileSidebar/profileSidebar";
import {Product} from "../../components/product/products";
import {HistoryRouletteItem} from "../../components/historyRouletteItem/historyRouletteItem";
import {Grid, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";

interface IPurchasesProps {

}

export const Purchases: React.FC<IPurchasesProps> = () => {

    const [isLoad, setIsLoad] = useState(false)
    const [arrayPurchases, setArrayPurchases] = useState([])

    useEffect(() => {
        setIsLoad(true)
    }, [])

    useEffect(() => {
        axios.get(apiLink("api/users/history")).then(({data}) => {
            console.log('asdasd', data.data)
            setArrayPurchases(data.data)
        })
    }, [])

    return (
        <main className="purchases">
            <section className="purchases__main">
                <div className="purchases__container container">
                    <div className="purchases__body">
                        <h2 className="purchases__title title-h2">my purchases</h2>
                        <div className="purchases__inner inner">
                            <div className="inner__row">
                                <ProfileSidebar/>
                                <div className="inner__content content-inner">
                                    <div className="content-inner__body">
                                        <div className="replenishment-bonuses__title">
                                            Store purchase history
                                        </div>
                                        <div className="purchases__items">

                                            {isLoad && <Swiper
                                                slidesPerView={6}
                                                spaceBetween={37}
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
                                                        slidesPerView: 6,
                                                        grid: {rows: 2, fill: "row"}
                                                    },
                                                    700: {
                                                        slidesPerView: 4,
                                                        grid: {rows: 2, fill: "row"}
                                                    },
                                                    540: {
                                                        slidesPerView: 3,
                                                        grid: {rows: 2, fill: "row"}
                                                    },
                                                    320: {
                                                        spaceBetween: 15,
                                                        slidesPerView: 2,
                                                        grid: {rows: 2, fill: "row"}
                                                    }
                                                }}
                                            >

                                                {
                                                    arrayPurchases.map(item =>
                                                        <SwiperSlide>
                                                            <Product data={item} isCanGet={false}/>
                                                        </SwiperSlide>
                                                    )
                                                }

                                            </Swiper>}

                                        </div>
                                    </div>
                                    <div className="purchases-slider__navigation">
                                        <div className="purchases-slider__btn purchases-slider__btn_prev"/>
                                        <div className="purchases-slider__pagination"/>
                                        <div className="purchases-slider__btn purchases-slider__btn_next"/>
                                    </div>
                                    <div className="roulette__users purchases__users users">
                                        <div className="replenishment-bonuses__title">
                                            roulette winning history
                                        </div>


                                        {isLoad && <Swiper
                                            slidesPerView={1}
                                            modules={[Pagination]}
                                            navigation={{
                                                prevEl: ".users__navigation .users__btn_prev",
                                                nextEl: ".users__navigation .users__btn_next",
                                            }}
                                            pagination={{
                                                clickable: true,
                                                el: '.users__navigation .users__pagination'
                                            }}
                                        >
                                            <SwiperSlide>
                                                <HistoryRouletteItem/>
                                                <HistoryRouletteItem/>
                                                <HistoryRouletteItem/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <HistoryRouletteItem/>
                                                <HistoryRouletteItem/>
                                                <HistoryRouletteItem/>
                                            </SwiperSlide>
                                        </Swiper>}

                                        <div className="users__navigation">
                                            <div className="users__btn users__btn_prev"/>
                                            <div className="users__pagination"/>
                                            <div className="users__btn users__btn_next"/>
                                        </div>
                                    </div>
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
