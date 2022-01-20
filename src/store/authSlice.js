import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI} from "../api/api";

export const fetchingMe = createAsyncThunk(
    "me/fetchingMe",
    async () => {
        const response = await authAPI.fetchingMe()
        return response.data
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: {
            id: null,
            email: null,
            login: null
        },
        isAuth: false,
    },
    reducers: {},
    extraReducers: {
        [fetchingMe.fulfilled]: (state, action) => {
            state.data = action.payload.data
            state.isAuth = true
        }
    }
})



export default authSlice.reducer


