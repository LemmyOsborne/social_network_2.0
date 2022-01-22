import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"

export default function Header() {

    const isAuth = useSelector(state => state.auth.isAuth)
    const login = useSelector(state => state.auth.data.login)

    const navigate = useNavigate()


    return (
        <Box>
            <AppBar position="static" sx={{bgcolor: "info.main"}}>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Typography sx={{ml: 4}}>
                        Social Network
                    </Typography>
                    {isAuth
                        ? <Button sx={{mr: 4}} color="inherit" onClick={() => navigate("/profile", {replace: true})}>{login}</Button>
                        : <Button sx={{mr: 4}} color="inherit" onClick={() => navigate("/login", {replace: true})}>Login</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}