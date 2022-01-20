import {Box, Link} from "@mui/material";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <Box sx={{display: "grid", p: 7}}>
            <Link variant="h6" color="info.main" sx={{textDecoration: "none"}} component={NavLink} to="/profile">Profile</Link>
            <Link variant="h6" color="info.main" sx={{textDecoration: "none"}} component={NavLink} to="/dialogs">Dialogs</Link>
            <Link variant="h6" color="info.main" sx={{textDecoration: "none"}} component={NavLink} to="/news">News</Link>
            <Link variant="h6" color="info.main" sx={{textDecoration: "none"}} component={NavLink} to="/music">Music</Link>
            <Link variant="h6" color="info.main" sx={{textDecoration: "none"}} component={NavLink} to="/users">Users</Link>
            <Link variant="h6" color="info.main" sx={{textDecoration: "none"}} component={NavLink} to="/settings">Settings</Link>
        </Box>
    )
}

export default Sidebar