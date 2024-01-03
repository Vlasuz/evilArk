import React, {useContext, useEffect, useState} from 'react'
import {useImages} from "../../../../hooks/images";
import {ServersItem} from "./components/serversItem";
import axios from "axios";
import {apiLink} from "../../../../hooks/apiLink";
import {IServer} from "../../../../models";
import {useSelector} from "react-redux";
import ReactHtmlParser from "html-react-parser";
import {isOpenPopupContext} from "../../Main";

interface IServersProps {

}

export const Servers:React.FC<IServersProps> = () => {

    const [servers, setServers] = useState<IServer[]>([])
    const [serversText, setServersText] = useState<any>({})

    const lang = useSelector((state: any) => state.toolkit.language)

    useEffect(() => {
        axios.get(apiLink('api/servers')).then(({data}) => setServers(data.data))
    }, [])

    useEffect(() => {
        axios.get(apiLink('api/home/servers?language='+lang)).then(({data}) => setServersText(data.data))
    }, [lang])

    const setIsOpenPopup: any = useContext(isOpenPopupContext)

    const handleReadNews = (id: string | number) => {

        return axios.get(apiLink(`api/servers/${id}`)).then(({data}) => {
            console.log(data)

            setIsOpenPopup({
                isOpen: true,
                news: data.data
            })

        })
    }

    return (
        <section id={"servers"} className="servidores" data-aos="fade" data-aos-duration="750" data-aos-offset="200">
            <div className="servidores__container container">
                <div className="servidores__body">
                    <div className="servidores__label label">
                        {serversText?.title}
                    </div>
                    <h3 className="servidores__title title-h3 title-h3_dark">
                        <span>
                            {serversText?.sub_title}
                        </span>
                        <span>
                            {serversText?.main_title}
                        </span>
                    </h3>
                    <div className="servidores__subtitle">
                        {ReactHtmlParser(serversText?.text ?? "")}
                    </div>
                    <div className="servidores__row">

                        {
                            servers
                                ?.filter(item => item.is_active)
                                ?.map((server: IServer) => <ServersItem handleReadNews={handleReadNews} key={server.id} data={server} />)
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
