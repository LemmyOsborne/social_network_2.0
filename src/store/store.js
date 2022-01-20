import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profileSlice"
import authReducer from "./authSlice"
import dialogsReducer from "./dialogsSlice"
import newsReducer from "./newsSlice"


export default configureStore({
    reducer: {
        profile: profileReducer,
        auth: authReducer,
        dialogs: dialogsReducer,
        news: newsReducer,
    }
})