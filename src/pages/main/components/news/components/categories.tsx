import React, { useEffect, useState } from 'react'
import {INews, IServer} from "../../../../../models";
import {useSelector} from "react-redux";
import getCookies from "../../../../../functions/getCookie";
import {setCategory} from "../../../../../redux/toolkitSlice";

interface ICategoriesProps {
    setServer: any
    server?: IServer
    setIsStartCat: any
    isStartCat: boolean
}

export const Categories:React.FC<ICategoriesProps> = ({setServer, server, setIsStartCat, isStartCat}) => {

    const servers: IServer[] = useSelector((state: any) => state.toolkit.servers)
    const news: INews[] = useSelector((state: any) => state.toolkit.news)

    useEffect(() => {
        const selectedClusterID: any = getCookies("cluster")
        setServer(selectedClusterID ? servers.filter((item: any) => String(item.id) === String(selectedClusterID))[0] : servers[0])
    }, [servers])

    return (
        <div className="filter-top-cards-categories__items">


            <div onClick={_ => setIsStartCat(true)} className={"filter-top-cards-categories__item" + (isStartCat ? " active" : "")}>
                <div className="filter-top-cards-categories__link filter-top-cards-categories__orange">
                    Ближайший страт
                </div>
            </div>
            {
                servers.map((item: IServer) => news?.some(item2 => item2.server?.id === item?.id) &&
                    <div key={item?.id} onClick={_ => {
                        setServer(item)
                        setIsStartCat(false)
                    }} className={"filter-top-cards-categories__item" + (item?.id === server?.id && !isStartCat ? " active" : "")}>
                        <div className="filter-top-cards-categories__link filter-top-cards-categories__orange">
                            {item?.name}
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}
