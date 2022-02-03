import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authAPI } from "../api/api"

export const fetchingMe = createAsyncThunk(
    "auth/fetchingMe",
    async () => {
        const response = await authAPI.fetchingMe()
        return response.data
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (loginData: object) => {
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


interface AuthSliceState {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    isAuth: boolean
    isSubmiting: boolean
    isAppInitialized: boolean
}

const initialState: AuthSliceState = {
    data:{
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    isSubmiting: false,
    isAppInitialized: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchingMe.fulfilled, (state, action: AnyAction) => {
                state.isAppInitialized = true
                if (action.payload.resultCode === 0) {
                    state.isAuth = true
                    state.data = action.payload.data
                }
            })
            .addCase(login.pending, (state) => {
                state.isSubmiting = true
            })
            .addCase(login.fulfilled, (state, action: AnyAction) => {
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


