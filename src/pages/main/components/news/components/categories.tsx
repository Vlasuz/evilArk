import React, { useEffect, useState } from 'react'
import {INews, IServers} from "../../../../../models";
import {useSelector} from "react-redux";
import getCookies from "../../../../../functions/getCookie";
import {setCategory} from "../../../../../redux/toolkitSlice";

interface ICategoriesProps {
    setServer: any
    server?: IServers
}

export const Categories:React.FC<ICategoriesProps> = ({setServer, server}) => {

    const servers: IServers[] = useSelector((state: any) => state.toolkit.servers)
    const news: INews[] = useSelector((state: any) => state.toolkit.news)

    useEffect(() => {
        const selectedClusterID: any = getCookies("cluster")
        setServer(selectedClusterID ? servers.filter((item: any) => String(item.id) === String(selectedClusterID))[0] : servers[0])
    }, [servers])

    console.log(servers)

    return (
        <div className="filter-top-cards-categories__items">

            {
                servers.map((item: IServers) =>
                    <div key={item?.id} onClick={_ => setServer(item)} style={{display: news?.some(item2 => item2.server.id === item?.id) ? "block" : "none"}} className={"filter-top-cards-categories__item" + (item?.id === server?.id ? " active" : "")}>
                        <div className="filter-top-cards-categories__link filter-top-cards-categories__orange">
                            {item?.name}
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}
