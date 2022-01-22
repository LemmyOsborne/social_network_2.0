import React from 'react';
import {Box, Button, Paper} from "@mui/material";
import {useDispatch} from "react-redux";
import {logout} from "../../store/authSlice";

const Settings = () => {

    const dispatch = useDispatch()
    const onSubmit = (e) =>{
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <Box component="form" onSubmit={onSubmit} sx={{ position: "absolute", left: "50%", mt: 4 }}>
            <Paper elevation={10} sx={{width: 200, height: 200, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Button variant="contained" type="submit">Log Out</Button>
            </Paper>
        </Box>
    );
};

export default Settings;