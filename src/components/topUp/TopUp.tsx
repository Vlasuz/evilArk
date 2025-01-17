import React, {useContext, useEffect, useRef, useState} from 'react'
import {topUpContext} from "../../context/topUpContext";
import {useImages} from "../../hooks/images";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import getCookies from "../../functions/getCookie";
import {Translate} from "../translate/Translate";
import {IServer} from "../../models";
import {setCategory, setInfoForPay} from "../../redux/toolkitSlice";
import {TopUpStyled} from "./TopUp.styled";
import {TopUpCrypto} from "./components/TopUpCrypto";
import {currencyList} from "../../functions/currencyList";
import {toast} from "react-toastify";
import {TopUpServers} from "./components/TopUpServers";
import {TopUpMethods} from "./components/TopUpMethods";

interface ITopUpProps {
    isOpen: boolean
}

interface IKassaNetwork {
    id: number
    commission: {merchant: number, user: number, default: number}
    currency: string
    fields: {
        email: {type: string, placeholder: string, value: string, required: boolean, validate: string}
        tel: {type: string, placeholder: string, value: string, required: boolean, validate: string}
    }
    limit: {min: number, max: number}
    network: string
}

export const TopUp: React.FC<ITopUpProps> = ({isOpen}) => {

    const isPopupOpen: any = useContext(topUpContext)
    const popupBlock = useRef(null)
    const category = useSelector((state: any) => state.toolkit.category)

    const [server, setServer] = useState(category)
    const [amountForPayment, setAmountForPayment] = useState(0)

    const [selectedCryptoCurrency, setSelectedCryptoCurrency]: any = useState<string>("")
    const [selectedCryptoNetwork, setSelectedCryptoNetwork]: any = useState<string>("")
    const [selectedCryptoLimit, setSelectedCryptoLimit]: any = useState({})
    const [selectedFiat, setSelectedFiat] = useState<any>(currencyList[0])
    const [selectedMethod, setSelectedMethod] = useState<any>("")

    const [isOpenFiatCurrenciesSelect, setIsOpenFiatCurrenciesSelect] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const [cryptoAllMethods, setCryptoAllMethods]: any = useState([])
    const [cryptoCurrencies, setCryptoCurrencies]: any = useState([])

    const [chosenKassaMethod, setChosenKassaMethod] = useState<string | number>()

    const [kassaEmail, setKassaEmail] = useState<string>('')
    const [kassaPhone, setKassaPhone] = useState<string>('')

    const [kassaAllMethods, setKassaAllMethods] = useState<IKassaNetwork[]>([])
    const [kassaCurrencies, setKassaCurrencies]: any = useState([])

    useEffect(() => {
        setServer(category)
    }, [category])

    useEffect(() => {
        setChosenKassaMethod(kassaAllMethods[0]?.id)
    }, [kassaAllMethods])

    useEffect(() => {
        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.get(apiLink("api/payment/networks")).then(({data}) => {

            setCryptoAllMethods(data.data)
            setCryptoCurrencies([...new Set(data.data.map((item: any) => item.currency))])

        }).catch(er => console.log(er))


        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.get(apiLink("api/payment/networks?type=kassa")).then(({data}) => {

            setKassaAllMethods(data.data)
            setKassaCurrencies([...new Set(data.data.map((item: any) => item.currency))])

        }).catch(er => console.log(er))
    }, [])

    const handlePay = (e: React.MouseEvent<HTMLButtonElement>, payMethod: string) => {
        e.preventDefault()
        if(amountForPayment < selectedMethod2.limit.min || amountForPayment > selectedMethod2.limit.max) return toast.error('Error!');
        if(selectedMethod2.fields?.tel?.type && !isCorrectPhone) return toast.error('Error!');
        if(selectedMethod2.fields?.email?.type && !kassaEmail) return toast.error('Error!');
        const isNotCrypto = Object.values(currencyList).some((item: any) => item.currency === (selectedFiat?.currency ?? selectedFiat))

        if (payMethod === "kassa" && !isNotCrypto) {
            return toast.error("Данный метод не работает с криптовалютой");
        } else if (payMethod === "crypto" && (!selectedFiat || !selectedCryptoNetwork)) {
            return toast.error("Вы не выбрали валюту для оплаты");
        } else if (payMethod === "crypto" && amountForPayment < +selectedCryptoLimit.min_amount) {
            return toast.error(`Минимальное значение - ${+selectedCryptoLimit?.min_amount}`);
        } else if (payMethod === "crypto" && amountForPayment > +selectedCryptoLimit.max_amount) {
            return toast.error(`Максимальное значение - ${+selectedCryptoLimit?.max_amount}`);
        } else if (amountForPayment <= 0) {
            return toast.error(`Введите сумму`);
        }

        setIsPressed(true)

        let kassaFields = {}

        if(kassaEmail) {
            kassaFields = {
                ...kassaFields,
                email: kassaEmail
            }
        }
        if(kassaPhone) {
            kassaFields = {
                ...kassaFields,
                phone_number: kassaPhone
            }
        }

        const dataToPaymentKassa = {
            // "currency": selectedFiat.currency,
            "currency": selectedMethod2.currency,
            "amount": amountForPayment,
            "server_id": server.id,
            "payment_method": payMethod,
            "payment_system_id": chosenKassaMethod,
            "fields": kassaFields
        }
        const dataToPaymentCrypto = {
            "currency": selectedCryptoCurrency,
            "amount": amountForPayment,
            "server_id": server.id,
            "payment_method": payMethod,
            "to_currency": selectedCryptoCurrency,
            "network_code": selectedCryptoNetwork,
        }

        const dataBody: any = {
            "kassa": dataToPaymentKassa,
            "crypto": dataToPaymentCrypto,
        }

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink("api/payment"), dataBody[payMethod]).then(({data}) => {
            if (data.data.success) {
                if(!!data.data.url?.url || !data.data.url) return toast.error('Error!')
                window.location.href = data.data.url?.url ?? data.data.url
                setIsPressed(false)
            } else {
                setIsPressed(false)
            }
        }).catch(er => {
            setIsPressed(false)
            console.log(er)
        })

    }

    const handleCloseModal = (e: any) => {
        if (e.target.closest('.popup__content')) return;
        isPopupOpen(false)
    }

    useEffect(() => {
        setSelectedCryptoLimit(cryptoAllMethods.filter((item: any) => item.currency === selectedCryptoCurrency && item?.limit)[0]?.limit)
    }, [selectedCryptoCurrency])

    const switchFiatCurrency = (fiatCurrency: any) => {
        setIsOpenFiatCurrenciesSelect(false)
        setSelectedFiat(fiatCurrency)
    }

    const handleChooseKassaMethod = (itemId: string) => {
        setChosenKassaMethod(itemId)
    }

    const kassaLayout = () => (
        <div className='money-payment'>
        <div className="inner-popup__payment">
            {/* <Translate>amount_for_payment</Translate> */}
            Money*
            <input
                type="number"
                onChange={e => setAmountForPayment(+e.target.value)}
                placeholder={"0"}
                value={amountForPayment === 0 ? "" : amountForPayment}
            />

            {/* <div className="characteristics-select-product__dropdown dropdown">
                <button className='dropdown__button' onClick={_ => setIsOpenFiatCurrenciesSelect(prev => !prev)}>
                    {selectedFiat.icon}
                </button>
                <ul className={"dropdown__list" + (isOpenFiatCurrenciesSelect ? " visible" : "")}>

                    {
                        currencyList.map((item: any) =>
                            <li key={item.currency} className="dropdown__list-item"
                                onClick={_ => switchFiatCurrency(item)}>
                                {item.icon}
                            </li>
                        )
                    }

                </ul>
            </div> */}

            
        </div>
        <span className='minmaxlimits'>
                Minimum: {selectedMethod2.limit.min} {selectedMethod2.currency}
                <br />
                Maximum: {selectedMethod2.limit.max} {selectedMethod2.currency}
            </span>
        </div>
    )
    
    const [selectedMethod2, setSelectedMethod2] = useState<any>()
    
    useEffect(() => {
        const selectedMethod = kassaAllMethods.find(item => item.id == chosenKassaMethod);
        
        setSelectedMethod2(selectedMethod)
    }, [chosenKassaMethod]);

    const [isCorrectPhone, setIsCorrectPhone] = useState(false)
    
    
    const kassaNetwork = () => (
        <div className="inner-popup__payment inner-popup__payment-kassa_methods">
            <h3>Choose Network</h3>

            {/* <ul className="kassa_methods">
                {
                    kassaAllMethods.length && kassaAllMethods.map((item: IKassaNetwork) => (
                        <li key={item.id} onClick={_ => setChosenKassaMethod(item.id)} className={`kassa_method_item ${chosenKassaMethod === item.id ? "active" : ""}`}>
                            <p>
                                {item.network}
                            </p>
                        </li>
                    ))
                }
            </ul> */}

            <legend>
                <label htmlFor="kassa-phone">Method*</label>
                &nbsp;&nbsp;
                <select name="" id="" onChange={e => handleChooseKassaMethod(e.target.value)}>
                    {
                        kassaAllMethods.length && kassaAllMethods.map((item: IKassaNetwork) => (
                            <option value={item.id} key={item.id} className={`kassa_method_item ${chosenKassaMethod === item.id ? "active" : ""}`}>
                                    {item.network}
                            </option>
                        ))
                    }
                </select>
            </legend>


            {selectedMethod2.fields?.email?.type && <legend>
                <label htmlFor="kassa-email">Email*</label>
                <input
                    type="email"
                    id='kassa-email'
                    onChange={e => setKassaEmail(e.target.value)}
                    placeholder={"Email"}
                    value={kassaEmail}
                />
            </legend>}
            {selectedMethod2.fields?.tel?.type && <legend>
                <label htmlFor="kassa-phone">Phone*</label>
                <input
                    type="tel"
                    maxLength={12}
                    id='kassa-phone'
                    onChange={e => {
                        setKassaPhone(e.target.value)
                        const phoneNumber = e.target.value;
                        const phonePattern = /^\+7\d{10}$/;

                        // Проверяем, соответствует ли введенный номер паттерну
                        const isCorrectPhone = phonePattern.test(phoneNumber);
                        
                        setIsCorrectPhone(isCorrectPhone);
                    }}
                    placeholder={"+7*********"}
                    value={kassaPhone}
                />
            </legend>}
            {selectedMethod2.fields?.tel?.type && !isCorrectPhone && <p className="error-kassa-phone">Write correct phone number</p>}
            

            {/* <div className="characteristics-select-product__dropdown dropdown"> */}
            
                {/* <div className="characteristics-select-product__dropdown dropdown"> */}
                    {/* <button className='dropdown__button' onClick={_ => setIsOpenFiatCurrenciesSelect(prev => !prev)}>
                        {selectedFiat.icon}
                    </button> */}
                    {/* <ul className={"dropdown__list" + (isOpenFiatCurrenciesSelect ? " visible" : "")}>

                        {
                            kassaAllMethods.length && kassaAllMethods.map((item: IKassaNetwork) =>
                                <li key={item.id} className="dropdown__list-item"
                                    onSelect={_ => setChosenKassaMethod(item.id)}>
                                    {item.network}
                                </li>
                            )
                        }

                    </ul> */}
                {/* </div> */}
                
            {/* </div> */}
        </div>
    )

    return (
        <TopUpStyled ref={popupBlock} className={"popup popup-top-up" + (isOpen ? " open" : "")}>
            <div className="popup__body" onClick={handleCloseModal}>
                <div className="popup__content" onClick={handleCloseModal}>
                    <div className="popup__title">
                        <Translate>choose_payment_method</Translate>
                    </div>

                    <TopUpServers setServer={setServer}/>

                    <div className="popup__inner inner-popup">


                        <div className="inner-popup__payment-method papayment-method-inner-popup">
                            <div className="papayment-method-inner-popup__title">
                                Донаты
                            </div>
                            <div className="papayment-method-inner-popup__row">
                                <div className="papayment-method-inner-popup__column">
                                    <a href="https://boosty.to/evilark/donate" target={"_blank"}
                                       className={"papayment-method-inner-popup__item"}>
                                        <div className="papayment-method-inner-popup__image">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="145px" height="40px" viewBox="0 0 145 40" version="1.1"><defs><linearGradient x1="61.5370404%" y1="13%" x2="34.2376801%" y2="129.365079%" id="linearGradient-1"><stop stopColor="#EF7829" offset="0%"/><stop stopColor="#F0692A" offset="28%"/><stop stopColor="#F15E2C" offset="63%"/><stop stopColor="#F15A2C" offset="100%"/></linearGradient></defs><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Blocks/Header_Unlogged" transform="translate(-15.000000, -15.000000)"><g id="icons/boosty_logo" transform="translate(15.000000, 15.000000)"><g id="Shape"><path d="M138.119363,13.14856 L132.002653,22.63144 L131.397878,13.14856 L122.575597,13.14856 C123.384615,10.366 124.037135,8.13256 124.037135,8.13256 L124.381963,7.01848 L117.6313,7.01848 L117.312997,8.13256 L115.851459,13.14856 L108.660477,13.14856 C102.750663,13.14856 99.4244032,14.8276 98.0503979,18.00352 C97.2546419,15.09952 94.6206897,13.14856 90.5782493,13.14856 C87.2902077,13.135208 84.1128672,14.3300173 81.6551724,16.504 C80.464191,14.45536 78.1061008,13.1512 74.8116711,13.1512 C71.2975199,13.1360778 67.9189855,14.5000837 65.4084881,16.94752 C64.3103448,14.656 61.8541114,13.14856 58.3262599,13.14856 C57.1586378,13.1510938 55.9961737,13.302814 54.867374,13.6 L55.397878,11.77312 C55.4066092,11.7439195 55.4181572,11.7156279 55.4323607,11.68864 L56.7904509,7 L50.066313,7 L45.7798408,21.73384 C45.668435,22.02952 45.5676393,22.32784 45.4801061,22.63144 C45.2902336,23.2752559 45.1623364,23.9355911 45.0981432,24.60352 C44.5384615,28.714 46.3474801,31.816 51.3660477,32.0272 C51.8475451,32.0843575 52.332067,32.1125687 52.8169761,32.11168 C56.2925823,32.0722669 59.6211655,30.7100879 62.1193634,28.3048 C63.1564987,30.6148 65.5676393,32.11168 69.2970822,32.11168 C72.5436452,32.0790306 75.6705362,30.8873894 78.1087533,28.7536 C79.2493369,30.80488 81.5862069,32.11168 85.061008,32.11168 L101.917772,32.11168 C107.143236,32.11168 110.095491,31.08472 111.6313,28.85392 C111.6313,30.98176 112.851459,32.11168 115.941645,32.11168 C118.437666,32.11168 121.777188,31.5652 126.366048,30.43792 L119.687003,39.9208 L126.411141,39.9208 L144.846154,13.14856 L138.119363,13.14856 Z M58.9310345,22.63144 C58.3023873,24.79096 56.2785146,26.53336 54.4217507,26.53336 C52.5649867,26.53336 51.5676393,24.79096 52.1962865,22.63144 C52.8249337,20.47192 54.8488064,18.72688 56.6923077,18.72688 C58.535809,18.72688 59.5596817,20.464 58.9310345,22.63144 Z M75.4164456,22.63144 C74.7877984,24.79096 72.7639257,26.53336 70.9071618,26.53336 C69.0503979,26.53336 68.0769231,24.79096 68.6923077,22.63144 C69.3076923,20.47192 71.3448276,18.72688 73.2015915,18.72688 C75.0583554,18.72688 76.0344828,20.464 75.4164456,22.63144 Z M84.4562334,22.63144 C85.0848806,20.46928 87.1087533,18.72688 88.9522546,18.72688 C90.795756,18.72688 91.8090186,20.46928 91.1803714,22.63144 C90.5517241,24.7936 88.5941645,26.4832 86.7586207,26.536 L86.6074271,26.536 C84.801061,26.4832 83.8355438,24.76192 84.4562334,22.63144 Z M106.127321,25.85752 C105.787798,26.64952 103.132626,26.53072 102.466844,26.54128 L95.928382,26.536 C96.8103436,25.360374 97.4758216,24.0383816 97.8938992,22.63144 C97.9363395,22.48888 97.9734748,22.34896 98.0079576,22.20904 C98.7108753,23.2096 100.201592,24.11248 103.100796,24.68536 C105.864721,25.216 106.3687,25.05496 106.127321,25.85752 Z M112.777188,23.7244 C112.204244,21.49624 109.721485,20.6224 106.241379,20.2 C104.785146,20.02576 103.965517,19.95712 104.148541,19.3288 C104.289125,18.8404 105.018568,18.73744 106.586207,18.73744 L114.230769,18.73744 L112.777188,23.7244 Z M119.496021,23.74552 C119.496021,23.70064 120.151194,21.4804 120.952255,18.72952 L125.217507,18.72952 L125.915119,25.8364 C118.888594,27.328 118.713528,26.92672 119.496021,23.74552 L119.496021,23.74552 Z" fill="#242B2C" fillRule="nonzero"/><path d="M1.03841146,23.8920635 L7.81508464,0 L18.2158138,0 L16.1119922,7.40740741 C16.0897554,7.44994435 16.0716695,7.49460291 16.0579948,7.54074074 L10.5357227,27.1005291 L15.6903971,27.1005291 C13.537424,32.5848325 11.8524284,36.8846561 10.6354102,40 C1.12771484,39.8920635 -1.53892578,32.9481481 0.795423177,24.7322751 L1.03841146,23.8920635 Z M10.672793,40 L23.2084961,21.6 L17.8897526,21.6 L22.5169141,9.81375661 C30.4586849,10.6603175 34.1824284,17.0285714 31.993457,24.7301587 C29.6424935,33.015873 20.1285677,40 10.8659375,40 L10.672793,40 Z" fill="url(#linearGradient-1)" fillRule="nonzero"/></g></g></g></g></svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <TopUpMethods setSelectedMethod={setSelectedMethod}/>


                        {selectedMethod === "crypto" &&
                            <div className="inner-popup__payment-method papayment-method-inner-popup">
                                <div className="papayment-method-inner-popup__row">
                                    <TopUpCrypto
                                        selectedCurrency={selectedCryptoCurrency}
                                        setSelectedCurrency={setSelectedCryptoCurrency}
                                        selectedNetwork={selectedCryptoNetwork}
                                        setSelectedNetwork={setSelectedCryptoNetwork}
                                        cryptoList={cryptoAllMethods}
                                        currencies={cryptoCurrencies}
                                    />
                                </div>
                                <input type="number"
                                       min={selectedCryptoLimit?.min_amount ? +selectedCryptoLimit?.min_amount : 0}
                                       max={selectedCryptoLimit?.max_amount ? +selectedCryptoLimit?.max_amount : 99999}
                                       onChange={e => setAmountForPayment(+e.target.value)}
                                       placeholder={"0"}
                                       value={amountForPayment === 0 ? "" : amountForPayment}
                                />
                                {+selectedCryptoLimit?.min_amount && <p className={"amountLimit"}>
                                    Минимальное значение: {+selectedCryptoLimit?.min_amount ?? 0}
                                </p>}
                                {+selectedCryptoLimit?.max_amount && <p className={"amountLimit"}>
                                    Максимальное значение: {+selectedCryptoLimit?.max_amount ?? 99999}
                                </p>}
                            </div>}



                        
                        {selectedMethod === "kassa" && kassaNetwork()}
                        {selectedMethod === "kassa" && kassaLayout()}

                        {selectedMethod !== "" && <button
                            disabled={isPressed}
                            onClick={e => handlePay(e, selectedMethod)}
                            className={"buttonToPay replenishment-bonuses__btn"}>
                            Перейти к оплате
                        </button>}
                    </div>

                    <div className="popup__btn-block">
                        <button onClick={_ => isPopupOpen(false)} className="inner-popup__close btn btn_small">
                            <Translate>close</Translate>
                        </button>
                    </div>
                </div>
            </div>
        </TopUpStyled>
    )
}
