import {useEffect, useState} from "react";
import axios from "axios";
import {apiLink} from "../hooks/apiLink";
import {IServers} from "../models";

export const useServers = () => {

    const [servers, setServers] = useState<IServers[]>()

    useEffect(() => {
        axios.get(apiLink('api/servers')).then(({data}) => {
            setServers(data.data)
        })
    }, [])

    return {servers}
}