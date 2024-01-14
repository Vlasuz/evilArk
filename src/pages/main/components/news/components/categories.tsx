import React, { useEffect, useState } from 'react'
import {INews, IServer} from "../../../../../models";
import {useSelector} from "react-redux";
import getCookies from "../../../../../functions/getCookie";
import {setCategory} from "../../../../../redux/toolkitSlice";
import {Translate} from "../../../../../components/translate/Translate";

interface ICategoriesProps {
    setServer: any
    server?: IServer
    setIsStartCat: any
    isStartCat: boolean
}

export const Categories:React.FC<ICategoriesProps> = ({setServer, server, setIsStartCat, isStartCat}) => {

    const servers: IServer[] = useSelector((state: any) => state.toolkit.servers)
    const category = useSelector((state: any) => state.toolkit.category)
    const news: INews[] = useSelector((state: any) => state.toolkit.news)

    useEffect(() => {

        const isCurrentServerWithNews = news?.some(item => item.server?.id === category?.id)
        const getServersWithNews = servers?.filter((item: IServer) => news?.some(item2 => item2.server?.id === item?.id))
        setServer(isCurrentServerWithNews ? category : getServersWithNews[0])

    }, [category])

    const handleChooseServer = (item: any) => {
        setServer(item)
        setIsStartCat(false)
    }

    return (
        <div className="filter-top-cards-categories__items">


            <div onClick={_ => setIsStartCat(true)} className={"filter-top-cards-categories__item" + (isStartCat ? " active" : "")}>
                <div className="filter-top-cards-categories__link filter-top-cards-categories__orange">
                    <Translate>coming_start</Translate>
                </div>
            </div>
            {
                servers
                    ?.filter((item: IServer) => news?.some(item2 => item2.server?.id === item?.id))
                    ?.map((item: IServer) =>
                    <div key={item?.id} onClick={_ => handleChooseServer(item)} className={"filter-top-cards-categories__item" + (item?.id === server?.id && !isStartCat ? " active" : "")}>
                        <div className="filter-top-cards-categories__link filter-top-cards-categories__orange">
                            {item?.name}
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}
