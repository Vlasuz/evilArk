import React, {useEffect, useState} from 'react'
import {Footer} from '../../components/footer/footer'
import {ProfileSidebar} from "../../components/profileSidebar/profileSidebar";
import {Product} from "../../components/product/products";
import {HistoryRouletteItem} from "../../components/historyRouletteItem/historyRouletteItem";
import {Grid, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

interface IPurchasesProps {

}

export const Purchases: React.FC<IPurchasesProps> = () => {

    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setIsLoad(true)
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
                                            >
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={false}/>
                                                </SwiperSlide>
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
