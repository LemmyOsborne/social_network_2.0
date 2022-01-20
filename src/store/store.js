import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profileSlice"
import authReducer from "./authSlice"


export default configureStore({
    reducer: {
        profile: profileReducer,
        auth: authReducer
    }
})