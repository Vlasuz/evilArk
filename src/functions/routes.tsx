import {IRoutes} from "../models";
import {Main} from "../pages/main/main";
import {Category} from "../pages/category/category";
import {Shop} from "../pages/shop/shop";
import {Profile} from "../pages/profile/profile";
import {Bonuses} from "../pages/bonuses/bonuses";
import {Purchases} from "../pages/purchases/purchases";
import {Inventory} from "../pages/inventory/inventory";
import {Roulette} from "../pages/roulette/roulette";
import React from "react";
import { PageNotFound } from "../pages/pageNotFound/pageNotFound";

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
        isPublic: false,
    },
]
