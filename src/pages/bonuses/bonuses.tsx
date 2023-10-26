import React, {useEffect, useState} from 'react'
import {ProfileSidebar} from "../../components/profileSidebar/profileSidebar";
import {Footer} from "../../components/footer/footer";
import {Calculator} from "../../components/calculator/calculator";
import {topUpContext} from '../../context/topUpContext';
import {TopUp} from "../../components/topUp/topUp";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {IUserDiscount} from "../../models";

interface IBonusesProps {

}

export const Bonuses: React.FC<IBonusesProps> = () => {

    const [isTopUpOpen, setIsTopUpOpen] = useState(false)
    const [discount, setDiscount] = useState<IUserDiscount>({
        description: null,
        discount: 0,
        id: 0,
        user: "",
        user_id: 0
    })

    useEffect(() => {
        axios.get(apiLink("api/users/discount")).then(({data}) => {
            setDiscount(data.data)
        })
    }, [])

    return (
        <main className="bonuses">

            <topUpContext.Provider value={setIsTopUpOpen}>

                <TopUp isOpen={isTopUpOpen}/>
                <section className="bonuses__main">
                    <div className="bonuses__container container">
                        <div className="bonuses__body">
                            <h2 className="bonuses__title title-h2">My bonuses</h2>
                            <div className="bonuses__inner inner">
                                <div className="inner__row">
                                    <ProfileSidebar/>
                                    <div className="inner__content content-inner">
                                        <div className="content-inner__body">
                                            <div className="bonuses__form">
                                                <div className="bonuses__discount discount-bonuses">
                                                    <div className="discount-bonuses__body">
                                                        <div className="discount-bonuses__text">Discount</div>
                                                        <div
                                                            className="discount-bonuses__progress progress-discount-bonuses"
                                                            data-count={discount.discount}>
                                                            <div className="progress__line"
                                                                 style={{width: discount.discount + 1 + "%"}}></div>
                                                            <div className="progress-discount-bonuses__line">
                                                                <div className="from">0%</div>
                                                                <div className="to">100%</div>
                                                            </div>
                                                            <div className="progress-discount-bonuses__point"
                                                                 style={{left: discount.discount + "%"}}>
                                                                <div className="amount">{discount.discount}%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="discount-bonuses__info">
                                                        {discount.description}
                                                    </div>
                                                </div>
                                                <Calculator/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </topUpContext.Provider>
        </main>
    )
}
