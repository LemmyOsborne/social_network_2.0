import React from 'react';
import {ProfileSettings} from "./ProfileSettings";
import {Logout} from "./Logout";
import {Box, Typography} from "@mui/material";


export const Settings = () => {

    return (
        <Box sx={{ m: "4rem auto", width: "fit-content" }}>
            <Typography variant="h4" marginBottom={4}>Update your profile</Typography>
            <ProfileSettings/>
            <Logout/>
        </Box>
    )
}

