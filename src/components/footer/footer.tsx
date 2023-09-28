import React, {useEffect} from 'react'
import {useImages} from "../../hooks/images";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {IGeneralInfo} from "../../models";
import {apiLink} from "../../hooks/apiLink";

interface IFooterProps {

}

export const Footer: React.FC<IFooterProps> = () => {

    const generalInfo: IGeneralInfo = useSelector((state: any) => state.toolkit.generalInfo)

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__body">
                    <div className="footer__row">
                        <NavLink to={'/'} className="footer__logo logo">
                            <img src={apiLink(generalInfo.footer_icon)} alt="logo"/>
                        </NavLink>
                        <div className="footer__copyright">
                            {generalInfo.description}
                        </div>
                        <div className="footer__socials socials-footer">
                            <div className="socials-footer__column">
                                <div className="socials-footer__item">
                                    <a href={generalInfo.discord_url} className="socials-footer__icon">
                                        <svg className="socials-footer__icon_face">
                                            <use xlinkHref="#face"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-footer__item">
                                    <a href={"mailto:"+generalInfo.email_url} className="socials-footer__icon">
                                        <svg className="socials-footer__icon_email">
                                            <use xlinkHref="#email"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="socials-footer__column">
                                <div className="socials-footer__item">
                                    <a href={generalInfo.twitter_url} className="socials-footer__icon">
                                        <svg className="socials-footer__icon_twitter">
                                            <use xlinkHref="#twitter"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-footer__item">
                                    <a href={generalInfo.facebook_url} className="socials-footer__icon">
                                        <svg className="socials-footer__icon_facebook">
                                            <use xlinkHref="#facebook"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-footer__item">
                                    <a href={generalInfo.instagram_url} className="socials-footer__icon">
                                        <svg className="socials-footer__icon_instagram">
                                            <use xlinkHref="#instagram"/>
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
