import React, {useEffect, useState} from 'react'
import {IServer} from "../../../models";
import {useSelector} from "react-redux";
import {useImages} from "../../../hooks/images";

interface ITopUpServersProps {
    setServer: any
}

export const TopUpServers: React.FC<ITopUpServersProps> = ({setServer}) => {
    const {placeholder} = useImages()

    const servers: IServer[] = useSelector((state: any) => state.toolkit.servers)
    const category: IServer = useSelector((state: any) => state.toolkit.category)
    const [selectedServer, setSelectedServer] = useState<IServer>(servers[0] ?? category)

    useEffect(() => {
        setServer(selectedServer)
        setSelectedServer(category ?? servers[0])
    }, [servers])

    const handleChooseServer = (item: any) => {
        setSelectedServer(item)
        setServer(item)
    }

    return (
        <div className="servers">
            {
                servers?.filter(item => item.is_active)?.map((item: IServer) =>
                    <div onClick={_ => handleChooseServer(item)} key={item.id}
                         className={"select-category__column" + (selectedServer?.name === item?.name ? " _active" : "")}>
                        <div className="select-category__item item-select-category">
                            <div className="item-select-category__image-block">
                                <div className="item-select-category__image">
                                    <img src={item.image.length ? item.image : placeholder}/>
                                </div>
                                <div className="item-select-category__label">
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
