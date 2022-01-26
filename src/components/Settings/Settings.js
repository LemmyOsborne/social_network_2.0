import React from 'react';
import {ProfileSettings} from "./ProfileSettings";
import {Logout} from "./Logout";
import {Box} from "@mui/material";


export const Settings = () => {

    return (
        <Box sx={{ m: "4rem auto", width: "fit-content" }}>
            <ProfileSettings/>
            <Logout/>
        </Box>
    )
}

