import React from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../store/hooks"
 
interface Props {
    children: React.ReactNode 
}

export const WithAuthRedirect = ({ children }: Props) => {
    const { isAuth } = useAppSelector(state => state.auth)
    if (!isAuth) return <Navigate to="/login"/>

    return children
}

