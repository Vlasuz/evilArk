import {useLocation, useNavigate} from "react-router-dom";
import {apiLink} from "./apiLink";
import {useEffect, useState} from "react";
import axios from "axios";
import setCookie from "../functions/setCookie";
import getCookies from "../functions/getCookie";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/toolkitSlice";

export const useSteamLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [token, setToken] = useState('')

    const auth_params = {
        'openid.ns': 'http://specs.openid.net/auth/2.0',
        'openid.mode': 'checkid_setup',
        'openid.return_to': window.location.origin + location.pathname,
        'openid.realm': window.location.origin + location.pathname,
        'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
        'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select'
    }
    const steamData = window.location.href.replace(window.location.origin, '').replace(location.pathname, '')
    const urlAxios = apiLink(`api/auth/steam/handle${steamData.slice(steamData.indexOf("?"))}`);
    const urlForAxios = steamData.includes('openid')

    useEffect(() => {

        if (urlForAxios) {
            axios.post(urlAxios).then(({data}) => {
                setToken(data.data.access_token)
                setCookie('access_token', data.data.access_token)
                dispatch(setUser(data.data))
                navigate(steamData.slice(0, steamData.indexOf("?")))
            }).catch(er => {console.log('LOGIN', er)})
        } else if (getCookies('access_token')) {
            axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('access_token')}`
            axios.get(apiLink(`api/users/auth-user`)).then(({data}) => {
                console.log(data)
                dispatch(setUser(data.data))
            }).catch(er => {console.log('erLogs', er)})
        }

    }, [])

    useEffect(() => {
        if (token.length) {
            setCookie('access_token', token)
        }
    }, [token])

    return {auth_params}
}