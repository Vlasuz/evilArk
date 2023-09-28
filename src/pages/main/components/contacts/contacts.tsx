import React, { useEffect, useState } from 'react'
import {useImages} from "../../../../hooks/images";
import {IGeneralInfo} from "../../../../models";
import {useSelector} from "react-redux";
import axios from "axios";
import {apiLink} from "../../../../hooks/apiLink";

interface IContactsProps {

}

export const Contacts:React.FC<IContactsProps> = () => {
    const {contactsEmail, contactsFace} = useImages()

    const [contactInfo, setContactInfo] = useState<any>({})

    const generalInfo: IGeneralInfo = useSelector((state: any) => state.toolkit.generalInfo)

    useEffect(() => {
        axios.get(apiLink("api/home/contact-us?language=en")).then(({data}) => {
            console.log(data.data)
            setContactInfo(data.data)
        }).catch(er => {
            console.log(er)
        })
    }, [])

    return (
        <section className="contacto" data-aos="fade" data-aos-duration="750" data-aos-offset="200" id="contacto">
            <div className="contacto__container container">
                <div className="contacto__body">
                    <div className="contacto__row">
                        <div className="contacto__content">
                            <h3 className="contacto__title title-h3">
                                {contactInfo.title}
                            </h3>
                            <div className="contacto__subtitle">
                                {contactInfo.text}
                            </div>
                        </div>
                        <div className="contacto__btns">
                            <a href={"mailto:"+generalInfo.email_url} className="contacto__btn btn btn_big btn_white">
                                <img src={contactsEmail} alt="email"/>
                                <span>Unete<br /> a discord</span>
                            </a>
                            <a href={generalInfo.discord_url} className="contacto__btn btn btn_big">
                                <img src={contactsFace} alt="face"/>
                                <span>Mandanos<br /> un correo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
