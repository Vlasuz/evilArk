import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import { useImages } from '../../../../hooks/images';
import { NewsItem } from './components/newsItem';
import {Categories} from "./components/categories";
import axios from "axios";
import {INews} from "../../../../models";
import {apiLink} from "../../../../hooks/apiLink";
import ReactHtmlParser from "html-react-parser";

SwiperCore.use([Navigation]);

interface INewsProps {

}

export const News: React.FC<INewsProps> = () => {
    const {placeholder, calendar} = useImages()

    const [news, setNews] = useState<INews[]>([])

    useEffect(() => {
        axios.get(apiLink('api/news?language=en')).then(({data}) => {
            setNews(data.data)
            console.log('news',data.data)
        })
    }, [])

    return (
        <>
            <section className="news" data-aos="fade-left" data-aos-duration="750" data-aos-offset="200">
                <div className="news__container container">
                    <div className="news__inner">
                        <Categories/>
                        <div className="news__body">
                            <div className="news__today today-news">
                                <div className="today-news__image news-open-btn">
                                    <img src={news[0]?.image ? apiLink(news[0]?.image) : placeholder} alt="news"/>
                                </div>
                                <div className="today-news__body">
                                    <div className="today-news__content">
                                        <h5 className="today-news__title title-h5 news-open-btn">
                                            {news[0]?.title}
                                        </h5>
                                        <div className="today-news__text news-open-text">
                                            {
                                                ReactHtmlParser(news[0]?.text ?? '')
                                            }
                                        </div>
                                        <a href="" className="today-news__btn news-open-btn">Read the news</a>
                                    </div>
                                    <div className="today-news__date date-today-news">
                                        <div className="date-today-news__icon">
                                            <img src={calendar} alt="calendar"/>
                                        </div>
                                        <div className="date-today-news__text">
                                            {news[0]?.created_at.slice(0, news[0]?.created_at.indexOf(' ')).replaceAll('-', '.')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="news__slider">

                                <Swiper
                                    slidesPerView={5}
                                    spaceBetween={30}
                                    navigation={{
                                        nextEl: '.news__btn_next',
                                        prevEl: '.news__btn_prev'
                                    }}
                                    modules={[Navigation]}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 2,
                                            spaceBetween: 20
                                        },
                                        700: {
                                            slidesPerView: 3,
                                            spaceBetween: 20
                                        },
                                        1100: {
                                            slidesPerView: 4,
                                            spaceBetween: 20
                                        },
                                        1300: {
                                            slidesPerView: 4,
                                            spaceBetween: 30
                                        },
                                        1600: {
                                            slidesPerView: 5,
                                            spaceBetween: 30
                                        },
                                        1920: {
                                            slidesPerView: 5,
                                            spaceBetween: 30
                                        }
                                    }}
                                >
                                    {
                                        news.map((item: INews, index: number) => index > 0 &&
                                            <SwiperSlide key={item.id}>
                                                <NewsItem data={item} />
                                            </SwiperSlide>
                                        )
                                    }

                                </Swiper>
                                <div className="news__btn news__btn_prev"/>
                                <div className="news__btn news__btn_next"/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
