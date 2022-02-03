import React from "react"
import { Box, Button, Paper, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { logout } from "../../store/authSlice"
import { useAppDispatch, useAppSelector } from "../../store/hooks"


export const Logout = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {isSubmiting} = useAppSelector(state => state.auth)
    const onClick = () => {
        dispatch(logout())
            .then(() => {
                if (!isSubmiting) navigate("/login")
            })
    }

    return (
        <Box sx={{left: "50%", mt: 4}}>
            <Paper
                sx={{
                    width: 200,
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Typography variant="h6" sx={{mb: 3}}>Wanna log out?</Typography>
                <Button variant="contained" type="submit" onClick={onClick}
                        disabled={isSubmiting}>{isSubmiting ? "Loading..." : "Log Out"}</Button>
            </Paper>
        </Box>
    )
}