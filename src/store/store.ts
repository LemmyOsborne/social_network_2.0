import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "./profileSlice"
import authReducer from "./authSlice"
import newsReducer from "./newsSlice"
import usersReducer from "./usersSlice"


const store = configureStore({
    reducer: {
        profile: profileReducer,
        auth: authReducer,
        news: newsReducer,
        users: usersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

