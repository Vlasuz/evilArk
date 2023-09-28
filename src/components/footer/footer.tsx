import React, {useEffect} from 'react'
import {useImages} from "../../hooks/images";
import {NavLink} from "react-router-dom";

interface IFooterProps {

}

export const Footer: React.FC<IFooterProps> = () => {
    const {logo} = useImages()

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__body">
                    <div className="footer__row">
                        <NavLink to={'/'} className="footer__logo logo">
                            <img src={logo} alt="logo"/>
                        </NavLink>
                        <div className="footer__copyright">©Reservados todos los derechos</div>
                        <div className="footer__socials socials-footer">
                            <div className="socials-footer__column">
                                <div className="socials-footer__item">
                                    <a href="" className="socials-footer__icon">
                                        <svg className="socials-footer__icon_face">
                                            <use xlinkHref="#face"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-footer__item">
                                    <a href="" className="socials-footer__icon">
                                        <svg className="socials-footer__icon_email">
                                            <use xlinkHref="#email"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="socials-footer__column">
                                <div className="socials-footer__item">
                                    <a href="" className="socials-footer__icon">
                                        <svg className="socials-footer__icon_twitter">
                                            <use xlinkHref="#twitter"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-footer__item">
                                    <a href="" className="socials-footer__icon">
                                        <svg className="socials-footer__icon_facebook">
                                            <use xlinkHref="#facebook">

                                            </use>
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-footer__item">
                                    <a href="" className="socials-footer__icon">
                                        <svg className="socials-footer__icon_instagram">
                                            <use xlinkHref="#instagram">

                                            </use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
