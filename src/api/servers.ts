import {useEffect, useState} from "react";
import axios from "axios";
import {apiLink} from "../hooks/apiLink";
import {IServer} from "../models";
import {setCategory, setServers} from "../redux/toolkitSlice";
import getCookies from "../functions/getCookie";

interface serversProps {
    dispatch: any
}

export const servers = ({dispatch}: serversProps) => {

    axios.get(apiLink('api/servers')).then(({data}) => {
        const selectedClusterID: any = getCookies("cluster")
        const axiosData: IServer[] = data.data
        dispatch(setServers(axiosData))
        dispatch(setCategory(selectedClusterID ? axiosData.filter((item: any) => String(item.id) === String(selectedClusterID))[0] : axiosData?.filter(item => item.is_active)[0]))
        if(window.location.href.includes("?cluster")) {
            const clusterId = window.location.href.slice(window.location.href.indexOf("?cluster") + 9, window.location.href.indexOf("&") > 0 ? window.location.href.indexOf("&") : undefined)
            dispatch(setCategory(axiosData.filter(item => item.is_active)?.filter((item: any) => String(item.id) === String(clusterId))[0]))
        }

    })

}