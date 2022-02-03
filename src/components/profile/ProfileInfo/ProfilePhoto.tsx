import React, { FormEventHandler, useState } from "react"
import { Fade, Box, Button, alpha } from "@mui/material"
// @ts-ignore
import user from "../../../assets/user.png"
import { Profile, updateProfilePhoto } from "../../../store/profileSlice"
import { AppDispatch } from "../../../store/store"


type Props = {
    profile: Profile
    dispatch: AppDispatch
}

export const ProfilePhoto = ({ profile, dispatch }: Props) => {
    
    const [checked, setChecked] = useState(false)

    const handleMouseEvents = () => {
        setChecked((prev) => !prev)
    }

    const onPhotoSelected = (e: any) => {
        dispatch(updateProfilePhoto(e.target.files[0]))
    }
    return (
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
    )
}

