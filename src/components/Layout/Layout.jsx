import React from 'react';
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Grid } from "@mui/material";
import { Outlet } from 'react-router-dom';


export const Layout = () => {
    return (
        <Grid container >
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={2} bgcolor="grey.800">
                <Sidebar />
            </Grid>
            <Grid item xs={10} bgcolor="#FDFAF6">
                <Outlet />
            </Grid>
        </Grid >
    )
}
