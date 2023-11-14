import {useEffect, useState} from "react";
import axios from "axios";
import {apiLink} from "../hooks/apiLink";
import {IServers} from "../models";
import {setCategory, setServers} from "../redux/toolkitSlice";
import getCookies from "../functions/getCookie";

interface serversProps {
    dispatch: any
}

export const servers = ({dispatch}: serversProps) => {

    axios.get(apiLink('api/servers')).then(({data}) => {
        const selectedCluster: any = getCookies("cluster")
        dispatch(setServers(data.data))
        dispatch(setCategory(selectedCluster ? JSON.parse(selectedCluster) : data.data[0]))
    })

}