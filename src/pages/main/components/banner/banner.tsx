import React, {useEffect, useState} from 'react'
import video from "../../../../assets/img/media/VideoEvilArk.mp4";
import {useImages} from "../../../../hooks/images";
import axios from "axios";
import {apiLink} from "../../../../hooks/apiLink";
import {IBannerInfo} from "../../../../models";
import ReactHtmlParser from "html-react-parser";

interface IBannerProps {

}

export const Banner: React.FC<IBannerProps> = () => {
    const {titleO} = useImages()

    const [bannerInfo, setBannerInfo] = useState<IBannerInfo>({
        button_text: '',
        button_url: '',
        text: '',
        title: '',
    })

    useEffect(() => {
        axios.get(apiLink('api/home/banner?language=en')).then(({data}) => {
            setBannerInfo(data.data)
        })
    }, [])

    return (
        <section className="main-block">
            <div className="main-block__inner">
                <div className="main-block__image main-block__image_video">
                    <video src={video} autoPlay loop muted/>
                </div>
                <div className="main-block__content content-main-block">
                    <div className="content-main-block__container container">
                        <div className="content-main-block__body">
                            <h1 className="content-main-block__title">
                                {
                                    ReactHtmlParser(bannerInfo.title.replace('o', ` <span><img src=${titleO} alt="o"/></span> `))
                                }
                            </h1>
                            <div className="content-main-block__subtitle">
                                {ReactHtmlParser(bannerInfo.text)}
                            </div>
                            <a href={bannerInfo.button_url} className="content-main-block__btn btn btn_medium">
                                <span>
                                    {bannerInfo.button_text}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
