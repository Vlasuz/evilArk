import React, { useEffect } from 'react'
import ReactHtmlParser from "html-react-parser";
import {useImages} from "../../../../../hooks/images";
import {INews} from "../../../../../models";
import {Translate} from "../../../../../components/translate/Translate";

interface INewsItemFirstProps {
    handleReadNews: any,
    data: INews
}

export const NewsItemFirst:React.FC<INewsItemFirstProps> = ({data, handleReadNews}) => {
    const {placeholder, calendar} = useImages()

    return (
        <div className="news__today today-news">
            <div onClick={_ => handleReadNews(data.id)} className="today-news__image news-open-btn">
                <img src={data?.image ?? placeholder} alt="news"/>
            </div>
            <div className="today-news__body">
                <div onClick={_ => handleReadNews(data.id)} className="today-news__content">
                    <h5 className="today-news__title title-h5 news-open-btn">
                        {data?.title}
                    </h5>
                    <div className="today-news__text news-open-text">
                        {
                            ReactHtmlParser(data?.text ?? '')
                        }
                    </div>
                    <button onClick={_ => handleReadNews(data.id)} className="today-news__btn news-open-btn">
                        <Translate>read_the_news</Translate>
                    </button>
                </div>
                <div className="today-news__date date-today-news">
                    <div className="date-today-news__icon">
                        <img src={calendar} alt="calendar"/>
                    </div>
                    <div className="date-today-news__text">
                        {data?.created_at.slice(0, data?.created_at.indexOf(' ')).replaceAll('-', '.')}
                    </div>
                </div>
            </div>
        </div>
    )
}
