import React, {useEffect, useState} from 'react'
import {HistoryDonateItem} from "./components/historyDonateItem";
import {Grid, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Product} from "../product/Products";
import {apiLink} from "../../hooks/apiLink";
import axios from 'axios';
import {Translate} from "../translate/Translate";

interface IHistoryDonateProps {
    data: any
}

export const HistoryDonate: React.FC<IHistoryDonateProps> = ({data}) => {

    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setIsLoad(true)
    }, [])

    return (
        <div className="profile__history history-profile">
            <div className="history-profile__title replenishment-bonuses__title">
                <Translate>donates_history</Translate>
            </div>

            {!data.length && <p>Тут ничего нет!</p>}

            {!!data.length && isLoad && <Swiper
                slidesPerView={1}
                spaceBetween={20}
                slidesPerGroup={1}
                modules={[Grid, Pagination]}
                grid={{rows: 6, fill: "row"}}
                navigation={{
                    prevEl: ".purchases-slider__btn_prev",
                    nextEl: ".purchases-slider__btn_next",
                }}
                pagination={{
                    clickable: true,
                    el: '.purchases-slider__pagination'
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        grid: {
                            rows: 3,
                            fill: "row"
                        }
                    }
                }}
            >
                {
                    data?.map((item: any) =>
                        <SwiperSlide key={item?.id}>
                            <HistoryDonateItem data={item}/>
                        </SwiperSlide>
                    )
                }
            </Swiper>}

            {!!data.length && <div className="purchases-slider__navigation">
                <div className="purchases-slider__btn purchases-slider__btn_prev"/>
                <div className="purchases-slider__pagination"/>
                <div className="purchases-slider__btn purchases-slider__btn_next"/>
            </div>}
        </div>
    )
}
