import React, { useEffect } from 'react'
import {useImages} from "../../../../hooks/images";

interface IFaqProps {

}

export const Faq:React.FC<IFaqProps> = () => {
    const {question} = useImages()

    return (
        <section className="faq" data-aos="fade-left" data-aos-duration="750" data-aos-offset="200" id="faq">
            <div className="faq__container container">
                <div className="faq__body">
                    <div className="faq__label label">F.A.Q</div>
                    <h3 className="faq__title title-h3">Preguntas Frecuentes</h3>
                    <div className="faq__subtitle">
                        Desde aquí contestaremos algunas preguntas que suelen hacernos los
                        jugadores de South Division.
                    </div>
                    <div className="faq__btn-block">
                        <a href="" className="faq__btn btn btn_big">
                            <img src={question} alt="question"/>
                            <span>See questions<br /> and answers</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}