import React, {useContext, useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/css';
import {useImages} from '../../../../hooks/images';
import {NewsItem} from './components/newsItem';
import {Categories} from "./components/categories";
import axios from "axios";
import {INews, INewsSingle, IServers} from "../../../../models";
import {apiLink} from "../../../../hooks/apiLink";
import ReactHtmlParser from "html-react-parser";
import {isOpenPopupContext} from "../../main";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setNews} from '../../../../redux/toolkitSlice';
import {NewsItemFirst} from "./components/newsItemFirst";

SwiperCore.use([Navigation]);

interface INewsProps {

}

export const News: React.FC<INewsProps> = () => {

    const news: INews[] = useSelector((state: any) => state.toolkit.news)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [server, setServer] = useState<IServers>()

    console.log(news)

    useEffect(() => {
        axios.get(apiLink('api/news?language=en')).then(({data}) => {
            dispatch(setNews(data.data))
        })
    }, [])

    const isOpenPopup: any = useContext(isOpenPopupContext)

    const handleReadNews = () => {
        navigate("?news_id=" + news.filter(item => item.server.id === server?.id)[0]?.id)

        isOpenPopup({
            isOpen: true,
            news: news.filter(item => item.server.id === server?.id)[0]
        })
    }

    return (
        <>
            <section className="news" id="news" data-aos="fade" data-aos-duration="750" data-aos-offset="200">
                <div className="news__container container">
                    <div className="news__inner">
                        <Categories setServer={setServer} server={server}/>
                        <div className="news__body">

                            <NewsItemFirst handleReadNews={handleReadNews} data={news.filter(item => item.server.id === server?.id)[0]}/>

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
                                        news.filter((item: INews) => item.server.id === server?.id).map((item: INews, index: number) => index > 0 &&
                                            <SwiperSlide key={item.id}>
                                                <NewsItem data={item}/>
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
