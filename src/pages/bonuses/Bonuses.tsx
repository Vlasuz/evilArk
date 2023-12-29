import React, {useEffect, useState} from 'react'
import {ProfileSidebar} from "../../components/profileSidebar/ProfileSidebar";
import {Footer} from "../../components/footer/Footer";
import {Calculator} from "../../components/calculator/Calculator";
import {topUpContext} from '../../context/topUpContext';
import {TopUp} from "../../components/topUp/TopUp";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {IServer, IUser, IUserDiscount} from "../../models";
import getCookies from "../../functions/getCookie";
import {useSelector} from "react-redux";
import {Translate} from "../../components/translate/Translate";
import {BonusesStyled} from "./Bonuses.styled";
import {TableNextBonuses} from "../../components/tableNextBonuses/TableNextBonuses";

interface IBonusesProps {

}

export const Bonuses: React.FC<IBonusesProps> = () => {

    const [isTopUpOpen, setIsTopUpOpen] = useState(false)
    const [discounts, setDiscounts] = useState<IUserDiscount[] | undefined>([])

    const category: IServer = useSelector((state: any) => state.toolkit.category)
    const userData: IUser = useSelector((state: any) => state.toolkit.user)

    useEffect(() => {
        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.get(apiLink("api/users/discount")).then(({data}) => {
            setDiscounts(data.data)
        })
    }, [])

    const discount = discounts?.filter(item => item.server?.id === category?.id)[0]
    const userDataLevel = userData.level.filter(item => item.server?.id === category?.id)[0]

    return (
        <BonusesStyled className="bonuses">

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
                                                <div className="bonuses__block">
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
                                                                    {discount?.discount && discount?.discount >= 5 &&
                                                                        <div className="from">0%</div>}
                                                                    {discount?.discount && discount?.discount <= 92 &&
                                                                        <div className="to">100%</div>}
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
                                                    <div className="bonuses__until">


                                                        {!userDataLevel?.until_next_discount ? <></> :
                                                            <>
                                                                <p>
                                                                    <Translate>next_discount</Translate>
                                                                </p>
                                                                <div className="until__inner">
                                                                    <div className="until__sum">
                                                                        EC:
                                                                        <b>{userDataLevel?.until_next_discount?.cost.toFixed(2)}</b>
                                                                    </div>
                                                                    <div className="until__name">
                                                                        Level:
                                                                        <b style={{color: userDataLevel?.until_next_discount?.color}}>{userDataLevel?.until_next_discount?.level_name ?? "SponsoR+"}</b>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                </div>

                                                <TableNextBonuses/>
                                                <div className="bonuses__calculate">
                                                    <p className={"calculate__info"}>
                                                        На нашем проекте присутствует система спонсорства. Ниже представлены описания наших спонсор статусов и что они дают:
                                                        <br/>
                                                        <br/>
                                                        ➤ ⭐️SponsoR⭐️ - выдается за общее пожертвование на проект в сумме 5 000 р и дает уникальную роль в Discord, которая открывает постоянный доступ к Premium тикетам;
                                                        <br/>
                                                        <br/>
                                                        ➤ ⭐️SponsoR+⭐️ - выдается за общее пожертвование на проект в сумме 10 000 р и дает уникальную роль в Discord, которая открывает постоянный доступ к Premium тикетам, уникальную роль в Игре (+ 1 пт за 15 минут игры на сервере), а также дополнительную скидку в донат магазине 3%;
                                                        <br/>
                                                        <br/>
                                                        ➤ 💎CrystalSponsoR💎 - выдается за общее пожертвование на проект в сумме 25 000 р и дает уникальную роль в Discord, которая открывает постоянный доступ к Premium тикетам, уникальную роль в Игре (+ 3 пт за 15 минут игры на сервере), а также дополнительную скидку в донат магазине 5%;
                                                        <br/>
                                                        <br/>
                                                        ➤ 💎DiamondSponsoR💎 - выдается за общее пожертвование на проект в сумме 50 000 р и дает уникальную роль в Discord, которая открывает постоянный доступ к Premium тикетам, уникальную роль в Игре (+ 5 пт  за 15 минут игры на сервере), Diamond кит ( 1 раз за вайп), а также дополнительную скидку в донат магазине 10%;
                                                        <br/>
                                                        <br/>
                                                        ➤ 💰EmeraldSponsoR💰 - выдается за общее пожертвование на проект в сумме 100 000 р и дает уникальную роль в Discord, которая открывает постоянный доступ к Premium тикетам, уникальную роль в Игре (+ 10 пт  за 15 минут игры на сервере), Emerald кит ( 1 раз за вайп), а также дополнительную скидку в донат магазине 15%.
                                                        <br/>
                                                        <br/>
                                                        ➤ 💰RubinSponsoR💰 - выдается за общее пожертвование на проект в сумме 200 000 р и дает уникальную роль в Discord, которая открывает постоянный доступ к Premium тикетам, уникальную роль в Игре (+ 20 пт  за 15 минут игры на сервере), Rubin кит ( 1 раз за вайп), а также дополнительную скидку в донат магазине 20%.
                                                        <br/>
                                                        <br/>
                                                        <br/>
                                                        Если вы за 1 вайп совершите пожертвование на определенную сумму, то получите на него дополнительную скидку, которая суммируется со спонсорской и действует поверх существующих скидок магазина:
                                                        <br/>
                                                        <br/>
                                                        ➤Дополнительная скидка 3% - При пожертвовании в размере 10 000 руб. и более.
                                                        <br/>
                                                        <br/>
                                                        ➤Дополнительная скидка 7% - При пожертвовании в размере 20 000 руб. и более.
                                                        <br/>
                                                        <br/>
                                                        ➤Дополнительная скидка 15% - При пожертвовании в размере 50 000 руб. и более.
                                                        <br/>
                                                        <br/>
                                                        <br/>
                                                        Для получения статуса спонсора и/или скидки после пополнения следует обратиться к администрации через tiсket в нашем Discord канале.

                                                    </p>
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
            </topUpContext.Provider>
        </BonusesStyled>
    )
}
