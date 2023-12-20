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
    const [selectedMethod, setSelectedMethod] = useState("")

    const [isOpenFiatCurrenciesSelect, setIsOpenFiatCurrenciesSelect] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const [cryptoAllMethods, setCryptoAllMethods]: any = useState([])
    const [cryptoCurrencies, setCryptoCurrencies]: any = useState([])

    useEffect(() => {
        setServer(category)
    }, [category])

    useEffect(() => {
        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.get(apiLink("api/payment/networks")).then(({data}) => {

            setCryptoAllMethods(data.data)
            setCryptoCurrencies([...new Set(data.data.map((item: any) => item.currency))])

        }).catch(er => console.log(er))
    }, [])

    const handlePay = (e: React.MouseEvent<HTMLButtonElement>, payMethod: string) => {
        e.preventDefault()
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

        const dataToPaymentKassa = {
            "currency": selectedFiat.currency,
            "amount": amountForPayment,
            "server_id": server.id,
            "payment_method": payMethod,
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

        console.log(dataBody[payMethod])

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink("api/payment"), dataBody[payMethod]).then(({data}) => {
            if (data.data.success) {
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

    return (
        <TopUpStyled ref={popupBlock} className={"popup popup-top-up" + (isOpen ? " open" : "")}>
            <div className="popup__body" onClick={handleCloseModal}>
                <div className="popup__content" onClick={handleCloseModal}>
                    <div className="popup__title">
                        <Translate>choose_payment_method</Translate>
                    </div>

                    <TopUpServers setServer={setServer}/>

                    <div className="popup__inner inner-popup">

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

                        {selectedMethod === "kassa" && <div className="inner-popup__payment">
                            <Translate>amount_for_payment</Translate>
                            <input
                                type="number"
                                onChange={e => setAmountForPayment(+e.target.value)}
                                placeholder={"0"}
                                value={amountForPayment === 0 ? "" : amountForPayment}
                            />
                            <div className="characteristics-select-product__dropdown dropdown">
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
                            </div>
                        </div>}

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
