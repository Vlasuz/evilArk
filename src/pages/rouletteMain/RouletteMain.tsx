import React, {useEffect, useState} from 'react'
import {RouletteStyled} from '../roulette/Roulette.styled';
import {RouletteMainStyled} from "./RouletteMain.styled";
import {useParams} from "react-router-dom";
import {apiLink} from '../../hooks/apiLink';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {IProduct, IUser} from "../../models";
import {RouletteMainInfo} from "./components/RouletteMainInfo";
import {RouletteMainSingleSpin} from "./components/RouletteMainSingleSpin";
import {RouletteMainMultipleSpin} from "./components/RouletteMainMultipleSpin";
import { rarities } from '../../functions/rarities';
import getCookies from "../../functions/getCookie";
import {notifications} from "../../hooks/notifications";
import {changeUserBalance} from "../../redux/toolkitSlice";
import {toast} from "react-toastify";
import {Translate} from "../../components/translate/Translate";

interface IRouletteMainProps {

}

export const RouletteMain: React.FC<IRouletteMainProps> = () => {

    const {rouletteId} = useParams()

    const category = useSelector((state: any) => state.toolkit.category)
    const userData: IUser = useSelector((state: any) => state.toolkit.user)
    const language = useSelector((state: any) => state.toolkit.language)

    console.log('language', language)

    const dispatch = useDispatch()

    const [caseData, setCaseData] = useState<any>()

    useEffect(() => {
        if (!category.id) return;

        axios.get(apiLink(`api/roulette/${rouletteId}?server_id=${category.id}?language=${language}`)).then(({data}) => {
            setCaseData(data.data)
            console.log(data)
        }).catch(er => console.log(er))
    }, [category])

    const [isFastOpen, setIsFastOpen] = useState(false)

    const handleDemoOpen = () => {
        setIsSpinStart(true)
    }

    const [winnerItems, setWinnerItems] = useState<any>([])

    const [isClicked, setIsClicked] = useState(false)

    const handleOpen = () => {
        setIsClicked(true)

        if(!userData?.id) {
            setIsClicked(false)
            return notifications("you_need_to_login")
        }
        if(userData.balance.filter(item => item.server.id === category.id)[0].balance < caseData.cost * casesAmount) {
            setIsClicked(false)
            return notifications("dont_have_balance")
        }

        openCaseApi()
    }

    async function openCaseApi() {

        setWinnerItems([])
        let countOfCheck = 0;

        for(let i = 1; i <= casesAmount; i++) {

            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
            await axios.post(apiLink("api/roulettes/play/" + caseData.id), {
                "server_id": category.id
            }).then(({data}) => {
                countOfCheck += 1;

                if (data.data?.success === false) {
                    notifications(data.data.message)
                    return;
                }

                console.log(data.data)

                setWinnerItems((prev: any) => [...prev, data.data])

                if(countOfCheck === casesAmount) {
                    setIsSpinStart(true)
                    setIsClicked(false)
                }

                dispatch(changeUserBalance({
                    balance: caseData.cost,
                    cluster: category.id
                }))

            }).catch(er => {
                er.response?.status === 401 && notifications(er.response.status)
            })

        }
    }

    const caseCount = [1, 3, 5]
    const [casesAmount, setCasesAmount] = useState(caseCount[2])
    const [isSpinStart, setIsSpinStart] = useState(false)

    return (
        <RouletteStyled>
            <RouletteMainStyled>
                <main className={"roulette"}>
                    <section className="roulette__main">
                        <div className="roulette__container container" style={{margin: '0'}}>
                            <div className="roulette__body">
                                <h2 className="roulette__title title-h2">
                                    {caseData?.name}
                                </h2>

                                <div className={`roulette__case ${isSpinStart && casesAmount > 1 && "roulette__case_multiple"} ${isSpinStart && "roulette__case_spin"}`}>


                                    {
                                        !isSpinStart ?
                                            <RouletteMainInfo
                                                caseData={caseData}
                                                handleOpen={handleOpen}
                                                casesAmount={casesAmount}
                                                setCasesAmount={setCasesAmount}
                                                caseCount={caseCount}
                                                isClicked={isClicked}
                                            />
                                            :
                                            casesAmount === 1 ?
                                                <RouletteMainSingleSpin
                                                    caseData={caseData}
                                                    isSpinStart={isSpinStart}
                                                    isFastOpen={isFastOpen}
                                                    setIsSpinStart={setIsSpinStart}
                                                    winnerItems={winnerItems}
                                                /> :
                                                <RouletteMainMultipleSpin
                                                    caseData={caseData}
                                                    isSpinStart={isSpinStart}
                                                    isFastOpen={isFastOpen}
                                                    setIsSpinStart={setIsSpinStart}
                                                    casesAmount={casesAmount}
                                                    winnerItems={winnerItems}
                                                />
                                    }

                                </div>

                                <div className="roulette__buttons">

                                    {
                                        isSpinStart ?
                                            <div className={"fast-open fast-open__loading"}>
                                                <span>
                                                    <Translate>opening</Translate>
                                                </span>
                                            </div> :
                                            <>
                                                {/*<button className={"case-open"} onClick={handleOpen}>*/}
                                                {/*    Открыть кейс*/}
                                                {/*</button>*/}
                                                <input id={"fast-open-id"} onChange={_ => setIsFastOpen(prev => !prev)}
                                                       checked={isFastOpen} type="checkbox"/>
                                                <label htmlFor={"fast-open-id"} className={"fast-open"}>
                                                    <span>
                                                        <Translate>fast_open</Translate>
                                                    </span>
                                                </label>
                                                <button className={"case-open-demo"} onClick={handleDemoOpen}>
                                                    <Translate>demo_open</Translate>
                                                </button>
                                            </>
                                    }


                                </div>

                                <div className="roulette__contains">
                                    <h3 className={"title-h3"}>
                                        <Translate>case_contains</Translate>
                                    </h3>

                                    <ul className="rarities">

                                        {
                                            rarities.map(item =>
                                                <li style={{
                                                    borderColor: item.color,
                                                    boxShadow: `0px 0px 17px 0px ${item.color}`
                                                }} key={item.color}>
                                                    <div className="box" style={{background: item.color}}/>
                                                    {item.title}
                                                </li>
                                            )
                                        }

                                    </ul>

                                    <ul className="case__items">

                                        {
                                            caseData?.products.map((item: IProduct) =>
                                                <li style={{
                                                    borderColor: rarities.filter(itemRar => itemRar.percentMax >= item.product_percent && item.product_percent >= itemRar.percentMin)[0]?.color,
                                                    boxShadow: `0px 0px 20px ${rarities.filter(itemRar => itemRar.percentMax >= item.product_percent && item.product_percent >= itemRar.percentMin)[0]?.color}`
                                                }} key={item.id}>
                                                    <div className="item__photo">
                                                        <img src={item.icon} alt=""/>
                                                        <div className="percent">
                                                            {item.product_percent}%
                                                        </div>
                                                    </div>
                                                    <div className="item__title">
                                                        {item.name}
                                                    </div>
                                                </li>
                                            )
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </RouletteMainStyled>
        </RouletteStyled>
    )
}
