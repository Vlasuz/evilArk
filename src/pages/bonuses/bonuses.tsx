import React, {useEffect, useState} from 'react'
import {ProfileSidebar} from "../../components/profileSidebar/profileSidebar";
import {Footer} from "../../components/footer/footer";
import {Calculator} from "../../components/calculator/calculator";

interface IBonusesProps {

}

export const Bonuses: React.FC<IBonusesProps> = () => {

    const [amount] = useState(20)

    return (
        <main className="bonuses">
            <section className="bonuses__main">
                <div className="bonuses__container container">
                    <div className="bonuses__body">
                        <h2 className="bonuses__title title-h2">My bonuses</h2>
                        <div className="bonuses__inner inner">
                            <div className="inner__row">
                                <ProfileSidebar/>
                                <div className="inner__content content-inner">
                                    <div className="content-inner__body">
                                        <form action="#" className="bonuses__form">
                                            <div className="bonuses__discount discount-bonuses">
                                                <div className="discount-bonuses__body">
                                                    <div className="discount-bonuses__text">Discount</div>
                                                    <div className="discount-bonuses__progress progress-discount-bonuses" data-count={amount}>
                                                        <div className="progress__line" style={{width: amount+1+"%"}}></div>
                                                        <div className="progress-discount-bonuses__line">
                                                            <div className="from">0%</div>
                                                            <div className="to">100%</div>
                                                        </div>
                                                        <div className="progress-discount-bonuses__point" style={{left: amount+"%"}}>
                                                            <div className="amount">{amount}%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="discount-bonuses__info">Each replenishment for 100 EU
                                                    10%
                                                    discount*
                                                </div>
                                            </div>
                                            <Calculator/>
                                        </form>
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
