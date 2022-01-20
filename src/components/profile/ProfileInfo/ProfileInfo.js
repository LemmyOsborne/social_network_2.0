import {Box, Typography} from "@mui/material";
import user from "../../../assets/user.png";

export const ProfileInfo = () => {
    return (
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
    )
}
