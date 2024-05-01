import React, {useEffect, useState} from 'react'
import {Translate} from "../../../components/translate/Translate";
import {useSelector} from "react-redux";
import HTMLReactParser from "html-react-parser";

interface IRouletteMainInfoProps {
    caseData: any
    handleOpen: any
    casesAmount: number
    setCasesAmount: any
    caseCount: any
    isClicked: boolean
}

export const RouletteMainInfo: React.FC<IRouletteMainInfoProps> = ({caseData, handleOpen, casesAmount, setCasesAmount, caseCount, isClicked}) => {

    const language = useSelector((state: any) => state.toolkit.language)

    const handleChooseCount = (item: number) => {
        setCasesAmount(item)
    }

    return (
        <>
            <div className="case__info">
                <div className="case__title">
                    {caseData && caseData?.name}
                </div>
                {caseData && caseData[`description_${language}`] && <div className="case__description">
                    {HTMLReactParser(caseData[`description_${language}`] ?? "")}
                </div>}
            </div>
            <div className="case__image">
                <img src={caseData?.image} alt=""/>
            </div>
            <div className="case__buttons">
                <h3>
                    <Translate>buy_case</Translate>
                </h3>
                <label>
                    <span className={"title"}>
                        <Translate>count_case_to_buy</Translate>
                    </span>
                    <span className="input">
                                                <input readOnly value={casesAmount} type="number" placeholder={"1"}/>
                                                <span>{caseData?.cost} EC</span>
                                            </span>
                </label>
                <div className="case__count">
                    {
                        caseCount.map((item: any) =>
                            <button key={item} onClick={_ => handleChooseCount(item)} className={casesAmount === item ? "is-active" : ""}>
                                {item}
                            </button>
                        )
                    }
                </div>
                <button disabled={isClicked} className="case__buy" onClick={handleOpen}>
                    <b>
                        <Translate>open_for</Translate>
                    </b>
                    <span>{caseData?.cost * casesAmount} ЕС</span>
                </button>
            </div>
        </>
    )
}
