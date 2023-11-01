import {useEffect, useState} from "react";
import axios from "axios";
import {apiLink} from "../hooks/apiLink";
import {IServers} from "../models";
import {setCategory, setServers} from "../redux/toolkitSlice";

interface serversProps {
    dispatch: any
}

export const servers = ({dispatch}: serversProps) => {

    axios.get(apiLink('api/servers')).then(({data}) => {
        dispatch(setServers(data.data))
        dispatch(setCategory(data.data[0]))
    })

}