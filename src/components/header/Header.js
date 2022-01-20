import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

export default function Header() {
    return (
        <Box>
            <AppBar position="static" sx={{ bgcolor: "info.main" }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography sx={{ ml: 4 }}>
                        Social Network
                    </Typography>
                    <Button sx={{ mr: 4 }} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}