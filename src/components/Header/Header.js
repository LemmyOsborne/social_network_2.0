import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {useSelector} from "react-redux";

export default function Header() {

    const isAuth = useSelector(state => state.auth.isAuth)
    const login = useSelector(state => state.auth.data.login)

    return (
        <Box>
            <AppBar position="static" sx={{ bgcolor: "info.main" }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography sx={{ ml: 4 }}>
                        Social Network
                    </Typography>
                    {isAuth && login || <Button sx={{ mr: 4 }} color="inherit">Login</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}