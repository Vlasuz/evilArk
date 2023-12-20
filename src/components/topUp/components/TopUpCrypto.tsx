import React, {useEffect, useState} from 'react'
import axios from "axios";
import getCookies from "../../../functions/getCookie";
import {apiLink} from "../../../hooks/apiLink";

interface ITopUpCryptoProps {
    selectedCurrency: any
    setSelectedCurrency: any
    selectedNetwork: any
    setSelectedNetwork: any
    cryptoList: any
    currencies: any
}

export const TopUpCrypto: React.FC<ITopUpCryptoProps> = ({selectedCurrency, setSelectedCurrency, selectedNetwork, setSelectedNetwork, cryptoList, currencies}) => {

    useEffect(() => {
        setSelectedNetwork(cryptoList?.filter((item: any) => item.currency === selectedCurrency && item.network)?.map((item: any) => item.network)[0])
    }, [selectedCurrency])

    const [isOpenCurrencies, setIsOpenCurrencies] = useState(false)
    const [isOpenNetworks, setIsOpenNetworks] = useState(false)

    return (
        <div className={"cryptoSelected"}>
            <div className="label">
                <span>Валюта</span>
                {/*(!selectedCurrency ? " dropdown_error" : "")*/}
                <div className={"characteristics-select-product__dropdown dropdown"}>
                    <button className='dropdown__button' onClick={_ => setIsOpenCurrencies(prev => !prev)}>
                        {selectedCurrency !== "" ? selectedCurrency : "Выберите валюту"}
                    </button>
                    <ul className={"dropdown__list" + (isOpenCurrencies ? " visible" : "")}>

                        {
                            currencies?.map((item: any) =>
                                <li key={item} onClick={_ => {
                                    setSelectedCurrency(item)
                                    setIsOpenCurrencies(false)
                                }} className="dropdown__list-item"
                                    data-dropdown="module 2 - 125 lvl">
                                    {item}
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>

            <div className="label">
                <span>Сеть</span>
                {/*(isClickToPay && !selectedNetwork ? " dropdown_error" : "")*/}
                <div className={"characteristics-select-product__dropdown dropdown"}>
                    <button className='dropdown__button' onClick={_ => setIsOpenNetworks(prev => !prev)}>
                        {selectedNetwork !== "" ? selectedNetwork : "Выберите сеть"}
                    </button>
                    <ul className={"dropdown__list" + (isOpenNetworks ? " visible" : "")}>

                        {
                            cryptoList
                                ?.filter((item: any) => item.currency === selectedCurrency && item.network)
                                ?.map((item: any) =>
                                    <li key={item.network} onClick={_ => {
                                        setSelectedNetwork(item.network)
                                        setIsOpenNetworks(false)
                                    }} className="dropdown__list-item">
                                        {item.network}
                                    </li>
                                )
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}
