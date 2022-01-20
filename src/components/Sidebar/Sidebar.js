import {Box} from "@mui/material";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <Box sx={{ display: "grid", rowGap: 1, p: 4 }}>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Dialogs</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </Box>
    )
}

export default Sidebar