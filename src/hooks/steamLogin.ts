import {useLocation, useNavigate} from "react-router-dom";
import {apiLink} from "./apiLink";
import {useEffect} from "react";
import axios from "axios";
import setCookie from "../functions/setCookie";
import getCookies from "../functions/getCookie";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/toolkitSlice";

export const useSteamLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth_params = {
        'openid.ns': 'http://specs.openid.net/auth/2.0',
        'openid.mode': 'checkid_setup',
        'openid.return_to': (window.location.href.includes('localhost') ? 'http://localhost:3000' : 'https://vlasuz.github.io/evilArk') + location.pathname,
        'openid.realm': (window.location.href.includes('localhost') ? 'http://localhost:3000' : 'https://vlasuz.github.io/evilArk') + location.pathname,
        'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
        'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select'
    }
    const steamData = window.location.href.includes('localhost') ? window.location.href.replace('http://localhost:3000', '').replace(location.pathname, '') : window.location.href.replace('https://vlasuz.github.io/evilArk', '').replace(location.pathname, '')
    const urlAxios = apiLink(`api/auth/steam/handle${steamData.slice(steamData.indexOf("?"))}`);

    useEffect(() => {

        if (steamData.includes('openid')) {
            axios.post(urlAxios).then(({data}) => {
                dispatch(setUser(data.data))
                navigate(steamData.slice(0, steamData.indexOf("?")))
                setCookie('access_token', data.data.access_token)
            }).catch(er => {
                console.log('LOGIN', er)
            })
        } else if (getCookies('access_token')) {

            axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('access_token')}`
            axios.get(apiLink(`api/users/auth-user`)).then(({data}) => {
                console.log(data.data)
                dispatch(setUser(data.data))
            }).catch(er => {
                console.log('erLogs', er)
            })
        }

    }, [])

    return {auth_params}
}