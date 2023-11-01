import React, {useContext, useEffect, useRef, useState} from 'react'
import {topUpContext} from "../../context/topUpContext";
import {useImages} from "../../hooks/images";
import {useSelector} from "react-redux";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import getCookies from "../../functions/getCookie";

interface ITopUpProps {
    isOpen: boolean
}

export const TopUp:React.FC<ITopUpProps> = ({isOpen}) => {
    const {freeKassa, paypalTopUp, stripe, wepay} = useImages()

    const infoForPay = useSelector((state: any) => state.toolkit.infoForPay)
    const isPopupOpen: any = useContext(topUpContext)
    const popupBlock = useRef(null)

    const handleCloseModal = (e: any) => {
        if(e.target.closest('.popup__content')) return;

        isPopupOpen(false)
    }

    const handlePay = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink("api/payment"), {
            "currency": infoForPay.currency,
            "amount": infoForPay.value
        }).then(({data}) => {
            if(data.data.success) {
                window.location.href = data.data.url
            }
        }).catch(er => {console.log(er)})
    }

    return (
        <div ref={popupBlock} className={"popup popup-top-up" + (isOpen ? " open" : "")}>
            <div className="popup__body" onClick={handleCloseModal}>
                <div className="popup__content" onClick={handleCloseModal}>
                    <div className="popup__title">Choose how you will top up</div>
                    <div className="popup__inner inner-popup">
                        <div className="inner-popup__payment">
                            Payment: <span>{infoForPay?.value}{infoForPay?.icon}</span>
                        </div>
                        <div className="inner-popup__payment-method papayment-method-inner-popup">
                            <div className="papayment-method-inner-popup__title">Replenishment for Soviet Union
                                countries
                                users
                            </div>
                            <div className="papayment-method-inner-popup__row">
                                <div className="papayment-method-inner-popup__column">
                                    <a href="" onClick={handlePay} className="papayment-method-inner-popup__item">
                                        <div className="papayment-method-inner-popup__image">
                                            <img src={freeKassa} alt="free-kassa" />
                                        </div>
                                    </a>
                                </div>
                                {/*<div className="papayment-method-inner-popup__column">*/}
                                {/*    <a href="" onClick={handlePay} className="papayment-method-inner-popup__item">*/}
                                {/*        <div className="papayment-method-inner-popup__image">*/}
                                {/*            <img src={wepay} alt="wepay" />*/}
                                {/*        </div>*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="inner-popup__payment-method papayment-method-inner-popup">
                            {/*<div className="papayment-method-inner-popup__title">Top-up for EU users</div>*/}
                            <div className="papayment-method-inner-popup__row">
                                {/*<div className="papayment-method-inner-popup__column">*/}
                                {/*    <a href="" onClick={handlePay} className="papayment-method-inner-popup__item">*/}
                                {/*        <div className="papayment-method-inner-popup__image">*/}
                                {/*            <img src={stripe} alt="stripe" />*/}
                                {/*        </div>*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                                {/*<div className="papayment-method-inner-popup__column">*/}
                                {/*    <a href="" onClick={handlePay} className="papayment-method-inner-popup__item">*/}
                                {/*        <div className="papayment-method-inner-popup__image">*/}
                                {/*            <img src={paypalTopUp} alt="paypal" />*/}
                                {/*        </div>*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="popup__btn-block">
                        <button onClick={_ => isPopupOpen(false)} className="inner-popup__close btn btn_small">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
