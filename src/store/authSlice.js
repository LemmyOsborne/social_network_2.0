import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI} from "../api/api";

export const fetchingMe = createAsyncThunk(
    "auth/fetchingMe",
    async () => {
        const response = await authAPI.fetchingMe()
        return response.data
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (loginData) => {
        const response = await authAPI.login(loginData)
        return response.data
    }
)
export const logout = createAsyncThunk(
    "auth/login",
    async () => {
        const response = await authAPI.logout()
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
        isSubmiting: false
    },
    reducers: {},
    extraReducers: {
        [fetchingMe.fulfilled]: (state, action) => {
            state.data = action.payload.data
            state.isAuth = true
        },
        [login.pending]: (state) => {
            state.isSubmiting = true
        },
        [login.fulfilled]: (state, action) => {
            state.data = action.payload.data
            state.isAuth = true
            state.isSubmiting = false
        },
        [logout.fulfilled]: (state) => {
            state.data = null
            state.isAuth = false
        }
    }
})



export default authSlice.reducer


