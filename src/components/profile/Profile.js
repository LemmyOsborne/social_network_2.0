import {Box, TextField, Typography} from "@mui/material";
import user from "../../assets/user.png"

const Profile = () => {

    return (
        <>
            <Box sx={{display: "flex", p: 4, mb: 4}}>
                <Box component="img" sx={{width: 1 / 5, mr: 8}} src={user} alt="Profile photo"/>
                <Box>
                    <Typography variant="h4" sx={{mb: 1, fontWeight: 500}}>
                        LemmyOsborne
                    </Typography>
                    <Typography>
                        My status
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    My posts
                </Typography>
                <TextField id="standard-basic" label="Enter your message" variant="standard" />
            </Box>
        </>
    )
}

export default Profile