import React, {useEffect} from 'react'

import photoIcon from './../../assets/img/roulette/snow-owl.svg'

interface IHistoryRouletteProps {

}

export const HistoryRouletteItem: React.FC<IHistoryRouletteProps> = () => {

    return (
        <div className="users__item">
            <div className="users__inner">
                <div className="users__body">
                    <div className="users__name-block">
                        <div className="users__name">jllau2</div>
                        has gotten
                    </div>
                    <a href="" className="users__game game-users">
                        <span className="game-users__icon">
                            <img src={photoIcon} alt="snow-owl"/>
                        </span>
                        <span className="game-users__name">123123</span>
                    </a>
                </div>
                <div className="users__level">
                    Lvl 210
                </div>
            </div>
        </div>
    )
}
