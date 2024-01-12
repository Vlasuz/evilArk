import React, {useEffect, useState} from 'react'
import {IProduct} from "../../../models";
import {useNavigate} from "react-router-dom";
import {RouletteMainMultipleLine} from "./RouletteMainMultipleLine";

interface IRouletteMainMultipleSpinProps {
    caseData: any
    isSpinStart: boolean
    isFastOpen: any
    setIsSpinStart: any
    casesAmount: number
    winnerItems: any
}

export const RouletteMainMultipleSpin: React.FC<IRouletteMainMultipleSpinProps> = ({caseData, isSpinStart, isFastOpen, setIsSpinStart, casesAmount, winnerItems}) => {

    return (
        <div className={`spin-multiple ${isSpinStart && "spin-single__spin"} ${isFastOpen && "spin-single__fast"}`}>

            {
                Array.from({ length: casesAmount }, (_, index) => index + 1).map(item =>
                    <RouletteMainMultipleLine key={item} caseData={caseData} setIsSpinStart={setIsSpinStart} isFastOpen={isFastOpen} winnerItem={winnerItems[item - 1]} isSpinStart={isSpinStart}/>
                )
            }

        </div>
    )
}
