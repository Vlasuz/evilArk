import React, {createContext, useEffect, useState} from 'react'
import {Footer} from "../../components/footer/footer";
import domestication from './../../assets/img/icons/domestication.svg'
import {ICategory, IProduct, IServers, IUser} from "../../models";
import {useImages} from "../../hooks/images";
import {RouletteItem} from "./components/rouletteItem";
import {HistoryRouletteItem} from "../../components/historyRouletteItem/historyRouletteItem";
import {useDispatch, useSelector} from "react-redux";
import {changeUserBalance, setCategory} from '../../redux/toolkitSlice';
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";
import getCookies from "../../functions/getCookie";
import axios from 'axios';
import {apiLink} from "../../hooks/apiLink";
import {toast} from "react-toastify";
import {notifications} from "../../hooks/notifications";
import {RouletteStyled} from './Roulette.styled';
import {Translate} from "../../components/translate/Translate";
import {RouletteCaseInfo} from "./components/RouletteCaseInfo";
import Echo from "laravel-echo";
import socketio from "socket.io-client";

interface IRouletteProps {

}

const echo = new Echo({
    host: "ws://evilarkcluster.com:6001",
    broadcaster: "socket.io",
    client: socketio
});

export const isOpenPopupContext: any = createContext(null);

export const Roulette: React.FC<IRouletteProps> = () => {
    const {placeholder, profit} = useImages()

    const dispatch = useDispatch()
    const servers: IServers[] = useSelector((state: any) => state.toolkit.servers)
    const category: ICategory = useSelector((state: any) => state.toolkit.category)
    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)

    const [roulettesCases, setRoulettesCases] = useState([])
    const [activeCase, setActiveCase]: any = useState({})
    const [itemsForRoll, setItemsForRoll]: any = useState([])
    const [winnerItem, setWinnerItem] = useState<IProduct | null>(null)
    const [rouletteHistory, setRouletteHistory] = useState<any>([])
    const [isStartRoulette, setIsStartRoulette] = useState(false)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setItemsForRoll([])
        if (!activeCase || !Object.keys(activeCase).length) return

        for (let i = 0; i < 50; i++) {
            const randomIndex = Math.floor(Math.random() * activeCase.products.length);
            const randomItem = activeCase.products[randomIndex];
            setItemsForRoll((prev: any) => [...prev, randomItem])
        }
    }, [activeCase])

    const handleSelectCase = (caseData: any) => {
        if (caseData.id === activeCase.id) return

        axios.get(apiLink("api/roulette/" + caseData.id)).then(({data}) => {
            setActiveCase(data.data)
        }).catch(er => console.log(er))
    }

    const handleStartRoulette = () => {
        if (isStartRoulette) {
            notifications('Wait to rolling game')
            return
        }

        if (Object.keys(userInfo).length && userInfo.balance >= activeCase.cost) {
            setIsStartRoulette(true)
        }

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink("api/roulettes/play/" + activeCase.id), {
            "server_id": category.id
        }).then(({data}) => {
            if (data.data?.success === false) {
                notifications(data.data.message)
                return;
            }

            dispatch(changeUserBalance(activeCase.cost))

            setTimeout(() => {
                toast.success("Поздравляем! Вы выиграли " + data.data?.name)
            }, 10300)

            setTimeout(() => {
                setIsStartRoulette(false)
            }, 12000)

            setWinnerItem(data.data)
        }).catch(er => {
            er.response?.status === 401 && notifications(er.response.status)
        })
    }

    useEffect(() => {
        axios.get(apiLink("api/roulettes?server_id=" + category.id)).then(({data}) => {
            setRoulettesCases(data.data)
            setActiveCase(data.data[0])
        }).catch(er => console.log(er))
    }, [category])

    useEffect(() => {

        axios.get(apiLink("api/users/users-roulette-history?max_length=14")).then(({data}) => {
            setRouletteHistory(data.data)
        }).catch(er => console.log(er))

        echo.channel("evilark_database_roulette-history").listen('EventRouletteHistory', (event: any) => {

            setTimeout(() => {
                setRouletteHistory((prev: any) => [...prev, event])
            }, 10500)

        });

    }, [])

    return (
        <isOpenPopupContext.Provider value={setIsActive}>
            <RouletteStyled>
                <main onClick={_ => isActive && setIsActive(false)}
                      className={"roulette" + (isActive ? " product-select" : "")}>
                    <section className="roulette__main">
                        <div className="roulette__container container">
                            <div className="roulette__body">
                                <h2 className="roulette__title title-h2">
                                    <Translate>text_roulette</Translate>
                                </h2>
                                {/*<div className="roulette__image-block">*/}
                                {/*    <div className="roulette__image">*/}
                                {/*        <img src={mainImg} alt="main-img"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="roulette__select-category">
                                    <div className="select-category__row">

                                        {
                                            servers?.map((item: IServers) =>
                                                <div onClick={_ => dispatch(setCategory(item))} key={item.id}
                                                     className={"select-category__column" + (category.name === item.name ? " _active" : "")}>
                                                    <div className="select-category__item item-select-category">
                                                        <div className="item-select-category__image-block">
                                                            <div className="item-select-category__image">
                                                                <img
                                                                    src={item.image.length ? item.image : placeholder}/>
                                                            </div>
                                                            <div className="item-select-category__label">
                                                                {item.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                                {category && <div className="roulette__inner">
                                    <div className="roulette__filter filter-roulette">
                                        <div className="filter-roulette__categories categories-filter-roulette">
                                            <div className="categories-filter-roulette__items">

                                                {
                                                    roulettesCases.map((item: any) =>
                                                        <div key={item.id} onClick={_ => handleSelectCase(item)}
                                                             className={"categories-filter-roulette__item"}>
                                                            <div
                                                                className={"categories-filter-roulette__link categories-filter-roulette__link_blue" + (activeCase.id === item.id ? " active" : "")}>
                                                                {item.name}

                                                                <button onClick={_ => setIsActive(true)}>
                                                                    i
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                            </div>
                                        </div>
                                        {!!itemsForRoll.length &&
                                            <div className="filter-roulette__games games-filter-roulette">
                                                <div
                                                    className="games-filter-roulette__title title-games-filter-roulette">
                                                    <div className="title-games-filter-roulette__icon">
                                                        <img src={profit} alt="profit"/>
                                                    </div>
                                                    <div className="title-games-filter-roulette__text">
                                                        <Translate>game_cost_title</Translate> {activeCase?.cost} ec
                                                    </div>
                                                </div>
                                                <div className="games-filter-roulette__slider">

                                                    <div className="games-filter-roulette__items">

                                                        {
                                                            itemsForRoll?.map((item: IProduct, index: number) =>
                                                                <RouletteItem
                                                                    key={index}
                                                                    isStart={index === 0 ? isStartRoulette : null}
                                                                    data={{
                                                                        name: index !== 35 ? item?.name : winnerItem?.name,
                                                                        image: index !== 35 ? item?.icon : winnerItem?.icon,
                                                                        isWinner: index === 35
                                                                    }}/>)
                                                        }

                                                    </div>

                                                    <div className="games-filter-roulette__row">
                                                        <div className="games-filter-roulette__element"/>
                                                        <div
                                                            className="games-filter-roulette__column games-filter-roulette__column_hide"/>
                                                        <div className="games-filter-roulette__column"/>
                                                        <div
                                                            className="games-filter-roulette__column games-filter-roulette__column_border">
                                                            <span/>
                                                        </div>
                                                        <div className="games-filter-roulette__column"/>
                                                        <div
                                                            className="games-filter-roulette__column games-filter-roulette__column_hide"/>
                                                    </div>
                                                </div>
                                                <div className="filter-roulette__btn-block">
                                                    <button onClick={handleStartRoulette}
                                                            className="filter-roulette__btn btn btn_small">
                                                        <Translate>play_title</Translate>
                                                    </button>
                                                </div>
                                            </div>}
                                    </div>

                                    <div className="roulette__users users">

                                        {
                                            rouletteHistory.map((item: any, index: number) => index <= 14 &&
                                                <HistoryRouletteItem key={item.id} data={item}/>
                                            )
                                        }

                                    </div>
                                </div>}
                            </div>
                        </div>
                    </section>

                    <Footer/>
                </main>

                <RouletteCaseInfo isActive={isActive} activeCase={activeCase}/>
            </RouletteStyled>
        </isOpenPopupContext.Provider>
    )
}
