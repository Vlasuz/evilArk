import React, {useEffect, useRef, useState} from 'react'
import {useImages} from "../../../../hooks/images";
import {Translate} from "../../../../components/translate/Translate";
import axios from "axios";
import {apiLink} from "../../../../hooks/apiLink";
import {useSelector} from "react-redux";
import ReactHtmlParser from "html-react-parser";

interface IFaqProps {

}

export const Faq:React.FC<IFaqProps> = () => {
    const {question} = useImages()

    const [faqContent, setFaqContent] = useState<any>({})
    const lang = useSelector((state: any) => state.toolkit.language)

    useEffect(() => {
        axios.get(apiLink("api/home/FAQs?language="+lang)).then(({data}) => setFaqContent(data.data))
    }, [lang])

    console.log(faqContent)

    return (
        <section className="faq" data-aos="fade" data-aos-duration="750" data-aos-offset="200" id="faq">
            <div className="faq__container container">
                <div className="faq__body">
                    <div className="faq__label label">
                        {ReactHtmlParser(faqContent?.title ?? "")}
                    </div>
                    <h3 className="faq__title title-h3">
                        {ReactHtmlParser(faqContent?.sub_title ?? "")}
                    </h3>
                    <div className="faq__subtitle">
                        {ReactHtmlParser(faqContent?.text ?? "")}
                    </div>
                    <div className="faq__btn-block">
                        <a href={faqContent?.button_url} target={"_blank"} className="faq__btn btn btn_big">
                            <img src={question} alt="question"/>
                            <span>
                                {ReactHtmlParser(faqContent?.button_text ?? "")}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
