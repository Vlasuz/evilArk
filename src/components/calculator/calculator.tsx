import React, {useContext, useEffect} from 'react'
import {CalculatorForm} from "./components/calculatorForm";
import {topUpContext} from "../../context/topUpContext";
import {useSelector} from "react-redux";
import {notifications} from "../../hooks/notifications";

interface ICalculatorProps {

}

export const Calculator: React.FC<ICalculatorProps> = () => {

    const isPopupOpen: any = useContext(topUpContext)
    const infoForPay = useSelector((state: any) => state.toolkit.infoForPay)

    const handleOpenPopup = () => {
        if(infoForPay.value <= 0) {
            notifications("fill_the_field_for_payment")
        } else {
            isPopupOpen(true)
        }
    }

    return (

        <div className="bonuses__replenishment replenishment-bonuses">
            <div className="replenishment-bonuses__title">Balance replenishment</div>
            <div className="replenishment-bonuses__text">Enter the amount to replenish
                the
                balance
            </div>
            <CalculatorForm/>
            <button onClick={handleOpenPopup} type="submit" className="replenishment-bonuses__btn top-up-btn">
                Top up balance
            </button>
        </div>
    )
}
