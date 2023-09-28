import React, { useEffect } from 'react'
import {useImages} from "../../../../hooks/images";
import {ServersItem} from "./components/serversItem";

interface IServersProps {

}

export const Servers:React.FC<IServersProps> = () => {

    const {servers_2, servers_3, servers_4, servers_5, servers_6} = useImages()

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
                        <ServersItem image={servers_6} title={'4 Man Cluster'} />
                        <ServersItem image={servers_2} title={'2 Man Cluster'} />
                        <ServersItem image={servers_3} title={'PvE Classic'} />
                        <ServersItem image={servers_4} title={'PvE Primal Fear'} />
                        <ServersItem image={servers_5} title={'ARK:ASA'} />
                    </div>
                </div>
            </div>
        </section>
    )
}
