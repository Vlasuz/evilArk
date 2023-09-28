import React, {ChangeEvent, useEffect, useState} from 'react'

interface ICalculatorFormProps {

}

export const CalculatorForm:React.FC<ICalculatorFormProps> = () => {

    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [currency, setCurrency] = useState("dollar")
    const [valueCurrency, setValueCurrency] = useState(0)
    const [valueEvilCoin, setValueEvilCoin] = useState(0)

    const currencyIcon: any = {
        "dollar": {
            icon: "$",
            value: 2
        },
        "euro": {
            icon: "€",
            value: 3
        },
    }

    const handleChangeCurrency = (e: ChangeEvent<HTMLInputElement>) => {
        setValueCurrency(+e.target.value)
        setValueEvilCoin(prev => +e.target.value * currencyIcon[currency].value)
    }
    const handleChangeEvilCoin = (e: ChangeEvent<HTMLInputElement>) => {
        setValueEvilCoin(+e.target.value)
        setValueCurrency(prev => +e.target.value / currencyIcon[currency].value)
    }
    const handleSwitchCurrency = (currency: string) => {
        setCurrency(currency)
        setIsSelectOpen(false)

        setValueEvilCoin(valueCurrency * currencyIcon[currency].value)
    }

    return (
        <div
            className="replenishment-bonuses__calculator calculator-replenishment-bonuses">
            <div className="calculator-replenishment-bonuses__item ">
                <input value={Math.ceil(valueCurrency)} onChange={e => handleChangeCurrency(e)} placeholder="0" autoComplete='off' type='text' name='form[]'
                       className='calculator-replenishment-bonuses__input calculator-replenishment-bonuses__input_give'/>
                <div className="calculator-replenishment-bonuses__valuta">
                    <div className="dropdown dropdown">
                        <div className={'dropdown__button' + (isSelectOpen ? " active" : "")} onClick={_ => setIsSelectOpen(prev => !prev)}>
                            {currencyIcon[currency].icon}
                        </div>
                        <ul className={"dropdown__list" + (isSelectOpen ? " visible" : "")}>
                            <li className="dropdown__list-item" onClick={_ => handleSwitchCurrency('dollar')}>
                                $
                            </li>
                            <li className="dropdown__list-item" onClick={_ => handleSwitchCurrency('euro')}>
                                €
                            </li>
                        </ul>
                        <input value={valueEvilCoin} onChange={e => setValueEvilCoin(+e.target.value)} type='text' name='form[]'
                               className='dropdown__input-hidden dropdown__input-hidden_valuta'/>
                    </div>
                </div>
            </div>
            <div className="calculator-replenishment-bonuses__equal">=</div>
            <div className="calculator-replenishment-bonuses__item">
                <input value={Math.ceil(valueEvilCoin)} onChange={e => handleChangeEvilCoin(e)} placeholder="0" autoComplete='off' type='text' name='form[]'
                       className='calculator-replenishment-bonuses__input calculator-replenishment-bonuses__input_get'/>
                <span>EC</span>
            </div>
        </div>
    )
}
