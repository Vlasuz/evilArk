import React, {useEffect, useState} from 'react';

import './assets/styles/style.css'
import './assets/js/app.min'
import {Sidebar} from "./components/sidebar/Sidebar";
import {SvgIcons} from "./components/svgIcons/svgIcons";
import {responsiveSite} from "./functions/responsive";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import {IRoutes, IUser} from "./models";
import {Header} from './components/header/Header';
import {donateInfo} from './api/donateInfo';
import {routes} from './functions/routes';
import {generalInfo} from "./api/generalInfo";
import {servers} from "./api/servers";
import {PageNotFound} from "./pages/pageNotFound/pageNotFound";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TechnicalTime} from './pages/technicalTime/TechnicalTime';
import getCookies from "./functions/getCookie";
import axios from "axios";
import {apiLink} from "./hooks/apiLink";
import {AppStyled} from "./App.styled";
import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://ef8596a3033332ac01a57aa515a2f131@o4504668609642496.ingest.us.sentry.io/4507300413833216",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

function App() {

    const dispatch = useDispatch()
    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const navigate = useNavigate()

    useEffect(() => {
        responsiveSite()


        servers({dispatch})
        generalInfo({dispatch})
        donateInfo({dispatch})

        if (window.location.href.includes("?payment=true")) {
            toast.success('Оплата прошла успешно!')
            navigate('/')
        } else if (window.location.href.includes("?payment=false")) {
            toast.error('К сожалению оплата не прошла успешно!')
            navigate('/')
        }
    }, [])

    const location = useLocation()

    const [isTechnicalTime, setIsTechnicalTime] = useState(getCookies("isAdmin") ? !getCookies("isAdmin") : false)

    const [font, setFont] = useState<string>("")
    useEffect(() => {
        axios.get(apiLink("api/tech-valid")).then(({data}) => {
            setFont(data.data.font)
            setIsTechnicalTime(getCookies("isAdmin") ? !getCookies("isAdmin") : data.data.valid)
        })
    }, [])

    if (isTechnicalTime) return <TechnicalTime setIsTechnicalTime={setIsTechnicalTime}/>

    return (
            <div className="wrapper" style={{fontFamily: font}}>
                <AppStyled>

                    <SvgIcons/>

                    <Header/>
                    <Sidebar/>

                    <TransitionGroup component={null}>
                        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                            <Routes location={location}>

                                {
                                    routes.map((item: IRoutes) => <Route key={item.path}
                                                                         element={item.isPublic ? item.element : userInfo.id ? item.element :
                                                                             <PageNotFound/>} path={item.path}/>)
                                }

                            </Routes>

                        </CSSTransition>
                    </TransitionGroup>

                    <ToastContainer/>

                </AppStyled>
            </div>

    );
}

export default App;
