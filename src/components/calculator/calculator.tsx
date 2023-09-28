import React, {useEffect} from 'react'
import {CalculatorForm} from "./components/calculatorForm";

interface ICalculatorProps {

}

export const Calculator: React.FC<ICalculatorProps> = () => {

    return (

        <div className="bonuses__replenishment replenishment-bonuses">
            <div className="replenishment-bonuses__title">Balance replenishment</div>
            <div className="replenishment-bonuses__text">Enter the amount to replenish
                the
                balance
            </div>
            <CalculatorForm/>
            <button type="submit" className="replenishment-bonuses__btn top-up-btn">Top
                up
                balance
            </button>
        </div>
    )
}
