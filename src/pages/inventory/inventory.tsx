import React, { useEffect } from 'react'
import { Footer } from '../../components/footer/footer'
import {ProfileSidebar} from "../../components/profileSidebar/profileSidebar";
import {Product} from "../../components/product/products";

interface IInventoryProps {

}

export const Inventory:React.FC<IInventoryProps> = () => {

    return (
        <main className="inventory">
            <section className="inventory__main">
                <div className="inventory__container container">
                    <div className="inventory__body">
                        <h2 className="inventory__title title-h2">Inventory</h2>
                        <div className="inventory__inner inner">
                            <div className="inner__row">
                                <ProfileSidebar/>
                                <div className="inner__content content-inner">
                                    <div className="content-inner__body">
                                        <div className="replenishment-bonuses__title">
                                            Store purchase history
                                        </div>
                                        <div className="purchases__items">
                                            <div className="purchases__swiper swiper">
                                                <div className="purchases__wrapper swiper-wrapper">
                                                    <div className="purchases__slide slide-purchases swiper-slide">
                                                        <div className="slide-purchases__item">
                                                            <div className="purchases__row">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className="purchases-slider__navigation">
                                        <div className="purchases-slider__btn purchases-slider__btn_prev" />
                                        <div className="purchases-slider__pagination" />
                                        <div className="purchases-slider__btn purchases-slider__btn_next" />
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
