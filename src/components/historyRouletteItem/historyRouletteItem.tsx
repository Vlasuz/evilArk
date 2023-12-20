import React, {useEffect} from 'react'

import photoIcon from './../../assets/img/roulette/snow-owl.svg'
import {NavLink} from "react-router-dom";
import {Translate} from "../translate/Translate";

interface IHistoryRouletteProps {
    data: any
}

export const HistoryRouletteItem: React.FC<IHistoryRouletteProps> = ({data}) => {

    return (
        <div className="users__item">
            <div className="users__inner">
                <div className="users__body">
                    <div className="users__name-block">
                        <NavLink to={"/user/" + data?.user?.data?.id} className="users__game game-users">
                        <span className="game-users__icon">
                            <img src={photoIcon} alt="snow-owl"/>
                        </span>
                            <span className="game-users__name">
                                {data?.user?.data?.name}
                            </span>
                        </NavLink>
                        <Translate>roulette_gotten</Translate>
                    </div>
                </div>
                <div className="users__name">
                    {data.product?.name}
                </div>
                {data.product?.level && <div className="users__level">
                    Lvl {data.product?.level}
                </div>}
            </div>
        </div>
    )
}
