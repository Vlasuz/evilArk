import React, { useEffect } from 'react'
import {useImages} from "../../../../hooks/images";

interface IContactsProps {

}

export const Contacts:React.FC<IContactsProps> = () => {
    const {contactsEmail, contactsFace} = useImages()

    return (
        <section className="contacto" data-aos="fade" data-aos-duration="750" data-aos-offset="200" id="contacto">
            <div className="contacto__container container">
                <div className="contacto__body">
                    <div className="contacto__row">
                        <div className="contacto__content">
                            <h3 className="contacto__title title-h3">Contacto</h3>
                            <div className="contacto__subtitle">
                                Contacta con nosotros para cualquier tipo de problema, consulta o mejora del
                                servidor, siempre te contestaremos en menos de 2 horas dentro del horario laboral
                            </div>
                        </div>
                        <div className="contacto__btns">
                            <a href="" className="contacto__btn btn btn_big btn_white">
                                <img src={contactsEmail} alt="email"/>
                                <span>Unete<br /> a discord</span>
                            </a>
                            <a href="" className="contacto__btn btn btn_big">
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
