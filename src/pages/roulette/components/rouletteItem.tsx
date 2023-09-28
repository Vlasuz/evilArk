import React, { useEffect } from 'react'
import {useImages} from "../../../hooks/images";

interface IRouletteItemProps {

}

export const RouletteItem:React.FC<IRouletteItemProps> = () => {
    const {servers_2} = useImages()

    return (
        <div className="games-filter-roulette__slide slide-games-filter-roulette swiper-slide">
            <div className="games-filter-roulette__item item-games-filter-roulette">
                <span className="item-games-filter-roulette__image">
                    <img src={servers_2} alt="game"/>
                </span>
                <div className="item-games-filter-roulette__name">
                    <span>Lot name</span>
                </div>
            </div>
        </div>
    )
}
