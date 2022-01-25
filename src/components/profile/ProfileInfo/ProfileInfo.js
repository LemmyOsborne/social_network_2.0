import {Box, Typography} from "@mui/material";
import user from "../../../assets/user.png";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "../../common/Preloader";
import {useEffect} from "react";
import {fetchingProfile} from "../../../store/profileSlice";
import {useParams} from "react-router-dom";

export const ProfileInfo = () => {

    const dispatch = useDispatch()
    const {userId} = useParams()
    const myId = useSelector(state => state.auth.id)

    useEffect(() => {
        dispatch(fetchingProfile((userId || myId)))
    },[userId])

    const profile = useSelector(state => state.profile.profile)
    if (!profile) return <Preloader/>
    return (
        <Box sx={{display: "flex", p: 4, mb: 4}}>
            <Box component="img" sx={{width: 1 / 5, mr: 8}} src={profile.photos.large || user} alt="Profile photo"/>
            <Box>
                <Typography variant="h4" sx={{mb: 1, fontWeight: 500}}>
                    {profile.fullName}
                </Typography>
                <Typography>
                    My status
                </Typography>
                {profile.lookingForAJob
                    ? <Typography>Looking for a job</Typography>
                    : <Typography>Don't need in a job</Typography>}
            </Box>
        </Box>
    )
}
