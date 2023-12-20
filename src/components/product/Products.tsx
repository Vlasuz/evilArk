import React, {useEffect, useState} from 'react'
import {IProduct, IServer} from "../../models";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import getCookies from "../../functions/getCookie";
import {toast} from "react-toastify";
import {notifications} from "../../hooks/notifications";
import {Translate} from "../translate/Translate";
import { Blocks } from 'react-loader-spinner'
import {InventoryStyled} from "../../pages/inventory/Inventory.styled";
import { useSelector } from 'react-redux';

interface IProductProps {
    isCanGet: boolean
    product: IProduct
    setInventory?: any
}

export const Product: React.FC<IProductProps> = ({isCanGet, product, setInventory}) => {

    const [isLoadingToGive, setIsLoadingToGive] = useState(false)
    const category: IServer = useSelector((state: any) => state.toolkit.category)

    const handleGetInGame = () => {
        setIsLoadingToGive(true)

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink("api/products/get-in-game/" + product.id), {
            "server_id": category.id
        }).then(({data}) => {

            setIsLoadingToGive(false)
            if(!data.data.success) {
                notifications(data.data.message)
            } else {
                notifications("Product issued")
                // setInventory((prev: IProduct[]) => prev?.filter((item: any) => item.id !== product.id))

                axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('access_token')}`
                axios.get(apiLink('api/users/inventory')).then(({data}) => {
                    setInventory(data.data)
                }).catch(er => console.log(er))

            }
        }).catch(er => console.log(er))
    }

    return (
        <div className="purchases__column">
            <div className="purchases__item item-purchases">
                <div className="item-purchases__image-block">
                    <div className="item-purchases__image">
                        <div className="loader">
                            {isLoadingToGive && <Blocks
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                            />}
                        </div>
                        <img src={product?.icon} className={isLoadingToGive ? "loading" : ""} alt="PvP Simple Kit"/>

                    </div>
                </div>
                <div className="item-purchases__name">
                    {product?.name}
                </div>
                <div className="item-purchases__bottom">
                    <div className="item-purchases__number">
                        X<span>{product?.amount}</span>
                    </div>
                    <div className="item-purchases__line">

                    </div>
                    <div className="item-purchases__price">{product?.price} EC
                    </div>
                </div>
                {!isLoadingToGive && isCanGet && <button onClick={handleGetInGame} className="item-purchases__btn">
                    <Translate>get_in_game_title</Translate>
                </button>}
            </div>
        </div>
    )
}
