import React, {useEffect} from 'react';

import './assets/styles/style.css'
import './assets/js/app.min'
import {Sidebar} from "./components/sidebar/sidebar";
import {SvgIcons} from "./components/svgIcons/svgIcons";
import {responsiveSite} from "./functions/responsive";
import {Route, Routes, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import {IRoutes, IUser} from "./models";
import { Header } from './components/header/header';
import { donateInfo } from './api/donateInfo';
import { routes } from './functions/routes';
import {generalInfo} from "./api/generalInfo";
import {servers} from "./api/servers";
import {PageNotFound} from "./pages/pageNotFound/pageNotFound";
import {setCategory} from "./redux/toolkitSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

    const dispatch = useDispatch()
    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)

    useEffect(() => {
        responsiveSite()

        servers({dispatch})
        generalInfo({dispatch})
        donateInfo({dispatch})

        if(window.location.href.includes("?cluster")) {
            dispatch(setCategory(window.location.href.slice(window.location.href.indexOf("?cluster") + 9, window.location.href.indexOf("&") > 0 ? window.location.href.indexOf("&") : undefined)))
        }
    }, [])

    const location = useLocation()

    return (
        <div className="wrapper">
            <SvgIcons/>

            <Header/>
            <Sidebar/>

            <TransitionGroup component={null}>
                <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                    <Routes location={location}>

                        {
                            routes.map((item: IRoutes) => <Route key={item.path} element={item.isPublic ? item.element : userInfo.id ? item.element : <PageNotFound/>} path={item.path} />)
                        }

                    </Routes>

                </CSSTransition>
            </TransitionGroup>

            <ToastContainer />

        </div>
    );
}

export default App;
