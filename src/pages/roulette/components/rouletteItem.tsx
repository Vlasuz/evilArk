import React, { useEffect } from 'react'
import {useImages} from "../../../hooks/images";

interface IRouletteItemProps {
    isStart?: boolean | null
    data: any
}

export const RouletteItem:React.FC<IRouletteItemProps> = ({isStart, data}) => {

    return (
        <div style={{transition: isStart ? "all 10s ease" : "none"}} className={"games-filter-roulette__slide slide-games-filter-roulette" + (isStart ? " is_scroll_roulette" : "")}>
            <span className="item-games-filter-roulette__image">
                    <img src={data.image} alt="game"/>
                </span>
            <div className="item-games-filter-roulette__name">
                <span>
                    {data.name}
                </span>
            </div>
        </div>
    )
}
