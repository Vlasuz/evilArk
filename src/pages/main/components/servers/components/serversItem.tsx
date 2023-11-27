import React, {useEffect, useState} from 'react'
import {useImages} from "../../../../../hooks/images";
import {apiLink} from "../../../../../hooks/apiLink";
import {ICluster, IServers} from "../../../../../models";
import ReactHtmlParser from "html-react-parser";
import {ServersServer} from "./serversServer";

interface IServersItemProps {
    data: IServers
}

export const ServersItem: React.FC<IServersItemProps> = ({data}) => {

    const {arrowWhite, placeholder} = useImages()
    // const [isActive, setIsActive] = useState(false)

    return (
        <div className="servidores__column">
            <div className="servidores__item item-servidores">
                <div className="item-servidores__body">
                    <div className="item-servidores__image">
                        <img src={data.image ?? placeholder} alt="4 MAN Cluster"/>
                    </div>
                    <div className="item-servidores__content">
                        {/*+ (isActive ? " active" : "")} onClick={_ => setIsActive(prev => !prev)}*/}
                        <div className={"item-servidores__info"}>
                            <div className="item-servidores__name">
                                {data.name}
                            </div>
                            <div className="item-servidores__btn">
                                <img src={arrowWhite} alt="arrow"/>
                            </div>
                        </div>
                        <div className="item-servidores__links">
                            {
                                data.clusters.map((server: ICluster) =>
                                    <ServersServer key={server.id} server={server} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
