import React, { useEffect } from 'react'
import axios from "axios";
import {apiLink} from "../hooks/apiLink";
import { setDonateInfo } from '../redux/toolkitSlice';

interface IDonateInfoProps {
    dispatch: any
}

export const donateInfo = ({dispatch}: IDonateInfoProps) => {

    axios.get(apiLink("api/donate-info")).then(({data}) => {
        dispatch(setDonateInfo(data.data))
    }).catch(er => {
        console.log(er)
    })
}
