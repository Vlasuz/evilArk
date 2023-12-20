import React, {useContext, useEffect, useRef, useState} from 'react'
import {Translate} from "../translate/Translate";
import {IServer} from "../../models";
import {TopUpStyled} from "../topUp/TopUp.styled";
import { useSelector } from 'react-redux';
import {useImages} from "../../hooks/images";
import {PopupContext} from "../../context/topUpContext";
import {toast} from "react-toastify";
import {PopupStyled} from "./Popup.styled";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import getCookies from "../../functions/getCookie";

interface IPopupProps {
    isOpen: boolean
}

export const Popup: React.FC<IPopupProps> = ({isOpen}) => {


    // const {placeholder} = useImages()
    // const [server, setServer] = useState<IServer | any>({})
    // const servers: IServer[] = useSelector((state: any) => state.toolkit.servers)

    const popupBlock: any = useRef(null)
    const isPopupOpen: any = useContext(PopupContext)
    const handleCloseModal = (e: any) => {
        if(e.target.closest('.popup__content')) return;
        isPopupOpen(false)
    }

    useEffect(() => {
        if(!isOpen) return;
        setIsCopied(false)

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('access_token')}`
        axios.post(apiLink("api/users/create-unique-id")).then(({data}) => {
            if(!data.data.success) {
                toast.error(data.data.message)
            }

            setCommandString(data.data.message)
        })

    }, [isOpen])

    const [isCopied, setIsCopied] = useState<boolean>(false)
    const [commandString, setCommandString] = useState<string>('')
    const handleCopy = () => {
        toast.success('Вы успешно скопировали команду')
        navigator.clipboard.writeText(commandString).then(r => setIsCopied(true))
    }

    return (
        <TopUpStyled ref={popupBlock} className={"popup popup-top-up" + (isOpen ? " open" : "")}>
            <PopupStyled className="popup__body" onClick={handleCloseModal}>
                <div className="popup__content" onClick={handleCloseModal}>
                    <div className="popup__title">
                        Code for game
                    </div>

                    {/*<div className="servers">*/}
                    {/*    {*/}
                    {/*        servers?.filter(item => item.is_active)?.map((item: IServer) =>*/}
                    {/*            <div onClick={_ => setServer(item)} key={item.id}*/}
                    {/*                 className={"select-category__column" + (server?.name === item?.name ? " _active" : "")}>*/}
                    {/*                <div className="select-category__item item-select-category">*/}
                    {/*                    <div className="item-select-category__image-block">*/}
                    {/*                        <div className="item-select-category__image">*/}
                    {/*                            <img src={item.image.length ? item.image : placeholder}/>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="item-select-category__label">*/}
                    {/*                            {item.name}*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*</div>*/}

                    <div className="popup__inner inner-popup">
                        <p className={"papayment-method-inner-popup__title"}>Для синхронизации игрового аккаунта ASA с профилем сайта, скопируйте и вставьте команду ниже в игровой чат</p>
                        <div className="inner-popup__payment" onClick={handleCopy}>

                            {commandString}

                            <svg>
                                <use xlinkHref={isCopied ? "#check" : "#copy"}/>
                            </svg>

                        </div>
                        <div className="inner-popup__payment-method papayment-method-inner-popup">

                        </div>
                    </div>
                    <div className="popup__btn-block">
                        <button onClick={_ => isPopupOpen(false)} className="inner-popup__close btn btn_small">
                            <Translate>close</Translate>
                        </button>
                    </div>
                </div>
            </PopupStyled>
        </TopUpStyled>
    )
}
