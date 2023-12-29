import React, {useContext, useEffect, useState} from 'react'
import {useImages} from "../../../../../hooks/images";
import {INews} from "../../../../../models";
import ReactHtmlParser from "html-react-parser"
import {apiLink} from "../../../../../hooks/apiLink";
import { isOpenPopupContext } from '../../../Main';
import {useNavigate} from "react-router-dom";
import {Translate} from "../../../../../components/translate/Translate";


interface INewsItemProps {
    data: INews
}

export const NewsItem:React.FC<INewsItemProps> = ({data}) => {
    const {calendar, placeholder} = useImages()

    const navigate = useNavigate()
    const [date] = useState(data?.created_at.slice(0, data?.created_at.indexOf(' ')))
    const isOpenPopup: any = useContext(isOpenPopupContext)

    const handleReadNews = () => {
        navigate("?news_id="+data?.id)

        isOpenPopup({
            isOpen: true,
            news: data
        })
    }

    return (
        <div className="news__slide slide-news swiper-slide">
            <div className="slide-news__image-block news-open-btn">
                <div onClick={handleReadNews} className="slide-news__image">
                    <img src={data?.image ?? placeholder} alt="news-img"/>
                </div>
            </div>
            <div className="slide-news__content">
                <div onClick={handleReadNews} className="slide-news__title news-open-btn">
                    {data?.title}
                </div>
                <div className="slide-news__date date-slide-news">
                    <div className="date-slide-news__icon">
                        <img src={calendar} alt="calendar"/>
                    </div>
                    <div className="date-slide-news__text">
                        {date.replaceAll('-', '.')}
                    </div>
                </div>
                <div className="slide-news__text">
                    {
                        ReactHtmlParser(data?.text ?? "")
                    }
                </div>
                <button onClick={handleReadNews} className="slide-news__link news-open-btn">
                    <Translate>read_the_news</Translate>
                </button>
            </div>
        </div>
    )
}
