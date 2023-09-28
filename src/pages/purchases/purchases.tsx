import React, {useEffect} from 'react'
import {Footer} from '../../components/footer/footer'
import {ProfileSidebar} from "../../components/profileSidebar/profileSidebar";
import {Product} from "../../components/product/products";
import {HistoryRouletteItem} from "../../components/historyRouletteItem/historyRouletteItem";

interface IPurchasesProps {

}

export const Purchases: React.FC<IPurchasesProps> = () => {

    return (
        <main className="purchases">
            <section className="purchases__main">
                <div className="purchases__container container">
                    <div className="purchases__body">
                        <h2 className="purchases__title title-h2">my purchases</h2>
                        <div className="purchases__inner inner">
                            <div className="inner__row">
                                <ProfileSidebar/>
                                <div className="inner__content content-inner">
                                    <div className="content-inner__body">
                                        <div className="replenishment-bonuses__title">
                                            Store purchase history
                                        </div>
                                        <div className="purchases__items">
                                            <div className="purchases__swiper swiper">
                                                <div className="swiper-wrapper">
                                                    <Product isCanGet={false}/>
                                                    <Product isCanGet={false}/>
                                                    <Product isCanGet={false}/>
                                                    <Product isCanGet={false}/>
                                                    <Product isCanGet={false}/>
                                                    <Product isCanGet={false}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="purchases-slider__navigation">
                                        <div className="purchases-slider__btn purchases-slider__btn_prev"/>
                                        <div className="purchases-slider__pagination"/>
                                        <div className="purchases-slider__btn purchases-slider__btn_next"/>
                                    </div>
                                    <div className="roulette__users purchases__users users">
                                        <div className="replenishment-bonuses__title">
                                            roulette winning history
                                        </div>
                                        <div className="users__swiper swiper">
                                            <div className="users__wrapper swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <HistoryRouletteItem/>
                                                    <HistoryRouletteItem/>
                                                </div>
                                                <div className="swiper-slide">
                                                    <HistoryRouletteItem/>
                                                    <HistoryRouletteItem/>
                                                </div>
                                            </div>
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
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
