import { createSlice } from "@reduxjs/toolkit";
import {IDonateInfo, IGeneralInfo, INews, INewsSingle, IServers, IUser} from "../models";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: <IUser>{},
        category: <string>'',
        page: <string>'',
        donateInfo: <IDonateInfo[]>[],
        generalInfo: <IGeneralInfo>{},
        news: <INewsSingle>[],
        servers: <IServers[]>[],
        language: <string>'',
        infoForPay: {
            value: 0,
            currency: "dollar"
        },
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        changeUserBalance(state, action) {
            let newUser = state.user
            newUser.balance = state.user.balance - action.payload

            state.user = newUser
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