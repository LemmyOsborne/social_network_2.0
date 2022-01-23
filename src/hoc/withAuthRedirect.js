import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";


export const withAuthRedirect = ({children}) => {

    const isAuth = useSelector(state => state.auth.isAuth)

    if (!isAuth) return <Navigate to="/login" />
    return children
}

