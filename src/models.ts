import {ReactElement} from "react";

export interface IRoutes {
    path: string
    element: ReactElement
    isPublic: boolean
}

export interface ICluster {
    description: string
    id: string | number
    image: string | null
    name: string
    server_id: string | number
    url: string
}

export interface IServers {
    clusters: ICluster[]
    id: string | number
    image: string
    name: string
}

export interface IUser {
    avatar: string
    balance: number
    email: string | null
    id: number | string
    level: {
        color_number: null | string
        name: null | string
    }
    local_country_code: string
    name: string
    profile_url: string
    role: string
    steam_id: number
}

export interface IFilterShop {
    name: string
    category: string[]
    orderBy: {
        order: string
        isFromLow: boolean
    }
}

export interface INews {
    id: number | string
    title: string
    text: string
    image: string
    updated_at: string
    created_at: string
    server: IServers
    tags: INewsTag[]
}

export interface INewsTag {
    id: string | number
    name: string
    slug: string
}

export interface IBannerInfo {
    button_text: string
    button_url: string
    text: string
    title: string
}

export interface IAboutInfo {
    title: string
    sub_title: string
    text: string
}

export interface IAboutItems {
    id: number | string
    title: string
    text: string
    icon: string
    updated_at: string
    created_at: string
}

export interface IDonateInfo {
    icon: string
    url: string
    description: string
}

export interface IGeneralInfo {
    discord_url: string
    email_url: string
    twitter_url: string
    facebook_url: string
    instagram_url: string
    copyright: string
    footer_logo: string
    header_logo: string
}

export interface INewsSingle {
    isOpen?: boolean,
    news?: INews
}

export interface ICategory {
    "id": number | string,
    "name": string,
    "type": string,
    "discount": []
}

export interface ISort {
    isActive: boolean
    sortItem: string
}

export interface IProduct {
    "id": string | number,
    "name": string,
    "description": string,
    "category": ICategory[],
    "icon": string,
    "price": string,
    "amount": number,
    "sales": number,
    "sex": string,
    "purchase_interval": number,
    "available": number,
    "level": number,
    "quality": string,
    "server": IServers
}
