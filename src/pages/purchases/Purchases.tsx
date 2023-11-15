import React, {useEffect, useState} from 'react'
import {Footer} from '../../components/footer/footer'
import {ProfileSidebar} from "../../components/profileSidebar/ProfileSidebar";
import {Product} from "../../components/product/products";
import {HistoryRouletteItem} from "../../components/historyRouletteItem/historyRouletteItem";
import {Grid, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {Translate} from "../../components/translate/Translate";

interface IPurchasesProps {

}

export const Purchases: React.FC<IPurchasesProps> = () => {

    const [isLoad, setIsLoad] = useState(false)
    const [historyPurchases, setHistoryPurchases] = useState([])
    const [historyRoulette, setHistoryRoulette] = useState([])

    useEffect(() => {
        axios.get(apiLink("api/users/history")).then(({data}) => {
            setHistoryPurchases(data.data)
            setIsLoad(true)
        })

        axios.get(apiLink("api/users/roulette-history")).then(({data}) => {
            setHistoryRoulette(data.data)
        }).catch(er => console.log(er))
    }, [])

    return (
        <main className="purchases">
            <section className="purchases__main">
                <div className="purchases__container container">
                    <div className="purchases__body">
                        <h2 className="purchases__title title-h2">
                            <Translate>my_purchases</Translate>
                        </h2>
                        <div className="purchases__inner inner">
                            <div className="inner__row">
                                <ProfileSidebar/>
                                <div className="inner__content content-inner">
                                    <div className="content-inner__body">
                                        <div className="replenishment-bonuses__title">
                                            <Translate>purchase_history</Translate>
                                        </div>
                                        <div className="purchases__items">

                                            {isLoad && <Swiper
                                                slidesPerView={6}
                                                spaceBetween={37}
                                                slidesPerGroup={6}
                                                modules={[Grid, Pagination]}
                                                grid={{rows: 2, fill: "row"}}
                                                navigation={{
                                                    prevEl: ".purchases-slider__navigation .purchases-slider__btn_prev",
                                                    nextEl: ".purchases-slider__navigation .purchases-slider__btn_next",
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                    el: '.purchases-slider__navigation .purchases-slider__pagination'
                                                }}
                                                breakpoints={{
                                                    768: {
                                                        slidesPerView: 6,
                                                        grid: {rows: 2, fill: "row"}
                                                    },
                                                    700: {
                                                        slidesPerView: 4,
                                                        slidesPerGroup: 4,
                                                        grid: {rows: 2, fill: "row"}
                                                    },
                                                    540: {
                                                        slidesPerView: 3,
                                                        slidesPerGroup: 3,
                                                        grid: {rows: 2, fill: "row"}
                                                    },
                                                    320: {
                                                        spaceBetween: 15,
                                                        slidesPerView: 2,
                                                        slidesPerGroup: 2,
                                                        grid: {rows: 2, fill: "row"}
                                                    }
                                                }}
                                            >

                                                {
                                                    historyPurchases.map((item, index) =>
                                                        <SwiperSlide key={index}>
                                                            <Product product={item} isCanGet={false}/>
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
                                            <Translate>roulette_history</Translate>
                                        </div>

                                        {isLoad && <Swiper
                                            slidesPerView={1}
                                            spaceBetween={20}
                                            slidesPerGroup={1}
                                            modules={[Grid, Pagination]}
                                            grid={{rows: 6, fill: "row"}}
                                            navigation={{
                                                prevEl: ".users__navigation .users__btn_prev",
                                                nextEl: ".users__navigation .users__btn_next",
                                            }}
                                            pagination={{
                                                clickable: true,
                                                el: '.users__navigation .users__pagination'
                                            }}
                                        >
                                            {
                                                historyRoulette.map((item: any, index) =>
                                                    <SwiperSlide key={index}>
                                                        <HistoryRouletteItem data={item}/>
                                                    </SwiperSlide>
                                                )
                                            }
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
