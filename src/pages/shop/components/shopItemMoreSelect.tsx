import React, {useContext, useEffect, useState} from 'react'
import {IModule, IProduct} from "../../../models";
import { ProductModule } from './shopItemMore';
import {Translate} from "../../../components/translate/Translate";

interface IShopItemMoreSelectProps {
    modules?: IProduct[]
    setProduct: any
}

export const ShopItemMoreSelect: React.FC<IShopItemMoreSelectProps> = ({modules, setProduct}) => {

    const setModule: any = useContext(ProductModule)
    const [isOpen, setIsOpen] = useState(false)
    const [moduleActive, setModuleActive] = useState<IProduct | undefined>(modules && modules[0])

    useEffect(() => {
        setModuleActive(modules && modules[0])
    }, [modules])

    const handleChooseModule = (item: IProduct) => {
        setIsOpen(false)
        setModuleActive(item)
        setModule(item.id)
        setProduct(item)
    }

    return (
        <div className="characteristics-select-product__item characteristics-select-product__item_select-product">
            <div className="characteristics-select-product__label">
                <Translate>select_product</Translate>:
            </div>
            <div className="characteristics-select-product__dropdown dropdown">
                <button className='dropdown__button' onClick={_ => setIsOpen(prev => !prev)}>
                    {moduleActive?.name}
                </button>
                <ul className={"dropdown__list" + (isOpen ? " visible" : "")}>

                    {
                        modules?.map(item =>
                            <li key={item.id} onClick={_ => handleChooseModule(item)} className="dropdown__list-item"
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
