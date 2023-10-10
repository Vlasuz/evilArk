import React, {useEffect, useState} from 'react'
import {Footer} from "../../components/footer/footer";
import mainImg from './../../assets/img/roulette/main-img.jpg'
import {IServers} from "../../models";
import {useImages} from "../../hooks/images";
import {RouletteItem} from "./components/rouletteItem";
import {HistoryRouletteItem} from "../../components/historyRouletteItem/historyRouletteItem";
import {useDispatch, useSelector} from "react-redux";
import { setCategory } from '../../redux/toolkitSlice';
import {Swiper, SwiperSlide} from "swiper/react";
import {RouletteStyled} from "./roulette.styled";
import {Pagination} from "swiper";

interface IRouletteProps {

}

export const Roulette: React.FC<IRouletteProps> = () => {
    const {placeholder, profit, servers_2, servers_3, servers_4, servers_6, servers_5, servers_1} = useImages()

    const dispatch = useDispatch()
    const servers: IServers[] = useSelector((state: any) => state.toolkit.servers)
    const category: string = useSelector((state: any) => state.toolkit.category)

    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setIsLoad(true)
    }, [])

    const [isStartRoulette, setIsStartRoulette] = useState(false)

    const handleStartRoulette = () => {
        setIsStartRoulette(true)

        setTimeout(() => {
            setIsStartRoulette(false)
        }, 11000)
    }

    return (
        <RouletteStyled className="roulette">
            <section className="roulette__main">
                <div className="roulette__container container">
                    <div className="roulette__body">
                        <h2 className="roulette__title title-h2">Roulette</h2>
                        <div className="roulette__image-block">
                            <div className="roulette__image">
                                <img src={mainImg} alt="main-img"/>
                            </div>
                        </div>
                        <div className="roulette__select-category">
                            <div className="select-category__row">

                                {
                                    servers?.map((item: IServers) =>
                                        <div className={"select-category__column" + (category === item.id ? " _active" : "")}>
                                            <div className="select-category__item item-select-category">
                                                <div className="item-select-category__image-block">
                                                    <div className="item-select-category__image">
                                                        <img src={item.image.length ? item.image : placeholder} alt="4 man shop"/>
                                                    </div>
                                                    <div className="item-select-category__label">
                                                        {item.name}
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={_ => dispatch(setCategory(item.id))} className="select-category__btn btn btn_small">Choose</button>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                        <div className="roulette__inner">
                            <div className="roulette__filter filter-roulette">
                                <div className="filter-roulette__categories categories-filter-roulette">
                                    <div className="categories-filter-roulette__items">
                                        <div className="categories-filter-roulette__item">
                                            <div
                                                className="categories-filter-roulette__link categories-filter-roulette__link_blue">
                                                Roulette 1
                                            </div>
                                        </div>
                                        <div className="categories-filter-roulette__item">
                                            <div
                                                className="categories-filter-roulette__link categories-filter-roulette__link_orange">
                                                Roulette 2
                                            </div>
                                        </div>
                                        <div className="categories-filter-roulette__item">
                                            <div
                                                className="categories-filter-roulette__link categories-filter-roulette__link_blue">
                                                Roulette 3
                                            </div>
                                        </div>
                                        <div className="categories-filter-roulette__item">
                                            <div
                                                className="categories-filter-roulette__link categories-filter-roulette__link_orange">
                                                Roulette 4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-roulette__games games-filter-roulette">
                                    <div className="games-filter-roulette__title title-games-filter-roulette">
                                        <div className="title-games-filter-roulette__icon">
                                            <img src={profit} alt="profit"/>
                                        </div>
                                        <div className="title-games-filter-roulette__text">Game cost 5 ec</div>
                                    </div>
                                    <div className="games-filter-roulette__slider">

                                        <div className="games-filter-roulette__items">
                                            <RouletteItem isStart={isStartRoulette} data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                            <RouletteItem data={{name: "Title 2", image: servers_2}}/>
                                            <RouletteItem data={{name: "Title 6", image: servers_1}}/>
                                            <RouletteItem data={{name: "123 asda", image: servers_3}}/>
                                            <RouletteItem data={{name: "92130c xc", image: servers_4}}/>
                                            <RouletteItem data={{name: "xcvsdefrq asd asdasd as d", image: servers_5}}/>
                                            <RouletteItem data={{name: "123", image: servers_6}}/>
                                        </div>

                                        <div className="games-filter-roulette__row">
                                            <div className="games-filter-roulette__element" />
                                            <div className="games-filter-roulette__column games-filter-roulette__column_hide" />
                                            <div className="games-filter-roulette__column" />
                                            <div className="games-filter-roulette__column games-filter-roulette__column_border">
                                                <span />
                                            </div>
                                            <div className="games-filter-roulette__column" />
                                            <div className="games-filter-roulette__column games-filter-roulette__column_hide" />
                                        </div>
                                    </div>
                                    <div className="filter-roulette__btn-block">
                                        <button onClick={handleStartRoulette} className="filter-roulette__btn btn btn_small">Play</button>
                                    </div>
                                </div>
                            </div>
                            <div className="roulette__users users">
                                <div className="users__swiper swiper">
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
            </section>
            <Footer/>
        </RouletteStyled>
    )
}
