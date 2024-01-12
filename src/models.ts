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

export interface IServer {
    clusters?: ICluster[]
    id: string | number
    image: string
    name: string
    is_pve: boolean
    is_active: boolean
}

export interface IUser {
    avatar: string
    balance: IBalance[]
    email: null | string
    id: number | string
    level: IUserLevel[]
    local_country_code: string
    name: string
    profile_url: string
    role: string
    steam_id: string
    eos_id: string
}

export interface IUserLevel {
    color: string
    color_PVE: null | string
    level_name: null | string
    level_name_PVE: null | string
    server: IServer
    until_next_discount: {
        cost: number
        level_name: string
        color: string
    }
}

export interface IBalance {
    balance: number
    id: number | string
    server: IServer
    balance_bonus: number
}

export interface IFilterShop {
    searchTerm: string
    category: string
    orderBy: string
    orderDirection: string
}

export interface INews {
    id: number | string
    title: string
    text: string
    image: string
    updated_at: string
    created_at: string
    server: IServer
    tags: INewsTag[]
    cluster_settings_en?: string
    cluster_settings_ru?: string
    cluster_settings_ua?: string
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
    isOpen?: boolean
    news?: INews
}

export interface ICategory {
    id: number | string
    name: string
    type: string
    discount: {
        id: number | string
        discount: number
        sales_by: string
        description: string
    }[]
    server: IServer
}

export interface ISort {
    isActive: boolean
    sortItem: string
}

export interface IModule {
    id: number | string
    name: string
    products: IProduct[]

}

export interface IProduct {
    id: string | number
    name: string
    product_percent: number
    module: IModule[]
    description: string
    is_price_bonus: boolean
    category: ICategory[]
    icon: string
    price: string
    size: number
    price_without_sales: string
    amount: number
    sales: number
    sex: string
    purchase_interval: number
    available: number
    level: number
    quality: string
    server: IServer
    name_en: string
    name_ua: string
    sales_by: string
}

export interface IProductSingle {
    id: 1
    name: string
    description: string
    category: ICategory[]
    icon: string
    price: string
    is_price_bonus: boolean
    amount: string
    sales: string
    sex: string
    purchase_interval: string
    available: string
    level: string
    quality: string
    server: IServer
    module: IModule[]
    damage: null
    price_without_sales: string
    durability: any
    food: any
    health: any
    movement_speed: any
    neuter: any
    oxygen: any
    stamina: any
    torpidity: any
    weight: any
    case: IProduct[]
    is_case: number | boolean
    name_en: string
    name_ua: string
    description_en: string
    description_ua: string
    is_proposal: boolean
    is_module: boolean
    proposal: IProduct[]
}

export interface IUserDiscount {
    description: null | string
    discount: number
    id: number
    user: string
    user_id: number
    server: IServer
}

export interface IPromoCode {
    id: number | string
    referral: string
    server: IServer
    type: string
    user: IUser
}

export interface IPromoStatistic {
    avatar: string
    id: string | number
    name: string
    profile_url: string
    real_name: string
    referrals: IPromoCode
    steam_id: number
}
