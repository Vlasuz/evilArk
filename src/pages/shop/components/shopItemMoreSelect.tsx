import React, {useContext, useEffect, useState} from 'react'
import {IModule} from "../../../models";
import { ProductModule } from './shopItemMore';

interface IShopItemMoreSelectProps {
    modules?: IModule[]
}

export const ShopItemMoreSelect: React.FC<IShopItemMoreSelectProps> = ({modules}) => {

    const setModule: any = useContext(ProductModule)
    const [isOpen, setIsOpen] = useState(false)
    const [moduleActive, setModuleActive] = useState<IModule | undefined>(modules && modules[0])

    return (
        <div className="characteristics-select-product__item characteristics-select-product__item_select-product">
            <div className="characteristics-select-product__label">Select Product:</div>
            <div className="characteristics-select-product__dropdown dropdown">
                <button className='dropdown__button' onClick={_ => setIsOpen(prev => !prev)}>
                    {moduleActive?.name}
                </button>
                <ul className={"dropdown__list" + (isOpen ? " visible" : "")}>

                    {
                        modules?.map(item =>
                            <li key={item.id} onClick={_ => {
                                setIsOpen(false)
                                setModuleActive(item)
                                setModule(item.id)
                            }} className="dropdown__list-item"
                                data-dropdown="module 2 - 125 lvl">
                                {item.name}
                            </li>
                        )
                    }

                </ul>
            </div>
        </div>
    )
}
