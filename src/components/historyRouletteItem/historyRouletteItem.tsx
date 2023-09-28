import React, {useEffect} from 'react'

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
                            <img src="img/roulette/snow-owl.svg" alt="snow-owl"/>
                        </span>
                        <span className="game-users__name">Snow Owl</span>
                    </a>
                </div>
                <div className="users__level">
                    Lvl 210
                </div>
            </div>
        </div>
    )
}
