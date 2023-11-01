import React, { useEffect } from 'react'
import {IProduct} from "../../models";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import getCookies from "../../functions/getCookie";
import {toast} from "react-toastify";
import {notifications} from "../../hooks/notifications";
import {Translate} from "../translate/Translate";

interface IProductProps {
    isCanGet: boolean
    data: IProduct
}

export const Product:React.FC<IProductProps> = ({isCanGet, data}) => {

    const handleGetInGame = () => {
        console.log('get in game', data)

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink("api/products/get-in-game/"+data.id)).then(({data}) => {
            console.log(data.data)
            notifications("Get in game. "+data.data.message)
        }).catch(er => console.log(er))
    }

    return (
        <div className="purchases__column">
            <div className="purchases__item item-purchases">
                <div className="item-purchases__image-block">
                    <div className="item-purchases__image">
                        <img src={data?.icon} alt="PvP Simple Kit"/>
                    </div>
                </div>
                <div className="item-purchases__name">
                    {data?.name}
                </div>
                <div className="item-purchases__bottom">
                    <div className="item-purchases__number">
                        X<span>{data?.amount}</span>
                    </div>
                    <div className="item-purchases__line">

                    </div>
                    <div className="item-purchases__price">{data?.price} EC
                    </div>
                </div>
                {isCanGet && <button onClick={handleGetInGame} className="item-purchases__btn">
                    <Translate>get_in_game_title</Translate>
                </button>}
            </div>
        </div>
    )
}
