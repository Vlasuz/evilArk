import React, { useEffect } from 'react'
import axios from "axios";
import {apiLink} from "../hooks/apiLink";
import { setGeneralInfo } from '../redux/toolkitSlice';

interface IGeneralInfoProps {
    dispatch: any
}

export const generalInfo = ({dispatch}: IGeneralInfoProps) => {

    axios.get(apiLink('api/general-info')).then(({data}) => {
        dispatch(setGeneralInfo(data.data))
    }).catch(er => console.log(er))
}
