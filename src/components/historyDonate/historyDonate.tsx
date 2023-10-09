import React, {useEffect} from 'react'
import {HistoryDonateItem} from "./components/historyDonateItem";
import {Grid, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Product} from "../product/products";

interface IHistoryDonateProps {

}

export const HistoryDonate: React.FC<IHistoryDonateProps> = () => {

    return (
        <div className="profile__history history-profile">
            <div className="history-profile__title replenishment-bonuses__title">
                History of donations
            </div>

            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                modules={[Grid, Pagination]}
                navigation={{
                    prevEl: ".purchases-slider__btn_prev",
                    nextEl: ".purchases-slider__btn_next",
                }}
                pagination={{
                    clickable: true,
                    el: '.purchases-slider__pagination'
                }}
                grid={{rows: 3, fill: "row"}}
            >
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <HistoryDonateItem/>
                </SwiperSlide>
            </Swiper>

            <div className="purchases-slider__navigation">
                <div className="purchases-slider__btn purchases-slider__btn_prev"/>
                <div className="purchases-slider__pagination"/>
                <div className="purchases-slider__btn purchases-slider__btn_next"/>
            </div>
        </div>
    )
}
