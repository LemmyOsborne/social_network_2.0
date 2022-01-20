import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {createTheme, Grid, ThemeProvider} from "@mui/material";
import Profile from "./components/profile/Profile";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FBF7F0",
        },
        secondary: {
            main: "#D9E4DD",
        },
        info: {
            main: "#555555",
        }
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
        <Grid container>
            <Grid item xs={12}>
            <Header/>
            </Grid>
            <Grid item xs={2} sx={{ bgcolor: "secondary.main" }}>
            <Sidebar/>
            </Grid>
            <Grid item xs={10} sx={{ bgcolor: "primary.main" }}>
                <Profile />
            </Grid>
        </Grid>
        </ThemeProvider>
    )
}

export default App;
