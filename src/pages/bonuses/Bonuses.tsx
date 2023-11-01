import React, {useEffect, useState} from 'react'
import {ProfileSidebar} from "../../components/profileSidebar/ProfileSidebar";
import {Footer} from "../../components/footer/footer";
import {Calculator} from "../../components/calculator/Calculator";
import {topUpContext} from '../../context/topUpContext';
import {TopUp} from "../../components/topUp/topUp";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {IServers, IUserDiscount} from "../../models";
import getCookies from "../../functions/getCookie";
import {useSelector} from "react-redux";
import {Translate} from "../../components/translate/Translate";

interface IBonusesProps {

}

export const Bonuses: React.FC<IBonusesProps> = () => {

    const [isTopUpOpen, setIsTopUpOpen] = useState(false)
    const [discount, setDiscount] = useState<IUserDiscount | undefined>()

    const category: IServers = useSelector((state: any) => state.toolkit.category)

    useEffect(() => {
        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.get(apiLink("api/users/discount")).then(({data}) => {
            if(category.name?.toLowerCase().includes("pve")) {
                setDiscount(data.data.filter((item: any) => item.is_pve && item)[0])
            } else {
                setDiscount(data.data.filter((item: any) => !item.is_pve && item)[0])
            }
        })
    }, [category])

    return (
        <main className="bonuses">

            <topUpContext.Provider value={setIsTopUpOpen}>

                <TopUp isOpen={isTopUpOpen}/>
                <section className="bonuses__main">
                    <div className="bonuses__container container">
                        <div className="bonuses__body">
                            <h2 className="bonuses__title title-h2">
                                <Translate>my_bonuses</Translate>
                            </h2>
                            <div className="bonuses__inner inner">
                                <div className="inner__row">
                                    <ProfileSidebar/>
                                    <div className="inner__content content-inner">
                                        <div className="content-inner__body">
                                            <div className="bonuses__form">
                                                <div className="bonuses__discount discount-bonuses">
                                                    <div className="discount-bonuses__body">
                                                        <div className="discount-bonuses__text">
                                                            <Translate>discount</Translate>
                                                        </div>
                                                        <div
                                                            className="discount-bonuses__progress progress-discount-bonuses"
                                                            data-count={discount?.discount}>
                                                            <div className="progress__line"
                                                                 style={{width: (discount?.discount ?? 0) + 1 + "%"}}></div>
                                                            <div className="progress-discount-bonuses__line">
                                                                <div className="from">0%</div>
                                                                <div className="to">100%</div>
                                                            </div>
                                                            <div className="progress-discount-bonuses__point"
                                                                 style={{left: discount?.discount + "%"}}>
                                                                <div className="amount">{discount?.discount}%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="discount-bonuses__info">
                                                        {discount?.description}
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
