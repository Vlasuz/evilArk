import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import { currencyList } from '../../../functions/currencyList';
import {setInfoForPay} from '../../../redux/toolkitSlice';

interface ICalculatorFormProps {

}

export const CalculatorForm: React.FC<ICalculatorFormProps> = () => {

    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [activeCurrency, setActiveCurrency] = useState<any>(currencyList[0])
    const [valueCurrency, setValueCurrency] = useState(0)
    const [valueEvilCoin, setValueEvilCoin] = useState(0)
    const dispatch = useDispatch()

    const handleChangeCurrency = (e: ChangeEvent<HTMLInputElement>) => {
        setValueCurrency(+e.target.value)
        setValueEvilCoin(prev => +e.target.value * activeCurrency.value)
        dispatch(setInfoForPay({
            currency: activeCurrency.currency,
            value: +e.target.value,
            icon: activeCurrency.icon
        }))
    }
    const handleChangeEvilCoin = (e: ChangeEvent<HTMLInputElement>) => {
        setValueEvilCoin(+e.target.value)
        setValueCurrency(prev => +e.target.value / activeCurrency.value)
        dispatch(setInfoForPay({
            currency: activeCurrency.currency,
            value: +e.target.value / activeCurrency.value,
            icon: activeCurrency.icon
        }))
    }
    const handleSwitchCurrency = (currencyData: any) => {
        setIsSelectOpen(false)

        setActiveCurrency(currencyData)
        dispatch(setInfoForPay({
            currency: currencyData.currency,
            value: valueCurrency * activeCurrency.value,
            icon: activeCurrency.icon
        }))
        setValueEvilCoin(valueCurrency * currencyData.value)
    }

    return (
        <div
            className="replenishment-bonuses__calculator calculator-replenishment-bonuses">
            <div className="calculator-replenishment-bonuses__item ">
                <input value={Math.ceil(valueCurrency)} onChange={e => handleChangeCurrency(e)} placeholder="0"
                       autoComplete='off' type='text' name='form[]'
                       className='calculator-replenishment-bonuses__input calculator-replenishment-bonuses__input_give'/>
                <div className="calculator-replenishment-bonuses__valuta">
                    <div className="dropdown dropdown">
                        <div className={'dropdown__button' + (isSelectOpen ? " active" : "")}
                             onClick={_ => setIsSelectOpen(prev => !prev)}>
                            {
                                activeCurrency.icon
                            }
                        </div>
                        <ul className={"dropdown__list" + (isSelectOpen ? " visible" : "")}>

                            {
                                currencyList.map((item: any) =>
                                    <li key={item.currency} className="dropdown__list-item" onClick={_ => handleSwitchCurrency(item)}>
                                        {item.icon}
                                    </li>
                                )
                            }

                        </ul>
                        <input value={valueEvilCoin} onChange={e => setValueEvilCoin(+e.target.value)} type='text'
                               name='form[]'
                               className='dropdown__input-hidden dropdown__input-hidden_valuta'/>
                    </div>
                </div>
            </div>
            <div className="calculator-replenishment-bonuses__equal">=</div>
            <div className="calculator-replenishment-bonuses__item">
                <input value={valueEvilCoin.toFixed(2)} onChange={e => handleChangeEvilCoin(e)} placeholder="0"
                       autoComplete='off' type='text' name='form[]'
                       className='calculator-replenishment-bonuses__input calculator-replenishment-bonuses__input_get'/>
                <span>EC</span>
            </div>
        </div>
    )
}
