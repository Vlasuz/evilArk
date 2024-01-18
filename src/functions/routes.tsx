import {IRoutes} from "../models";
import {Main} from "../pages/main/Main";
import {Category} from "../pages/category/Category";
import {Shop} from "../pages/shop/Shop";
import {Profile} from "../pages/profile/Profile";
import {Bonuses} from "../pages/bonuses/Bonuses";
import {Purchases} from "../pages/purchases/Purchases";
import {Inventory} from "../pages/inventory/Inventory";
import {Roulette} from "../pages/roulette/Roulette";
import React from "react";
import { PageNotFound } from "../pages/pageNotFound/pageNotFound";
import {User} from "../pages/user/User";
import {Text} from "../pages/text/Text";
import {RouletteMain} from "../pages/rouletteMain/RouletteMain";
import {BalanceInfo} from "../pages/balanceInfo/BalanceInfo";

export const routes: IRoutes[] = [
    {
        path: '*',
        element: <PageNotFound/>,
        isPublic: true,
    },
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
        isPublic: true,
    },
    {
        path: '/roulette/:rouletteId',
        element: <RouletteMain/>,
        isPublic: true,
    },
    {
        path: '/user/:userId',
        element: <User/>,
        isPublic: true,
    },
    {
        path: '/docs/:docsId',
        element: <Text/>,
        isPublic: true,
    },
    {
        path: '/balance-info',
        element: <BalanceInfo/>,
        isPublic: true,
    },
]
