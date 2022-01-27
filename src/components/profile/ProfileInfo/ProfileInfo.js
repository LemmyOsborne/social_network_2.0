import React from "react";
import { Box, CircularProgress, Typography, Fade, alpha, InputBase, Button, Input } from "@mui/material";
import user from "../../../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchingProfile, fetchingStatus, updateProfilePhoto } from "../../../store/profileSlice";
import { useParams } from "react-router-dom";
import { ProfileStatus } from "./ProfileStatus";





export const ProfileInfo = () => {

    // For fade effect on profile photo
    const [checked, setChecked] = React.useState(false)

    const handleMouseEvents = () => {
        setChecked((prev) => !prev)
    }

    const dispatch = useDispatch()
    const onPhotoSelected = (e) => {
        dispatch(updateProfilePhoto(e.target.files[0]))
    }


    
    const { userId } = useParams()
    const myId = useSelector(state => state.auth.data.id)
    const { isProfileFetched, profile, status } = useSelector(state => state.profile)
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
            <Box position="relative" sx={{ width: { xs: "200px" } }}>
                <Box component="img" sx={{
                    width: "100%",
                    border: "2px solid white",
                    boxSizing: "border-box",
                }}
                    src={profile.photos.large || user} alt="Profile photo"
                    onClick={handleMouseEvents}
                />
                <Fade in={checked} timeout={{ enter: 800, exit: 800 }}>
                    <Box sx={{
                        width: { xs: "200px" },
                        height: "30%",
                        backgroundColor: () => alpha("#000", 0.5),
                        position: "absolute",
                        bottom: "4px",
                        textAlign: "center",
                    }}>
                        <Button
                            onChange={onPhotoSelected}
                            variant="text"
                            component="label"
                            sx={{
                                color: "white",
                                textTransform: "none"
                            }}
                        >
                            Update photo
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </Box>
                </Fade>
            </Box>
            <Box>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 500 }}>
                    {profile.fullName}
                </Typography>
                <ProfileStatus status={status} userId={userId} />
            </Box>
        </Box>
    )
}
