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
            console.log(data)
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


                                                        {!userDataLevel?.until_next_discount ? <p>Максимальная скидка достигнута</p> :
                                                            <>
                                                                <p>До следующей скидки осталось:</p>
                                                                <div className="until__inner">
                                                                    <div className="until__sum">
                                                                        EC:
                                                                        <b>{userDataLevel?.until_next_discount?.cost}</b>
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

                                                <div className="bonuses__calculate">
                                                    <Calculator/>
                                                    <TableNextBonuses/>
                                                    <p className={"calculate__info"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis deserunt earum magni molestiae odit repellat suscipit velit, vero vitae! Cumque delectus dolorem enim id itaque, iure magni maxime minima molestiae officiis quia quod ratione sunt tempore ullam voluptas voluptates. Alias debitis delectus dolore est fugit itaque magnam officiis perferendis possimus quibusdam, soluta veritatis. At deleniti numquam quam repudiandae. Accusantium beatae doloremque illo ipsum molestiae perspiciatis reprehenderit soluta voluptatem. A aperiam commodi cumque debitis eius eligendi enim facilis fugiat ipsam minus nemo neque nesciunt nobis nulla quia quibusdam quidem quis ratione recusandae, reiciendis rem repudiandae saepe soluta tempora voluptas voluptatibus.</p>
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
