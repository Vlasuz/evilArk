import React, {useEffect, useState} from 'react'
import {useImages} from "../../../../../hooks/images";

interface IServersItemProps {
    image: string
    title: string
}

export const ServersItem: React.FC<IServersItemProps> = ({image, title}) => {

    const {arrowWhite, servers_image_link} = useImages()
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="servidores__column">
            <div className="servidores__item item-servidores">
                <div className="item-servidores__body">
                    <div className="item-servidores__image">
                        <img src={image} alt="4 MAN Cluster"/>
                    </div>
                    <div className="item-servidores__content">
                        <div className={"item-servidores__info" + (isActive ? " active" : "")} onClick={_ => setIsActive(prev => !prev)}>
                            <div className="item-servidores__name">
                                {title}
                            </div>
                            <div className="item-servidores__btn">
                                <img src={arrowWhite} alt="arrow"/>
                            </div>
                        </div>
                        <div className="item-servidores__links" style={{display: isActive ? 'block' : 'none'}}>
                            <a href="" className="item-servidores__link">
                                <img src={servers_image_link} alt=""/>
                                <span>https://winitpro.ru/index.php/2021/03/03/ispolzovanie-simlink</span>
                            </a>
                            <a href="" className="item-servidores__link">
                                <img src={servers_image_link} alt=""/>
                                <span>https://winitpro.ru/index.php/2021/03/03/ispolzovanie-simlink</span>
                            </a>
                            <a href="" className="item-servidores__link">
                                <img src={servers_image_link} alt=""/>
                                <span>https://winitpro.ru/index.php/2021/03/03/ispolzovanie-simlink</span>
                            </a>
                            <a href="" className="item-servidores__link">
                                <img src={servers_image_link} alt=""/>
                                <span>https://winitpro.ru/index.php/2021/03/03/ispolzovanie-simlink</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
