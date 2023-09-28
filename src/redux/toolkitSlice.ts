import { createSlice } from "@reduxjs/toolkit";
import {IDonateInfo, IGeneralInfo, IUser} from "../models";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: <IUser>{},
        category: <string>'',
        page: <string>'',
        donateInfo: <IDonateInfo[]>[],
        generalInfo: <IGeneralInfo>{},
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
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
    }
})

export default toolkitSlice.reducer;
export const {

    setUser,

    setCategory,
    setPage,

    setDonateInfo,
    setGeneralInfo,

} = toolkitSlice.actions;