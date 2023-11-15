import React, {useEffect, useState} from 'react'
import {useImages} from "../../../../hooks/images";
import {useSelector} from "react-redux";
import axios from "axios";
import {apiLink} from "../../../../hooks/apiLink";
import ReactHtmlParser from "html-react-parser";

interface IDonateProps {

}

export const Donate: React.FC<IDonateProps> = () => {
    const {donateImage, placeholder} = useImages()

    const [pageInfo, setPageInfo] = useState<any>({})
    const donateInfo = useSelector((state: any) => state.toolkit.donateInfo)

    const lang = useSelector((state: any) => state.toolkit.language)

    useEffect(() => {
        axios.get(apiLink("api/home/donate?language="+lang)).then(({data}) => {
            setPageInfo(data.data)
        }).catch(er => {
            console.log(er)
        })
    }, [lang])

    return (
        <section className="donaciones" data-aos="fade" data-aos-duration="750" data-aos-offset="200" id="donates">
            <div className="donaciones__container container">
                <div className="donaciones__body">
                    <div className="donaciones__label label">
                        {ReactHtmlParser(pageInfo?.title ?? "")}
                    </div>
                    <h3 className="donaciones__title title-h3">
                        {ReactHtmlParser(pageInfo?.sub_title ?? "")}
                    </h3>
                    <div className="donaciones__sibtitle">
                        {ReactHtmlParser(pageInfo?.text ?? "")}
                    </div>
                    <div className="donaciones__row">

                        {
                            donateInfo?.map((item: any) =>
                                <div key={item?.description} className="donaciones__column">
                                    <div className="donaciones__item item-donaciones">
                                        <a href={item?.url} className="item-donaciones__btn">
                                            <img src={item?.icon ?? placeholder} alt={item?.description} />
                                        </a>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                    {/*<a href="" className="donaciones__link link-donaciones">*/}
                    {/*    <div className="link-donaciones__image">*/}
                    {/*        <img src={donateImage} alt="Reglas del proyecto"/>*/}
                    {/*    </div>*/}
                    {/*    <span className="link-donaciones__text">Reglas del proyecto</span>*/}
                    {/*</a>*/}
                </div>
            </div>
        </section>
    )
}
