import React, { useEffect } from 'react'
import {IProductSingle} from "../../../models";

interface IShopItemTableItemProps {
    value: string | number | null,
    name: string
}

export const ShopItemTableItem:React.FC<IShopItemTableItemProps> = ({name, value}) => {

    return (
        <div className="parameters-select-product__item">
            <div className="label-parameters-select-product__column">
                <div
                    className="label-parameters-select-product__item_level">
                    <div className="label-parameters-select-product__text">
                        {name}
                    </div>
                </div>
            </div>
            <div className="value-parameters-select-product__column">
                <div className="value-parameters-select-product__item_level">
                    {value ?? "Ничего нет"}
                </div>
            </div>
        </div>
    )
}
