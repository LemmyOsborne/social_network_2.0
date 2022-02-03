import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { useAppSelector } from "../../store/hooks"
import { useNavigate } from "react-router-dom"
import React from "react"


export const Header = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const login = useAppSelector(state => state.auth.data.login)

    const navigate = useNavigate()

    return (
        <Box>
            <AppBar position="static" sx={{bgcolor: "info.main"}}>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Typography sx={{ml: 4}}>
                        Social Network
                    </Typography>
                    {isAuth
                        ? <Button sx={{mr: 4}} color="inherit" onClick={() => navigate("/profile")}>
                            {login}</Button>
                        : <Button sx={{mr: 4}} color="inherit"
                                  onClick={() => navigate("/login")}>Login</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}