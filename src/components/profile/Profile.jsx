import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";
import {Box} from "@mui/material";

const Profile = () => {
    return (
        <>
            <Box sx={{backgroundColor: "gray", height: 200, zIndez: -1}}/>
            <ProfileInfo/>
            <Box sx={{ pt: 15, mt: 8 }}>
                <Posts/>
            </Box>
        </>
    )
}

export default Profile