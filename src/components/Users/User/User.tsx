import React from "react"
import { Avatar, Button, Grid, Typography } from "@mui/material"
// @ts-ignore
import user from "../../../assets/user.png"
import { follow, unfollow, UserType } from "../../../store/usersSlice"
import { NavLink } from "react-router-dom"
import { useAppDispatch } from "../../../store/hooks"



const User = ({ name, status, id, followed, photos: {small} }: UserType) => {

    const dispatch = useAppDispatch()
    return (
        <Grid container alignItems="center">
            <Grid item xs={4}>
                <Avatar component={NavLink} to={"/profile/" + id} alt={name} src={small || user}
                        sx={{width: 100, height: 100, mb: 2}}/>
                <Typography variant="h6">
                    {name}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography>
                    {`Status: ${status || ""}`}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                {followed
                    ? <Button variant="contained" onClick={() => dispatch(unfollow(id))}>Unfollow</Button>
                    : <Button variant="contained" onClick={() => dispatch(follow(id))}>Follow</Button>}
            </Grid>
        </Grid>
    );
};

export {User};