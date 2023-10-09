import React, { useEffect, useState } from 'react'
import {useImages} from "../../../../hooks/images";
import {ServersItem} from "./components/serversItem";
import axios from "axios";
import {apiLink} from "../../../../hooks/apiLink";
import {IServers} from "../../../../models";

interface IServersProps {

}

export const Servers:React.FC<IServersProps> = () => {

    const [servers, setServers] = useState<IServers[]>([])

    useEffect(() => {
        axios.get(apiLink('api/servers')).then(({data}) => {
            setServers(data.data)
            console.log(data.data)
        })
    }, [])

    return (
        <section className="servidores" data-aos="fade-left" data-aos-duration="750" data-aos-offset="200">
            <div className="servidores__container container">
                <div className="servidores__body">
                    <div className="servidores__label label">SERVIDORES</div>
                    <h3 className="servidores__title title-h3 title-h3_dark">
                        <span>Servidores de Ark Survival</span>
                        <span>Evolved Españoles e Ingleses</span>
                        <span>para PC</span>
                    </h3>
                    <div className="servidores__subtitle">Listado de servidores disponibles en la comunidad.</div>
                    <div className="servidores__row">

                        {
                            servers.map((server: IServers) => <ServersItem key={server.id} data={server} />)
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
