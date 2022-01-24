import React from 'react';
import {Box, Button, Paper} from "@mui/material";
import {useDispatch} from "react-redux";
import {logout} from "../../store/authSlice";
import {useNavigate} from "react-router-dom"

const Settings = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onClick = () =>{
        dispatch(logout())
        navigate("/login")
    }

    return (
        <Box sx={{ position: "absolute", left: "50%", mt: 4 }}>
            <Paper elevation={10} sx={{width: 200, height: 200, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Button variant="contained" type="submit" onClick={onClick}>Log Out</Button>
            </Paper>
        </Box>
    );
};

export default Settings;