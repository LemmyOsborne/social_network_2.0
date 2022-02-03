import React from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../store/hooks"


export const WithAuthRedirect = ({ children }) => {
    const { isAuth } = useAppSelector(state => state.auth)
    if (!isAuth) return <Navigate to="/login"/>

    return children
}

