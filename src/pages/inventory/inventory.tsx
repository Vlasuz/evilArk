import React, {useEffect} from 'react'
import {Footer} from '../../components/footer/footer'
import {ProfileSidebar} from "../../components/profileSidebar/profileSidebar";
import {Product} from "../../components/product/products";
import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";
import {Grid, Pagination} from 'swiper';

import "swiper/css/grid";

interface IInventoryProps {

}

export const Inventory: React.FC<IInventoryProps> = () => {

    return (
        <main className="inventory">
            <section className="inventory__main">
                <div className="inventory__container container">
                    <div className="inventory__body">
                        <h2 className="inventory__title title-h2">Inventory</h2>
                        <div className="inventory__inner inner">
                            <div className="inner__row">
                                <ProfileSidebar/>
                                <div className="inner__content content-inner">
                                    <div className="content-inner__body">
                                        <div className="replenishment-bonuses__title">
                                            Store purchase history
                                        </div>
                                        <div className="purchases__items">

                                            <Swiper
                                                slidesPerView={6}
                                                spaceBetween={37}
                                                modules={[Grid, Pagination]}
                                                navigation={{
                                                    prevEl: ".purchases-slider__btn_prev",
                                                    nextEl: ".purchases-slider__btn_next",
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                    el: '.purchases-slider__pagination'
                                                }}
                                                grid={{rows: 2, fill: "row"}}
                                            >
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Product isCanGet={true}/>
                                                </SwiperSlide>
                                            </Swiper>

                                        </div>
                                    </div>
                                    <div className="purchases-slider__navigation">
                                        <div className="purchases-slider__btn purchases-slider__btn_prev"/>
                                        <div className="purchases-slider__pagination"/>
                                        <div className="purchases-slider__btn purchases-slider__btn_next"/>
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
