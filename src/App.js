import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {createTheme, Grid, ThemeProvider} from "@mui/material";
import Profile from "./components/profile/Profile";
import {Routes, Route} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FBF7F0",
            contrastText: "#FBF7F0"
        },
        secondary: {
            main: "#D9E4DD",
            contrastText: "#555555"
        },
        info: {
            main: "#555555",
            contrastText: "#555555"
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
                <Grid item xs={2} sx={{bgcolor: "secondary.main"}}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={10} sx={{bgcolor: "primary.main"}}>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default App;
