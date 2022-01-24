import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI} from "../api/api";

export const login = createAsyncThunk(
    "auth/login",
    async (loginData) => {
        await authAPI.login(loginData)
        const response = await authAPI.fetchingMe()
        return response.data
    }
)
export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        const response = await authAPI.logout()
        return response.data
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState: {
        data:{
            id: null,
            email: null,
            login: null,
        },
        isAuth: false,
        isSubmiting: false,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state) => {
                state.isSubmiting = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.data = action.payload.data
                state.isAuth = true
                state.isSubmiting = false
            })
            .addCase(logout.fulfilled, (state) => {
                state.data = ''
                state.isAuth = false
            })
    }
})


export default authSlice.reducer


