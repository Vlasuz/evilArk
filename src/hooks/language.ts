import React, { useEffect } from 'react'
import {initReactI18next, useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../redux/toolkitSlice";
import setCookie from "../functions/setCookie";
import Lang_EN from "../languages/en.json";
import Lang_UA from "../languages/ua.json";
import Lang_RU from "../languages/ru.json";
import i18n from "i18next";
import getCookie from "../functions/getCookie";

const jsonLanguages = {
    "en": { translation: Lang_EN },
    "ua": { translation: Lang_UA },
    "ru": { translation: Lang_RU },
}
// Инициализация:
i18n.use(initReactI18next).init({
    resources: jsonLanguages,
    lng: getCookie("lang") ?? Object.keys(jsonLanguages)[0],
    fallbackLng: getCookie("lang") ?? Object.keys(jsonLanguages)[0]
});

export const useLanguage = () => {

    const languages = [
        {
            title: "ENG",
            slug: "en"
        },
        {
            title: "UA",
            slug: "ua"
        },
        {
            title: "RU",
            slug: "ru"
        },
    ]

    const {i18n} = useTranslation();
    const dispatch = useDispatch()
    const langSelected = useSelector((state: any) => state.toolkit.language)

    useEffect(() => {
        dispatch(setLanguage(i18n.language))
        setCookie('lang', i18n.language)
    }, [i18n.language])

    const handleSwitch = (slug: string) => i18n.changeLanguage(slug)

    return {languages, handleSwitch, langSelected}

}
