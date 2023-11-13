import React, { useEffect } from 'react'
import {IProductSingle} from "../../../models";

interface IShopItemTableItemProps {
    value: string | number | null,
    name: string
}

export const ShopItemTableItem:React.FC<IShopItemTableItemProps> = ({name, value}) => {

    return (
        <>
            <div className="parameters-select-product__label label-parameters-select-product">
                <div className="label-parameters-select-product__row">
                    <div className="label-parameters-select-product__column">
                        <div
                            className="label-parameters-select-product__item label-parameters-select-product__item_level">
                            <div className="label-parameters-select-product__text">
                                {name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="parameters-select-product__value value-parameters-select-product">
                <div className="value-parameters-select-product__row">
                    <div className="value-parameters-select-product__column">
                        <div
                            className="value-parameters-select-product__item value-parameters-select-product__item_level">
                            {value}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
