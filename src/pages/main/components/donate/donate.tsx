import React, { useEffect } from 'react'
import {useImages} from "../../../../hooks/images";

interface IDonateProps {

}

export const Donate:React.FC<IDonateProps> = () => {
    const {paypal, bizum, paysafe, donateImage} = useImages()

    return (
        <section className="donaciones" data-aos="fade" data-aos-duration="750" data-aos-offset="200" id="donaciones">
            <div className="donaciones__container container">
                <div className="donaciones__body">
                    <div className="donaciones__label label">DONACIONES</div>
                    <h3 className="donaciones__title title-h3">Métodos de pago aceptados</h3>
                    <div className="donaciones__sibtitle">
                        Los métodos de pago aceptados para las donaciones son Paypal, Bizum y Paysafecard, debes
                        escribirnos un ticket para reclamar tu recompensa
                    </div>
                    <div className="donaciones__row">
                        <div className="donaciones__column">
                            <div className="donaciones__item item-donaciones">
                                <a href="" className="item-donaciones__btn">
                                    <img src={paypal} alt="paypal"/>
                                </a>
                            </div>
                        </div>
                        <div className="donaciones__column">
                            <div className="donaciones__item item-donaciones">
                                <a href="" className="item-donaciones__btn">
                                    <img src={bizum} alt="bizum"/>
                                </a>
                            </div>
                        </div>
                        <div className="donaciones__column">
                            <div className="donaciones__item item-donaciones">
                                <a href="" className="item-donaciones__btn">
                                    <img src={paysafe} alt="paysafe"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="" className="donaciones__link link-donaciones">
                        <div className="link-donaciones__image">
                            <img src={donateImage} alt="Reglas del proyecto"/>
                        </div>
                        <span className="link-donaciones__text">Reglas del proyecto</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
