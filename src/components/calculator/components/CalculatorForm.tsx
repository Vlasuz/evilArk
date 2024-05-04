import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {currencyList} from '../../../functions/currencyList';
import {setInfoForPay} from '../../../redux/toolkitSlice';
import {apiLink} from "../../../hooks/apiLink";
import axios, {AxiosResponse} from "axios";

interface ICalculatorFormProps {

}

interface ICurrency {
    currency: string;
    id: number;
    real_price: number;
    unit_price: number
}

export const CalculatorForm: React.FC<ICalculatorFormProps> = () => {

    const infoForPay = useSelector((state: any) => state.toolkit.infoForPay)

    const typeOfCurrency = [
        {
            type: "usd",
            icon: "$"
        }, {
            type: "rub",
            icon: "₽"
        }, {
            type: "uah",
            icon: "₴"
        }, {
            type: "gbr",
            icon: "£"
        }, {
            type: "eur",
            icon: "€"
        }, {
            type: "kzt",
            icon: "₸"
        },
    ]

    const [currencyList, setCurrencyList] = useState<ICurrency[]>([]);
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [activeCurrency, setActiveCurrency] = useState<ICurrency>(currencyList?.filter(item => item?.currency === infoForPay?.currency)[0] ?? currencyList[0])
    const [valueCurrency, setValueCurrency] = useState(+infoForPay.value)
    const [valueEvilCoin, setValueEvilCoin] = useState((+infoForPay.value / activeCurrency?.real_price) * activeCurrency?.unit_price)
    const dispatch = useDispatch()

    useEffect(() => {
        setActiveCurrency(currencyList?.filter(item => item?.currency === infoForPay?.currency)[0] ?? currencyList[0])
    }, [currencyList])

    const handleChangeCurrency = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        console.log((+infoForPay.value / activeCurrency?.real_price) * activeCurrency?.unit_price)
        setValueCurrency(+e.target.value)
        setValueEvilCoin((+e.target.value / activeCurrency?.real_price) * activeCurrency?.unit_price)
        dispatch(setInfoForPay({
            currency: activeCurrency?.currency,
            value: +e.target.value,
            icon: typeOfCurrency.filter(item => item.type.toLowerCase() === activeCurrency?.currency.toLowerCase())[0]?.icon,
        }))
    }
    const handleChangeEvilCoin = (e: ChangeEvent<HTMLInputElement>) => {
        setValueEvilCoin(+e.target.value)
        setValueCurrency(prev => (+e.target.value / activeCurrency?.real_price) * activeCurrency?.unit_price)
        dispatch(setInfoForPay({
            currency: activeCurrency?.currency,
            value: (+infoForPay.value / activeCurrency?.real_price) * activeCurrency?.unit_price,
            icon: typeOfCurrency.filter(item => item.type.toLowerCase() === activeCurrency?.currency.toLowerCase())[0]?.icon,
        }))
    }
    const handleSwitchCurrency = (currencyData: ICurrency) => {
        setIsSelectOpen(false)

        setActiveCurrency(currencyData)
        dispatch(setInfoForPay({
            currency: currencyData?.currency,
            value: valueCurrency,
            icon: typeOfCurrency.filter(item => item.type.toLowerCase() === currencyData?.currency.toLowerCase())[0]?.icon
        }))
        setValueEvilCoin((valueCurrency / currencyData?.real_price) * currencyData?.unit_price)
    }

    useEffect(() => {
        axios.get(apiLink("api/currency"))
            .then(({data}: AxiosResponse<{ data: ICurrency[] }>) => {
                setCurrencyList(data.data.filter(item => typeOfCurrency.some(item2 => item2.type.toLowerCase() === item.currency.toLowerCase())))
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <div
            className="replenishment-bonuses__calculator calculator-replenishment-bonuses">
            <div className="calculator-replenishment-bonuses__item ">
                <input value={valueCurrency > 0 ? Math.ceil(valueCurrency) : ""} onChange={e => handleChangeCurrency(e)}
                       placeholder="0"
                       autoComplete='off' type='number' name='form[]'
                       className='calculator-replenishment-bonuses__input calculator-replenishment-bonuses__input_give'/>
                <div className="calculator-replenishment-bonuses__valuta">
                    <div className="dropdown dropdown">
                        <div className={'dropdown__button' + (isSelectOpen ? " active" : "")}
                             onClick={_ => setIsSelectOpen(prev => !prev)}>
                            {
                                typeOfCurrency.filter(item => item.type.toLowerCase() === activeCurrency?.currency.toLowerCase())[0]?.icon
                            }
                        </div>
                        <ul className={"dropdown__list" + (isSelectOpen ? " visible" : "")}>

                            {
                                currencyList.map(item =>
                                    <li key={item.currency} className="dropdown__list-item"
                                        onClick={_ => handleSwitchCurrency(item)}>
                                        {typeOfCurrency.filter(item2 => item2.type.toLowerCase() === item?.currency.toLowerCase())[0]?.icon}
                                    </li>
                                )
                            }

                        </ul>
                        <input value={valueEvilCoin} onChange={e => setValueEvilCoin(+e.target.value)} type='tel'
                               name='form[]'
                               className='dropdown__input-hidden dropdown__input-hidden_valuta'/>
                    </div>
                </div>
            </div>
            <div className="calculator-replenishment-bonuses__equal">=</div>
            <div className="calculator-replenishment-bonuses__item">
                <input value={valueEvilCoin > 0 ? valueEvilCoin.toFixed(2) : ""} onChange={e => handleChangeEvilCoin(e)}
                       placeholder="0.00"
                       autoComplete='off' type='number' name='form[]'
                       className='calculator-replenishment-bonuses__input calculator-replenishment-bonuses__input_get'/>
                <span>EC</span>
            </div>
        </div>
    )
}
