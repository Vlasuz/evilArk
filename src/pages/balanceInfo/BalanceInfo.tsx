import React, {useEffect, useState} from 'react'
import HTMLReactParser from "html-react-parser";
import {Footer} from "../../components/footer/Footer";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {useSelector} from "react-redux";
import {BalanceInfoStyled} from "./BalanceInfo.styled";

interface IBalanceInfoProps {

}

export const BalanceInfo: React.FC<IBalanceInfoProps> = () => {

    const [data, setData]: any = useState({})

    const language = useSelector((state: any) => state.toolkit.language)

    useEffect(() => {

        axios.get(apiLink("api/donate-description")).then(({data}) => {
            setData(data.data)
        })

    }, [])

    const docTitle: any = {
        'ru': data?.title_ru,
        'en': data?.title_en,
        'ua': data?.title_ua,
    }
    const docText: any = {
        'ru': data?.text_ru,
        'en': data?.text_en,
        'ua': data?.text_ua,
    }

    return (
        <BalanceInfoStyled>
            <section className="categories__main">
                <div className="categories__container container">
                    <div className="categories__body">
                        <h2 className="categories__title title-h2">

                            {
                                docTitle[language]
                            }

                        </h2>
                        <div className="categories__inner">
                            <p>
                                {
                                    HTMLReactParser(docText[language] ?? "")
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </BalanceInfoStyled>
    )
}
