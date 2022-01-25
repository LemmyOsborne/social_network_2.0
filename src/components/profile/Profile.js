import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";
import {Box} from "@mui/material";

const Profile = () => {
    return (
        <>
            <Box sx={{backgroundColor: "gray", height: 300}}/>
            <ProfileInfo/>
            <Box sx={{ pt: 15 }}>
                <Posts/>
            </Box>
        </>
    )
}

export default Profile