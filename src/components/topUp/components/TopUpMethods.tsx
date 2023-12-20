import React, {useEffect, useState} from 'react'
import {Translate} from "../../translate/Translate";
import {useImages} from "../../../hooks/images";

interface ITopUpMethodsProps {
    setSelectedMethod: any
}

export const TopUpMethods: React.FC<ITopUpMethodsProps> = ({setSelectedMethod}) => {
    const {freeKassa} = useImages()

    const [localSelectedMethod, setLocalSelectedMethod] = useState("")

    const switchPaymentMethod = (method: string) => {
        setLocalSelectedMethod(prev => prev === method ? "" : method)
        setSelectedMethod((prev: any) => prev === method ? "" : method)
    }

    return (
        <div className="inner-popup__payment-method papayment-method-inner-popup">
            <div className="papayment-method-inner-popup__title">
                <Translate>replenishment_balance_modal_text</Translate>
            </div>
            <div className="papayment-method-inner-popup__row">
                <div className="papayment-method-inner-popup__column">
                    <a href={"#"}
                       onClick={_ => switchPaymentMethod("kassa")}
                       className={"papayment-method-inner-popup__item" + (localSelectedMethod === "kassa" ? " _active" : "")}>
                        <div className="papayment-method-inner-popup__image">
                            <img src={freeKassa} alt="free-kassa"/>
                        </div>
                    </a>
                </div>
                <div className="papayment-method-inner-popup__column">
                    <a href={"#"}
                       onClick={_ => switchPaymentMethod("crypto")}
                       className={"papayment-method-inner-popup__item" + (localSelectedMethod === "crypto" ? " _active" : "")}>
                        <div className="papayment-method-inner-popup__image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                 viewBox="0 0 91 104" fill="currentColor">
                                <path
                                    d="M87.71 24.5805L48.2 1.77055C46.42 0.740547 44.2 0.740547 42.41 1.77055L2.9 24.5805C1.11 25.6105 0 27.5305 0 29.6005V75.2206C0 77.2806 1.11 79.2005 2.9 80.2405L42.41 103.051C43.29 103.561 44.29 103.821 45.31 103.821C46.33 103.821 47.33 103.551 48.21 103.051L87.72 80.2405C89.51 79.2105 90.62 77.2906 90.62 75.2206V29.6005C90.62 27.5405 89.51 25.6205 87.72 24.5805H87.71ZM46.2 49.5805C45.65 49.9005 44.96 49.9005 44.41 49.5805L6 27.4105L44.41 5.24055C44.95 4.93055 45.66 4.93055 46.2 5.24055L84.61 27.4105L46.2 49.5805V49.5805ZM42.41 53.0405C42.69 53.2005 42.99 53.3405 43.31 53.4505V98.9305L4.9 76.7705C4.35 76.4505 4 75.8606 4 75.2206V30.8705L42.41 53.0405V53.0405Z"
                                    fill="black"></path>
                            </svg>
                            <p>Cryptomus</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
