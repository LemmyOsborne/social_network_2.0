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
        isAppInitialized: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchingMe.fulfilled, (state, action) => {
                state.isAppInitialized = true
                if (action.payload.resultCode === 0) {
                    state.isAuth = true
                    state.data = action.payload.data
                }
            })
            .addCase(login.pending, (state) => {
                state.isSubmiting = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.data.id = action.payload.data
                state.isAuth = true
                state.isSubmiting = false
            })
            .addCase(logout.pending, (state) => {
                state.isSubmiting = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.isSubmiting = false
                state.isAuth = false
            })
    }
})


export default authSlice.reducer


