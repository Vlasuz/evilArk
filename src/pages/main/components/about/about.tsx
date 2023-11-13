import React, {useEffect, useState} from 'react'
import {useImages} from "../../../../hooks/images";
import {apiLink} from "../../../../hooks/apiLink";
import axios from 'axios';
import {IAboutInfo, IAboutItems} from "../../../../models";
import HTMLReactParser from 'html-react-parser';
import {useSelector} from "react-redux";

interface IAboutProps {

}

export const About: React.FC<IAboutProps> = () => {
    const {placeholder} = useImages()

    const [aboutInfo, setAboutInfo] = useState<IAboutInfo>({
        title: '',
        sub_title: '',
        text: ''
    })
    const [aboutItems, setAboutItems] = useState<IAboutItems[]>([])

    const lang = useSelector((state: any) => state.toolkit.language)

    useEffect(() => {
        axios.get(apiLink('api/home/about-us?language='+lang)).then(({data}) => setAboutInfo(data.data))
        axios.get(apiLink('api/about-us?language='+lang)).then(({data}) => setAboutItems(data.data))
    }, [lang])

    return (
        <section className="sobre-nosotros" id="about" data-aos="fade" data-aos-duration="750" data-aos-offset="200">
            <div className="sobre-nosotros__container container">
                <div className="sobre-nosotros__body">
                    <div className="sobre-nosotros__label label">
                        {aboutInfo?.title}
                    </div>
                    <h3 className="sobre-nosotros__title title-h3">
                        {HTMLReactParser(aboutInfo?.sub_title)}
                    </h3>
                    <div className="sobre-nosotros__subtitle">
                        {HTMLReactParser(aboutInfo?.text)}
                    </div>
                    <div className="sobre-nosotros__row">

                        {
                            aboutItems?.length && aboutItems?.map((item: IAboutItems, index: number) =>
                                <div key={index} className="sobre-nosotros__column">
                                    <div className="sobre-nosotros__item item-sobre-nosotros">
                                        <div className="item-sobre-nosotros__image">
                                            <img src={item?.icon ?? placeholder} alt="Comunidad"/>
                                        </div>
                                        <div className="item-sobre-nosotros__title">
                                            {item?.title}
                                        </div>
                                        <div className="item-sobre-nosotros__text">
                                            {HTMLReactParser(item?.text ?? "")}
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
