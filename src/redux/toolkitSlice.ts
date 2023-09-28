import { createSlice } from "@reduxjs/toolkit";
import {IUser} from "../models";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: <IUser>{},
        category: <string>'',
        page: <string>'',
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
    }
})

export default toolkitSlice.reducer;
export const {

    setUser,

    setCategory,
    setPage,

} = toolkitSlice.actions;