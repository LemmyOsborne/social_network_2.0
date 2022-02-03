import React from "react"
import { Link, Box } from "@mui/material"
import { NavLink } from "react-router-dom"
import "./Sidebar.css"
import { useAppSelector } from "../../store/hooks"

export const Sidebar = () => {

    const { id } = useAppSelector(state => state.auth.data)
    return (
        <Box sx={{display: "grid", p: 7}}>
            <Link variant="h6" color="info.main" sx={{textDecoration: "none"}} component={NavLink} to={"/profile/" + id}>Profile</Link>
            {/* <Link variant="h6" color="info.main" sx={{textDecoration: "none"}} component={NavLink} to="/dialogs">Dialogs</Link> */}
            <Link variant="h6" color="info.main" sx={{textDecoration: "none"}} component={NavLink} to="/news">News</Link>
            <Link variant="h6" color="info.main" sx={{textDecoration: "none"}} component={NavLink} to="/users">Users</Link>
            <Link variant="h6" color="info.main" sx={{textDecoration: "none"}} component={NavLink} to="/settings">Settings</Link>
        </Box>
    )
}

