import { createSlice } from "@reduxjs/toolkit";
import {IDonateInfo, IGeneralInfo, INews, INewsSingle, IServer, IUser} from "../models";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: <IUser>{},
        category: <string>'',
        page: <string>'',
        donateInfo: <IDonateInfo[]>[],
        generalInfo: <IGeneralInfo>{},
        news: <INewsSingle>[],
        servers: <IServer[]>[],
        language: <string>'',
        infoForPay: {
            value: 0,
            currency: "USD"
        },
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        changeUserBalance(state, action) {
            let user = state.user
            const userClusterBalance = user.balance.filter(item => item.server.id === action.payload.cluster)[0]
            const userClusterBonusBalance = user.balance.filter(item => item.server.id === action.payload.cluster)[0]
            const actionBalance = state.user.balance.filter(item => item.server.id === action.payload.cluster)[0].balance
            const actionBonusBalance = state.user.balance.filter(item => item.server.id === action.payload.cluster)[0].balance_bonus

            userClusterBalance.balance = actionBalance - action.payload.balance
            userClusterBonusBalance.balance_bonus = actionBonusBalance - action.payload.balance_bonus

            state.user = user
        },

        setCategory(state, action) {
            state.category = action.payload
        },
        setPage(state, action) {
            state.page = action.payload
        },

        setDonateInfo(state, action) {
            state.donateInfo = action.payload
        },
        setGeneralInfo(state, action) {
            state.generalInfo = action.payload
        },

        setNews(state, action) {
            state.news = action.payload
        },
        setServers(state, action) {
            state.servers = action.payload
        },
        setLanguage(state, action) {
            state.language = action.payload
        },
        setInfoForPay(state, action) {
            state.infoForPay = action.payload
        }
    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    changeUserBalance,

    setCategory,
    setPage,

    setDonateInfo,
    setGeneralInfo,

    setNews,
    setServers,
    setLanguage,

    setInfoForPay,

} = toolkitSlice.actions;