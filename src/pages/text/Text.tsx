import React, {useEffect, useState} from 'react'
import {Translate} from "../../components/translate/Translate";
import {ShopTop} from "../shop/components/shopTop";
import {ShopAccount} from "../shop/components/shopAccount";
import {ShopFilter} from "../shop/components/shopFilter";
import {IProduct} from "../../models";
import {ShopItem} from "../shop/components/shopItem";
import {Footer} from "../../components/footer/Footer";
import {TextStyled} from "./Text.styled";
import {useParams} from "react-router-dom";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {useSelector} from "react-redux";

interface ITextProps {

}

interface IDoc {
    "title_en": string
    "text_en": string
    "title_ua": string
    "text_ua": string
    "title_ru": string
    "text_ru": string
}

export const Text: React.FC<ITextProps> = () => {

    const {docsId} = useParams()

    const language = useSelector((state: any) => state.toolkit.language)

    const [doc, setDoc] = useState<IDoc | undefined>()

    useEffect(() => {
        axios.get(apiLink(`/api/home/${docsId}`)).then(({data}) => {
            console.log(data.data)
            setDoc(data.data)
        }).catch(er => console.log(apiLink("/api/home/privacy-policy"), er))
    }, [])

    const docTitle: any = {
        'ru': doc?.title_ru,
        'en': doc?.title_en,
        'ua': doc?.title_ua,
    }
    const docText: any = {
        'ru': doc?.text_ru,
        'en': doc?.text_en,
        'ua': doc?.text_ua,
    }

    return (
        <TextStyled className={"text-page"}>
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
                                    docText[language]
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </TextStyled>
    )
}
