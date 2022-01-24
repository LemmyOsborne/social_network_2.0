import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profileSlice"
import authReducer from "./authSlice"
import dialogsReducer from "./dialogsSlice"
import newsReducer from "./newsSlice"
import usersReducer from "./usersSlice"


export default configureStore({
    reducer: {
        profile: profileReducer,
        auth: authReducer,
        dialogs: dialogsReducer,
        news: newsReducer,
        users: usersReducer
    }
})