import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";


export const WithAuthRedirect = ({children}) => {

    const isAuth = useSelector(state => state.auth.isAuth)

    if (!isAuth) return <Navigate to="/login" />
    return children
}

