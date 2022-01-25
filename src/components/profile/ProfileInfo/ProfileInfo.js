import {Box, Typography} from "@mui/material";
import user from "../../../assets/user.png";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "../../common/Preloader";
import {useEffect} from "react";
import {fetchingProfile, fetchingStatus} from "../../../store/profileSlice";
import {useParams} from "react-router-dom";
import {ProfileStatus} from "./ProfileStatus";

export const ProfileInfo = () => {

    const dispatch = useDispatch()
    const {userId} = useParams()
    const myId = useSelector(state => state.auth.id)

    useEffect(() => {
        dispatch(fetchingProfile((userId || myId)))
        dispatch(fetchingStatus((userId || myId)))
    },[userId])

    const {isProfileFetched, profile, status} = useSelector(state => state.profile)
    if (!isProfileFetched) return <Preloader/>
    return (
        <Box sx={{display: "flex", p: 4, mb: 4}}>
            <Box component="img" sx={{width: 1 / 5, mr: 8}} src={profile.photos.large || user} alt="Profile photo"/>
            <Box>
                <Typography variant="h4" sx={{mb: 1, fontWeight: 500}}>
                    {profile.fullName}
                </Typography>
                <ProfileStatus status={status} userId={userId}/>
            </Box>
        </Box>
    )
}
