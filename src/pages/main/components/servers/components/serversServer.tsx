import React, {useEffect, useState} from 'react'
import ReactHtmlParser from "html-react-parser";
import {ICluster} from "../../../../../models";
import {useImages} from "../../../../../hooks/images";
import {toast} from "react-toastify";

interface IServersServerProps {
    server: ICluster
}

export const ServersServer:React.FC<IServersServerProps> = ({server}) => {

    const {placeholder} = useImages()

    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        toast.success('Вы успешно скопировали сервер')
        navigator.clipboard.writeText(`${server.name}`).then(r => setIsCopied(true))

        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }

    return (
        <div className={"server_ip"}>
            <a href={server.url} target={"_blank"} className="item-servidores__link">
                <img src={server.image ?? placeholder} alt=""/>
                <span>{
                    ReactHtmlParser(server.name ?? "")
                }</span>
            </a>
            <button onClick={handleCopy}>
                <svg><use xlinkHref={isCopied ? "#check" : "#copy"}/></svg>
            </button>
        </div>
    )
}
