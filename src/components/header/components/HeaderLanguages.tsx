import React, {useEffect, useState} from 'react'
import Lang_EN from '../../../languages/en.json'
import Lang_UA from '../../../languages/ua.json'
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import getCookie from '../../../functions/getCookie';
import {useDispatch, useSelector} from "react-redux";
import setCookie from '../../../functions/setCookie';
import { setLanguage } from '../../../redux/toolkitSlice';
import {useLanguage} from "../../../hooks/language";

interface ILanguagesProps {

}

export const HeaderLanguages:React.FC<ILanguagesProps> = () => {

    const {languages, handleSwitch, langSelected} = useLanguage()

    return (
        <div className="header__languages languages-header" data-da="mobile-header__body, 2, 650">
            <ul className="languages-header__list">

                {
                    languages.map((item, index) =>
                        <li key={index} onClick={_ => handleSwitch(item.slug)} className={"languages-header__item" + (item.slug.toLowerCase() === langSelected.toLowerCase() ? " active" : "")}>
                            <a className="languages-header__link">
                                {item.title}
                            </a>
                        </li>
                    )
                }

            </ul>
        </div>
    )
}
