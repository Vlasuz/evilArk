import React, {useEffect} from 'react';
import {Main} from "./pages/main/main";

import './assets/styles/style.css'
import './assets/js/app.min'
import {Sidebar} from "./components/sidebar/sidebar";
import {SvgIcons} from "./components/svgIcons/svgIcons";
import {responsiveSite} from "./functions/responsive";
import {Route, Routes, useLocation} from "react-router-dom";
import {Category} from "./pages/category/category";
import {useSelector} from "react-redux";
import {Breadcrumbs} from "./components/breadcrumbs/breadcrumbs";
import {Shop} from "./pages/shop/shop";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import {IRoutes} from "./models";
import {Profile} from "./pages/profile/profile";
import {Bonuses} from "./pages/bonuses/bonuses";
import {Purchases} from "./pages/purchases/purchases";
import {Inventory} from "./pages/inventory/inventory";
import {Roulette} from "./pages/roulette/roulette";
import { Header } from './components/header/header';


function App() {

    useEffect(() => {
        responsiveSite()
    }, [])

    const location = useLocation()

    const routes: IRoutes[] = [
        {
            path: '/',
            element: <Main/>,
            isPublic: true,
        },
        {
            path: '/category',
            element: <Category/>,
            isPublic: true,
        },
        {
            path: '/shop',
            element: <Shop/>,
            isPublic: true,
        },
        {
            path: '/profile',
            element: <Profile/>,
            isPublic: false,
        },
        {
            path: '/bonuses',
            element: <Bonuses/>,
            isPublic: false,
        },
        {
            path: '/purchases',
            element: <Purchases/>,
            isPublic: false,
        },
        {
            path: '/inventory',
            element: <Inventory/>,
            isPublic: false,
        },
        {
            path: '/roulette',
            element: <Roulette/>,
            isPublic: false,
        },
    ]

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
