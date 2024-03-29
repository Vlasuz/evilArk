import React, {useEffect, useRef, useState} from 'react'
import {useImages} from "../../../../../hooks/images";
import {apiLink} from "../../../../../hooks/apiLink";
import {ICluster, IServer} from "../../../../../models";
import ReactHtmlParser from "html-react-parser";
import {ServersServer} from "./serversServer";
import {Translate} from "../../../../../components/translate/Translate";

interface IServersItemProps {
    data: IServer
    handleReadNews: any
}

export const ServersItem: React.FC<IServersItemProps> = ({data, handleReadNews}) => {

    const {arrowWhite, placeholder} = useImages()

    const [isClickToOpen, setIsClickToOpen] = useState(false)
    const [isShowServers, setIsShowServers] = useState(false)

    const clickToSettings = (id: string | number) => {
        setIsClickToOpen(true)

        handleReadNews(id).then((res: any) => {
            setIsClickToOpen(false)
        })
    }

    const handleShowServers = () => {
        setIsShowServers(prev => !prev)
    }

    const serverBlock: any = useRef(null)

    console.log(serverBlock.current?.clientHeight)

    return (
        <div className="servidores__column">
            <div className={`servidores__item item-servidores ${isShowServers && "servidores__item_active"}`}>
                <div className="item-servidores__body">
                    <div className="item-servidores__image">
                        <img src={data.image ?? placeholder} alt="4 MAN Cluster"/>
                    </div>
                    <div className="item-servidores__content">
                        <div className={"item-servidores__info"}>
                            <div className="item-servidores__name">
                                {data.name}
                            </div>

                            <div className={`view-settings ${isClickToOpen && "is-loading"}`} onClick={_ => !isClickToOpen && clickToSettings(data.id)}>
                                <svg height="512" viewBox="0 0 32 32" width="512"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <path
                                            d="m29.21 11.84a3.92 3.92 0 0 1 -3.09-5.3 1.84 1.84 0 0 0 -.55-2.07 14.75 14.75 0 0 0 -4.4-2.55 1.85 1.85 0 0 0 -2.09.58 3.91 3.91 0 0 1 -6.16 0 1.85 1.85 0 0 0 -2.09-.58 14.82 14.82 0 0 0 -4.1 2.3 1.86 1.86 0 0 0 -.58 2.13 3.9 3.9 0 0 1 -3.25 5.36 1.85 1.85 0 0 0 -1.62 1.49 14.14 14.14 0 0 0 -.28 2.8 14.32 14.32 0 0 0 .19 2.35 1.85 1.85 0 0 0 1.63 1.55 3.9 3.9 0 0 1 3.18 5.51 1.82 1.82 0 0 0 .51 2.18 14.86 14.86 0 0 0 4.36 2.51 2 2 0 0 0 .63.11 1.84 1.84 0 0 0 1.5-.78 3.87 3.87 0 0 1 3.2-1.68 3.92 3.92 0 0 1 3.14 1.58 1.84 1.84 0 0 0 2.16.61 15 15 0 0 0 4-2.39 1.85 1.85 0 0 0 .54-2.11 3.9 3.9 0 0 1 3.13-5.39 1.85 1.85 0 0 0 1.57-1.52 14.5 14.5 0 0 0 .26-2.53 14.35 14.35 0 0 0 -.25-2.67 1.83 1.83 0 0 0 -1.54-1.49zm-8.21 4.16a5 5 0 1 1 -5-5 5 5 0 0 1 5 5z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="item-servidores__btn" onClick={handleShowServers}>
                                <img src={arrowWhite} alt="arrow"/>
                            </div>
                        </div>
                        <div className="item-servidores__links" style={{height: isShowServers ? ((data?.clusters?.length ? data?.clusters?.length : 1) * serverBlock.current?.clientHeight) + "px" : "0px"}}>
                            {
                                data.clusters?.length ? data.clusters?.map((server: ICluster) =>
                                    <ServersServer key={server.id} serverBlock={serverBlock} server={server}/>
                                ) : <p>
                                    <Translate>servers_not_found</Translate>
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
