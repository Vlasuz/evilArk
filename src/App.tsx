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
import {IRoutes} from "./models";
import { Header } from './components/header/header';
import { donateInfo } from './api/donateInfo';
import { routes } from './functions/routes';
import {generalInfo} from "./api/generalInfo";


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        responsiveSite()

        generalInfo({dispatch})
        donateInfo({dispatch})
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
                            routes.map((item: IRoutes) => <Route key={item.path} element={item.element} path={item.path} />)
                        }

                    </Routes>

                </CSSTransition>
            </TransitionGroup>

        </div>
    );
}

export default App;
