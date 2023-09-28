import React, { useEffect, useState } from 'react'

interface ICalculatorFormProps {

}

export const CalculatorForm:React.FC<ICalculatorFormProps> = () => {

    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [currency, setCurrency] = useState("dollar")
    const [value, setValue] = useState<number>(0)

    const currencyIcon: any = {
        "dollar": "$",
        "euro": "€",
    }

    return (
        <div
            className="replenishment-bonuses__calculator calculator-replenishment-bonuses">
            <div className="calculator-replenishment-bonuses__item ">
                <input value={value} onChange={e => setValue(+e.target.value)} placeholder="0" autoComplete='off' type='text' name='form[]'
                       className='calculator-replenishment-bonuses__input calculator-replenishment-bonuses__input_give'/>
                <div className="calculator-replenishment-bonuses__valuta">
                    <div className="dropdown dropdown">
                        <div className={'dropdown__button' + (isSelectOpen ? " active" : "")} onClick={_ => setIsSelectOpen(prev => !prev)}>
                            {currencyIcon[currency]}
                        </div>
                        <ul className={"dropdown__list" + (isSelectOpen ? " visible" : "")}>
                            <li className="dropdown__list-item" onClick={_ => {
                                setCurrency("dollar")
                                setIsSelectOpen(false)
                            }}>
                                $
                            </li>
                            <li className="dropdown__list-item" onClick={_ => {
                                setCurrency("euro")
                                setIsSelectOpen(false)
                            }}>
                                €
                            </li>
                        </ul>
                        <input value={value} onChange={e => setValue(+e.target.value)} type='text' name='form[]'
                               className='dropdown__input-hidden dropdown__input-hidden_valuta'/>
                    </div>
                </div>
            </div>
            <div className="calculator-replenishment-bonuses__equal">=</div>
            <div className="calculator-replenishment-bonuses__item">
                <input value={value} onChange={e => setValue(+e.target.value)} placeholder="0" autoComplete='off' type='text' name='form[]'
                       className='calculator-replenishment-bonuses__input calculator-replenishment-bonuses__input_get'/>
                <span>EC</span>
            </div>
        </div>
    )
}
