import React, {useEffect, useState} from 'react'

interface ILanguagesProps {

}

export const Languages:React.FC<ILanguagesProps> = () => {

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

    const [isActive, setIsActive] = useState(languages[0].slug)

    return (
        <div className="header__languages languages-header" data-da="mobile-header__body, 2, 650">
            <ul className="languages-header__list">

                {
                    languages.map((item, index) =>
                        <li key={index} className={"languages-header__item" + (isActive === item.slug ? " active" : "")}>
                            <a onClick={_ => setIsActive(item.slug)} className="languages-header__link">
                                {item.title}
                            </a>
                        </li>
                    )
                }

            </ul>
        </div>
    )
}
