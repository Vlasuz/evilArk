import React, {useEffect, useState} from 'react'
import {useImages} from "../../../../../hooks/images";
import {apiLink} from "../../../../../hooks/apiLink";
import {ICluster} from "../../../../../models";

interface IServersItemProps {
    image: string
    title: string
    clusters: ICluster[]
}

export const ServersItem: React.FC<IServersItemProps> = ({image, title, clusters}) => {

    const {arrowWhite, servers_image_link, placeholder} = useImages()
    const [isActive, setIsActive] = useState(false)

    console.log(image)
    return (
        <div className="servidores__column">
            <div className="servidores__item item-servidores">
                <div className="item-servidores__body">
                    <div className="item-servidores__image">
                        <img src={image ? apiLink(image) : placeholder} alt="4 MAN Cluster"/>
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
                            {
                                clusters.map((cluster: ICluster) =>
                                    <a href={cluster.url} key={cluster.id} className="item-servidores__link">
                                        <img src={cluster.image ? apiLink(`${cluster.image}`) : placeholder} alt=""/>
                                        <span>{cluster.url}</span>
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
