import React from 'react';
import {Avatar, Button, Grid, Typography} from "@mui/material";
import user from "../../../assets/user.png"
import {follow, unfollow} from "../../../store/usersSlice";
import {useDispatch} from "react-redux";


const User = ({name, status, id, followed, photos: {small}}) => {

    const dispatch = useDispatch()
    return (
        <Grid container>
            <Grid item xs={4}>
                <Avatar alt={name} src={small || user} sx={{width: 100, height: 100, mb: 2}}/>
                <Typography>
                    {name}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                {status}
            </Grid>
            <Grid item xs={4}>
                {followed
                    ? <Button variant="contained" onClick={() => dispatch(unfollow({id}))}>Unfollow</Button>
                    : <Button variant="contained" onClick={() => dispatch(follow({id}))}>Follow</Button>}
            </Grid>
        </Grid>
    );
};

export {User};