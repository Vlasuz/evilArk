import React, {createContext, useEffect, useRef, useState} from 'react'
import {MainStyled} from "./main.styled";
import video from './../../assets/img/media/VideoEvilArk.mp4'
import {Banner} from "./components/banner/banner";
import {About} from "./components/about/about";
import {Servers} from "./components/servers/servers";
import {News} from "./components/news/news";
import {Faq} from "./components/faq/faq";
import {Donate} from "./components/donate/donate";
import {Contacts} from "./components/contacts/contacts";
import {Footer} from "../../components/footer/footer";

import AOS from "aos";
import "aos/dist/aos.css";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {INews, INewsSingle} from "../../models";
import ReactHtmlParser from "html-react-parser";
import {useImages} from "../../hooks/images";
import {useSelector} from "react-redux";

interface IMainProps {

}

export const isOpenPopupContext: any = createContext(null);

export const Main: React.FC<IMainProps> = () => {
    const {arrowWhite, calendar} = useImages()

    useEffect(() => {
        AOS.init({
            once: true
        });
        AOS.refresh();
    }, []);

    const newsPopup: any = useRef(null)
    const newsPopupBody: any = useRef(null)

    const [singleNews, setSingleNews] = useState<INewsSingle>({})
    const navigate = useNavigate()
    const location = useLocation()
    const news = useSelector((state: any) => state.toolkit.news)

    useEffect(() => {

        setTimeout(() => {
            singleNews.isOpen && newsPopup.current?.classList.add('active')
        }, 10)

    }, [singleNews])

    const handleCloseNews = () => {
        newsPopup.current?.classList.remove('active')
        setTimeout(() => {
            navigate(location.pathname)
            setSingleNews({
                isOpen: false,
                news: undefined
            })
        }, 300)
    }

    useEffect(() => {
        if(window.location.href.includes("?news_id")) {
            setSingleNews({
                isOpen: true,
                news: news.filter((item: INews) => +item.id === +window.location.href.slice(window.location.href.indexOf('?news_id') + 9))[0]
            })
        }
    }, [news])

    useEffect(() => {
        if(!location.hash) return;

        setTimeout(() => {
            document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 600)
    }, [])


    return (
        <isOpenPopupContext.Provider value={setSingleNews}>
            {singleNews?.isOpen && <div ref={newsPopup} className="news-open">
                <div ref={newsPopupBody} className="news-open__body">
                    <div className="news-open__top top-news-open">
                        <button onClick={handleCloseNews} className="news-open__btn">
                            <img src={arrowWhite} alt="arrow"/>
                        </button>
                    </div>
                    <div className="news-open__content">
                        <h4 className="news-open__title title-h4">
                            {singleNews.news?.title}
                        </h4>
                        <div className="news-open__tegs tegs-news-open">
                            <div className="tegs-news-open__items">

                                {
                                    singleNews.news?.tags.map(tag => <a href={tag.slug} key={tag.id} className="tegs-news-open__item">@{tag.name}</a>)
                                }

                            </div>
                        </div>
                        <div className="news-open__image">
                            <img src={singleNews.news?.image} alt=""/>
                        </div>
                        <div className="news-open__date date-news-open">
                            <div className="date-news-open__icon">
                                <img src={calendar} alt="calendar"/>
                            </div>
                            <div className="date-news-open__text">
                                {singleNews.news?.created_at.slice(0, singleNews.news?.created_at.indexOf(' ')).replaceAll('-', '.')}
                            </div>
                        </div>
                        <div className="news-open__text">
                            {ReactHtmlParser(singleNews.news?.text ?? '')}
                        </div>
                    </div>
                </div>
            </div>}

            <MainStyled onClick={_ => singleNews.isOpen && handleCloseNews()} className={"home" + (singleNews.isOpen ? " product-select" : "")}>

                <Banner/>
                <About/>
                <Servers/>
                <News/>
                <Faq/>
                <Donate/>
                <Contacts/>

                <Footer/>
            </MainStyled>
        </isOpenPopupContext.Provider>
    )
}