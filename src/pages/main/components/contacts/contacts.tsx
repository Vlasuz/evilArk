import React, { useEffect, useState } from 'react'
import {useImages} from "../../../../hooks/images";
import {IGeneralInfo} from "../../../../models";
import {useSelector} from "react-redux";
import axios from "axios";
import {apiLink} from "../../../../hooks/apiLink";
import {Translate} from "../../../../components/translate/Translate";
import ReactHtmlParser from "html-react-parser";

interface IContactsProps {

}

export const Contacts:React.FC<IContactsProps> = () => {
    const {contactsEmail, contactsFace} = useImages()

    const [contactInfo, setContactInfo] = useState<any>({})

    const generalInfo: IGeneralInfo = useSelector((state: any) => state.toolkit.generalInfo)
    const lang = useSelector((state: any) => state.toolkit.language)

    useEffect(() => {
        axios.get(apiLink("api/home/contact-us?language="+lang)).then(({data}) => {
            setContactInfo(data.data)
        }).catch(er => console.log(er))
    }, [lang])

    return (
        <section className="contacto" data-aos="fade" data-aos-duration="750" data-aos-offset="200" id="contacts">
            <div className="contacto__container container">
                <div className="contacto__body">
                    <div className="contacto__row">
                        <div className="contacto__content">
                            <h3 className="contacto__title title-h3">
                                {ReactHtmlParser(contactInfo?.title ?? "")}
                            </h3>
                            <div className="contacto__subtitle">
                                {ReactHtmlParser(contactInfo?.text ?? "")}
                            </div>
                        </div>
                        <div className="contacto__btns">
                            {generalInfo?.email_url && <a href={"mailto:" + generalInfo?.email_url}
                                className="contacto__btn btn btn_big btn_white">
                                <img src={contactsEmail} alt="email"/>
                                <span>
                                    <Translate>home_use_email</Translate>
                                </span>
                            </a>}
                            {generalInfo?.discord_url && <a href={generalInfo?.discord_url} className="contacto__btn btn btn_big">
                                <img src={contactsFace} alt="face"/>
                                <span>
                                    <Translate>home_use_discord</Translate>
                                </span>
                            </a>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
