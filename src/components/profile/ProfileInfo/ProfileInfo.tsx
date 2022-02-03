import React from "react"
import { Box, CircularProgress, Typography } from "@mui/material"
import { useEffect } from "react"
import { fetchingProfile, fetchingStatus } from "../../../store/profileSlice"
import { useParams } from "react-router-dom"
import { ProfileStatus } from "./ProfileStatus"
import { ProfilePhoto } from './ProfilePhoto'
import { useAppDispatch, useAppSelector } from "../../../store/hooks"




export const ProfileInfo = () => {

    const dispatch = useAppDispatch()
    const { userId } = useParams()
    const myId = useAppSelector(state => state.auth.data.id)
    const { isProfileFetched, profile, status } = useAppSelector(state => state.profile)
    useEffect(() => {
        dispatch(fetchingProfile((userId || myId)))
        dispatch(fetchingStatus((userId || myId)))
    }, [userId, profile])

    
    if (!isProfileFetched) return <CircularProgress />

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            p: 4,
            position: "absolute",
            top: "15%",
            left: "50%"
        }}>
           <ProfilePhoto profile={profile} dispatch={dispatch} />
            <Box>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 500 }}>
                    {profile.fullName}
                </Typography>
                <ProfileStatus status={status} userId={userId} />
            </Box>
        </Box>
    )
}
