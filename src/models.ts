import {ReactElement} from "react";

export interface IRoutes {
    path: string
    element: ReactElement
    isPublic: boolean
}

export interface ICluster {
    created_at: string
    description: string
    id: string | number
    image: string | null
    name: string
    server_id: string | number
    updated_at: string
    url: string
}

export interface IServers {
    clusters: ICluster[]
    created_at: string
    id: string | number
    image: string
    name: string
    updated_at: string
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
    discord_icon?: string
    discord_url: string
    email_icon?: string
    email_url: string
    twitter_icon?: string
    twitter_url: string
    facebook_icon?: string
    facebook_url: string
    instagram_icon?: string
    instagram_url: string
    description: string
    footer_logo: string
    header_logo: string
}

export interface INewsSingle {
    isOpen?: boolean,
    news?: INews
}
