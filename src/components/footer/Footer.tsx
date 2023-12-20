import React, {useEffect} from 'react'
import {useImages} from "../../hooks/images";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {IGeneralInfo} from "../../models";
import {apiLink} from "../../hooks/apiLink";
import logo from './../../assets/img/logo.svg'
import axios from "axios";
import {FooterStyled} from "./Footer.styled";

interface IFooterProps {

}

export const Footer: React.FC<IFooterProps> = () => {

    const generalInfo: IGeneralInfo = useSelector((state: any) => state.toolkit.generalInfo)

    return (
        <FooterStyled className="footer">
            <div className="footer__container container">
                <div className="footer__body">
                    <div className="footer__row">
                        <NavLink to={'/'} className="footer__logo logo">
                            <img src={generalInfo?.footer_logo ? generalInfo?.footer_logo : logo} alt="logo"/>
                        </NavLink>
                        <div className="footer__copyright">
                            {generalInfo?.copyright}
                        </div>
                        <div className="footer__socials socials-footer">
                            <div className="socials-footer__column">
                                <div className="socials-footer__item">
                                    <a href={generalInfo?.discord_url} className="socials-footer__icon">
                                        <svg className="socials-footer__icon_face">
                                            <use xlinkHref="#face"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-footer__item">
                                    <a href={"mailto:"+generalInfo?.email_url} className="socials-footer__icon">
                                        <svg className="socials-footer__icon_email">
                                            <use xlinkHref="#email"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="socials-footer__column">
                                <div className="socials-footer__item">
                                    <a href={generalInfo?.twitter_url} className="socials-footer__icon">
                                        <svg className="socials-footer__icon_twitter">
                                            <use xlinkHref="#twitter"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-footer__item">
                                    <a href={generalInfo?.facebook_url} className="socials-footer__icon">
                                        <svg className="socials-footer__icon_facebook">
                                            <use xlinkHref="#facebook"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-footer__item">
                                    <a href={generalInfo?.instagram_url} className="socials-footer__icon">
                                        <svg className="socials-footer__icon_instagram">
                                            <use xlinkHref="#instagram"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <NavLink to={"/docs/privacy_policy"}>
                            Privacy policy
                        </NavLink>
                        <NavLink to={"/docs/public_offer"}>
                            Public offer
                        </NavLink>
                        <NavLink to={"/docs/return_policy"}>
                            Return policy
                        </NavLink>
                    </div>
                </div>
            </div>
        </FooterStyled>
    )
}
