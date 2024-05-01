import React, {useEffect, useState} from 'react'
import axios from "axios";
import {apiLink} from "../../../hooks/apiLink";
import {ICategory, IPromoCode, IPromoStatistic} from "../../../models";
import {useSelector} from 'react-redux';
import getCookies from "../../../functions/getCookie";
import {notifications} from "../../../hooks/notifications";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";
import {Translate} from "../../../components/translate/Translate";

interface IProfilePromoProps {

}

export const ProfilePromo: React.FC<IProfilePromoProps> = () => {

    const category: ICategory = useSelector((state: any) => state.toolkit.category)

    const [promoCode, setPromoCode] = useState<IPromoCode | undefined>()
    const [promoStatistic, setPromoStatistic] = useState<IPromoStatistic[]>([])
    const [promoValue, setPromoValue] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink("api/users/referrals"), {
            server_id: category.id,
            type: "promocode"
        }).then(({data}) => {
            setPromoCode(data.data)
            setLoading(false)
        }).catch(er => console.log(er))
    }, [category])

    useEffect(() => {
        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.get(apiLink("api/users/referrals/statistic")).then(({data}) => {
            setPromoStatistic(data.data)
        }).catch(er => console.log(er))
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!promoValue) {
            return toast.info(<Translate>you_dont_input_promo</Translate>)
        }

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink("api/users/referrals/accept"), {
            server_id: category.id,
            type: "promocode",
            referral: promoValue
        }).then(({data}) => {
            if (data.data.success === true) {
                notifications(data.data.message)
            } else if (data.data.success === false) {
                notifications(data.data.message)
            }
        }).catch(er => console.log(er))

        setPromoValue("")
    }

    const handleCopy = () => {
        toast.success(<Translate>success_copy_promo</Translate>)
        navigator.clipboard.writeText(`${promoCode?.referral}`)
    }

    return (
        <div className="promo__form">
            <form onSubmit={handleSubmit}>
                <div className="replenishment-bonuses__title">
                    <Translate>promo_codes</Translate>
                </div>
                <div className="your-promo">
                    <p><Translate>your_promo_code</Translate> </p> {loading ? <b><Translate>loading</Translate></b> : <b onClick={handleCopy}>{promoCode?.referral}</b>}
                </div>

                <label>
                    <span><Translate>enter_promo_code</Translate> </span>
                    <span className="input">
                        <input onChange={e => setPromoValue(e.target.value)} value={promoValue}
                               type="text" className={"calculator-replenishment-bonuses__input"}/>
                        <span className="placeholder">
                            {!promoValue && <Translate>promo_code</Translate>}
                        </span>
                    </span>
                    <button className={"replenishment-bonuses__btn connect-to-asa"}>
                        <Translate>active_promo_code</Translate>
                    </button>
                </label>
            </form>
            {promoStatistic.length && <div className="table">
                <table>

                    {
                        promoStatistic.map((item, index) =>
                            <tr>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="user">
                                        {/*<img width={70} height={70} src={item.avatar} alt=""/>*/}
                                        <NavLink to={"/user/" + item?.id} className="user__info">
                                            <span>{item.name}</span>
                                        </NavLink>
                                    </div>
                                </td>
                                <td>
                                    <span>SteamID: {item.steam_id}</span>
                                </td>
                            </tr>
                        )
                    }

                </table>
            </div>}
        </div>
    )
}
